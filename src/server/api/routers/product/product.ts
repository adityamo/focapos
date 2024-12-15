// import { ProductSchema } from "@/entities/product/product";
import { createTRPCRouter } from "../../trpc";
import { protectedProcedure } from "../../trpc";
import { z } from "zod";
import { decryptID } from "@/helpers/EncryptHelper";

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
      const userID = decryptID(user.id);

      const productData: any = {
        productCode: input.productCode,
        productName: input.productName,
        description: input.description,
        isActive: input.isActive,
        createdBy: userID,
        updatedBy: 0,
        M003_Store: {
          connect: {
            id: input.storeId,
          },
        },
        M2001_ProductCategories: {
          connect: {
            id: input.categoryId,
          },
        },
      };

      const createProduct = await ctx.prisma.m2002_Product.create({
        data: productData,
      });

      if (!createProduct) {
        return {
          code: 500,
          message: "Failed to submit",
        };
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
          updatedBy: 0,
        }));

        const createPriceData = await ctx.prisma.m2003_ProductPrice.createMany({
          data: priceData,
        });

        if (!createPriceData) {
          return {
            code: 500,
            message: "Failed to submit price data",
          };
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
          return {
            code: 500,
            message: "Failed to submit product thumbnail",
          };
        }
      }

      return {
        code: 200,
        message: "Success Submit",
      };
    }),
});
