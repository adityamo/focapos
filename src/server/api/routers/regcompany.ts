import { createTRPCRouter } from "@/server/api/trpc";
import { publicProcedure } from "@/server/api/trpc";

export const registerBusiness = createTRPCRouter({
  getTypeCompany: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.m002_BusinessType.findMany();
  }),
});
