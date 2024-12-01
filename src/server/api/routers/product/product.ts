import { createTRPCRouter } from "../../trpc";
import { protectedProcedure } from "../../trpc";
import { z } from "zod";

export const productController = createTRPCRouter({
  getCategoryDDL: protectedProcedure
    .input(
      z.object({
        store_id: z.number(),
      })
    )
    .query(async ({ input, ctx }) => {
      const ddl = await ctx.prisma.m2001_ProductCategories.findMany({
        where: {
          store_id: input.store_id,
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
});
