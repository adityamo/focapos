// import { VSMetaRequest } from "@/entities/meta";
import { createTRPCRouter } from "../../trpc";
import { protectedProcedure } from "../../trpc";
import { CategorySchema } from "@/entities/product/category";
import { metaResponsePrefix } from "@/components/dttable/type";
import { z } from "zod";

export const categoryController = createTRPCRouter({
  getProductCategory: protectedProcedure
    .input((input) => input)
    .query(async ({ input, ctx }: any) => {
      try {
        const page = input?.page || 1;
        const perPage = input?.perPage || 5;
        const offset = (page - 1) * perPage;
        // Validate session and user ID
        if (!ctx?.session?.user?.id) {
          throw new Error("User is not authenticated.");
        }

        const data = await ctx.prisma.m2001_ProductCategories.findMany({
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
          skip: input?.search ? 0 : offset, // Reset offset if search is applied
          take: perPage,
          orderBy: {
            createdAt: "desc", // Order by createdAt in ascending order
          },
        });

        // Count total products for the user
        const count = await ctx.prisma.m2001_ProductCategories.count({
          where: {
            storeId: input.storeId,
          },
        });

        // Calculate total pages and pagination details
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
        throw new Error(err.message || "Failed to fetch products.");
      }
    }),
  createProductCategory: protectedProcedure
    .input(CategorySchema)
    .mutation(async ({ ctx, input }) => {
      console.log("masuk sini");
      const values: any = {
        code: input.code,
        name: input.name,
        isActive: input.isActive,
        storeId: input.storeId, // Ensure this is provided
        createdBy: input.createdBy,
        updatedBy: input.updatedBy,
      };

      const createData = await ctx.prisma.m2001_ProductCategories.create({
        data: values,
      });

      if (!createData) {
        return {
          code: 500,
          message: "Failed to submit",
        };
      }

      return {
        code: 200,
        message: "Success Submit",
      };
    }),
  updateProductCategory: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        code: z.string(),
        name: z.string(),
        isActive: z.boolean(),
        updatedBy: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const updateData = await ctx.prisma.m2001_ProductCategories.update({
        where: { id: input.id },
        data: {
          code: input.code,
          name: input.name,
          isActive: input.isActive,
          updatedBy: input.updatedBy,
        },
      });

      if (!updateData) {
        return {
          code: 500,
          message: "Failed to submit",
        };
      }

      return {
        code: 200,
        message: "Success Submit",
      };
    }),

  deleteProductCategory: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      try {
        await ctx.prisma.m2001_ProductCategories.delete({ where: { id: id } });
        return {
          code: 200,
          message: "Success Deleted",
        };
      } catch (err) {
        return {
          code: 500,
          message: "Failed to submit",
        };
      }
    }),
  getDetailProductCategory: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const { id } = input;

      const getDetail = await ctx.prisma.m2001_ProductCategories.findUnique({
        where: {
          id: id,
        },
      });

      if (!getDetail) {
        return {
          code: 500,
          message: "Failed to fetch",
        };
      }

      return {
        code: 200,
        message: "Success fetch",
        result: getDetail,
      };
    }),
});
