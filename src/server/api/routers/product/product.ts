import { TRPCError } from "@trpc/server";
import { createTRPCRouter } from "../../trpc";
import { protectedProcedure } from "../../trpc";
import { z } from "zod";
import { metaResponsePrefix } from "@/components/dttable/type";

export const productController = createTRPCRouter({
  getCategoryDDL: protectedProcedure
    .input(
      z.object({
        storeId: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      const ddl = await ctx.prisma.m2001_ProductCategories.findMany({
        where: {
          storeId: input.storeId,
          isActive: true,
        },
      });

      if (!ddl) {
        return {
          code: 500,
          message: "Failed to fetch ddl categories",
        };
      }

      return {
        code: 200,
        message: "Success Fetch DDL",
        data: ddl,
      };
    }),
  getProduct: protectedProcedure
    .input((input) => input)
    .query(async ({ input, ctx }: any) => {
      try {
        const page = input?.page || 1;
        const perPage = input?.perPage || 5;
        const offset = (page - 1) * perPage;
        if (!ctx?.session?.user?.id) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: `User tidak teridentifikasi`,
          });
        }

        const data = await ctx.prisma.m2002_Product.findMany({
          where: {
            storeId: input.storeId,
            OR: input?.search
              ? [
                  {
                    name: {
                      contains: input.search,
                      mode: "insensitive", // case-insensitive search
                    },
                  },
                ]
              : undefined,
          },
          skip: input?.search ? 0 : offset,
          take: perPage,
          orderBy: {
            createdAt: "desc",
          },
          select: {
            id: true,
            productCode: true,
            productName: true,
            M2001_ProductCategories: {
              select: {
                name: true,
              },
            },
            description: true,
            M2005_ProductImage: {
              where: {
                categoryImg: "productThumbnail",
              },
              select: {
                image_url: true,
              },
            },
            M2003_ProductPrice: {
              select: {
                unitPrice: true,
              },
            },
            isActive: true,
            createdAt: true,
          },
        });

        // Count total products for the user
        const count = await ctx.prisma.m2002_Product.count({
          where: {
            storeId: input.storeId,
          },
        });

        const totalPage = Math.ceil(count / perPage);
        const nextPage = page < totalPage ? page + 1 : null;
        const prevPage = page > 1 ? page - 1 : null;

        const metaPrefix = {
          data,
          meta: {
            code: 200,
            status: "success",
            message: "Successfully fetched products",
            page,
            perPage,
            totalPage,
            nextPage,
            prevPage,
          },
        };

        return metaResponsePrefix(metaPrefix);
      } catch (err: any) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Gagal fetch product`,
        });
      }
    }),
  store: protectedProcedure
    .input((input) => input)
    .mutation(async ({ ctx, input }: any) => {
      const user: any = ctx?.session?.user;
      const userID = user.id;

      const productData = {
        storeId: input.storeId,
        categoryId: input.categoryId,
        productCode: input.productCode,
        productName: input.productName,
        description: input.description,
        isActive: input.isActive,
        createdBy: userID,
      };

      const createProduct = await ctx.prisma.m2002_Product.create({
        data: productData,
      });

      if (!createProduct) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Gagal membuat produk`,
        });
      }

      if (input.priceData && input.priceData.length > 0) {
        const priceData = input.priceData.map((price: any) => ({
          productId: createProduct.id,
          qty1: Number(price.qty1),
          qty2: Number(price.qty2),
          unitPrice: price.unitPrice,
          notes: null,
          isActive: true,
          createdBy: userID,
          updatedBy: "",
        }));

        const createPriceData = await ctx.prisma.m2003_ProductPrice.createMany({
          data: priceData,
        });

        if (!createPriceData) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: `Gagal memasukan harga`,
          });
        }
      }

      if (input.productThumbnail) {
        const createProductThumbnail =
          await ctx.prisma.m2005_ProductImage.create({
            data: {
              productId: createProduct.id,
              categoryImg: "productThumbnail",
              image_url: input.productThumbnail,
            },
          });

        if (!createProductThumbnail) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: `Gagal Upload photo`,
          });
        }
      }

      return {
        code: 200,
        message: "Success Submit",
      };
    }),
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }: any) => {
      const { id } = input;

      if (!ctx?.session?.user?.id) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `User tidak teridentifikasi`,
        });
      }

      try {
        const price = await ctx.prisma.m2003_ProductPrice.findMany({
          where: {
            productId: id,
          },
        });

        const image = await ctx.prisma.m2005_ProductImage.findMany({
          where: {
            productId: id,
          },
        });

        if (price) {
          await ctx.prisma.m2003_ProductPrice.deleteMany({
            where: { productId: id },
          });
        }

        if (image) {
          await ctx.prisma.m2005_ProductImage.deleteMany({
            where: { productId: id },
          });
        }

        await ctx.prisma.m2002_Product.delete({ where: { id: id } });

        return {
          code: 200,
          message: "Success delete",
        };
      } catch (err) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Gagal delete`,
        });
      }
    }),
});
