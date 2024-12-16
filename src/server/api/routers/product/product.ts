import { TRPCError } from "@trpc/server";
import { createTRPCRouter } from "../../trpc";
import { protectedProcedure } from "../../trpc";
import { z } from "zod";

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

      // const productData: any = {
      //   productCode: input.productCode,
      //   productName: input.productName,
      //   description: input.description,
      //   isActive: input.isActive,
      //   createdBy: userID,
      //   updatedBy: 0,
      //   M003_Store: {
      //     connect: {
      //       id: input.storeId,
      //     },
      //   },
      //   M2001_ProductCategories: {
      //     connect: {
      //       id: input.categoryId,
      //     },
      //   },
      // };

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
});
