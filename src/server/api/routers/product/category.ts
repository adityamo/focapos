import { createTRPCRouter } from "../../trpc";
import { protectedProcedure } from "../../trpc";
import { CategorySchema } from "@/entities/product/category";

export const categoryController = createTRPCRouter({
  createProductCategory: protectedProcedure
    .input(CategorySchema)
    .mutation(async ({ ctx, input }) => {
      const values: any = {
        code: input.code,
        name: input.name,
        isActive: input.isActive,
        store_id: input.store_id, // Ensure this is provided
        createdBy: input.createdBy?.toString(),
        updatedBy: input.updatedBy?.toString(),
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
