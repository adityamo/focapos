// import { VSMetaRequest } from "@/entities/meta";
import { createTRPCRouter } from "../../trpc";
import { protectedProcedure } from "../../trpc";
import { CategorySchema } from "@/entities/product/category";
import { metaResponsePrefix } from "@/components/dttable/type";

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
            store_id: input.store_id,
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
            createdAt: "asc", // Order by createdAt in ascending order
          },
        });

        // Count total products for the user
        const count = await ctx.prisma.m2001_ProductCategories.count({
          where: {
            store_id: input.store_id,
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
      const values: any = {
        code: input.code,
        name: input.name,
        isActive: input.isActive,
        store_id: input.store_id, // Ensure this is provided
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
});
