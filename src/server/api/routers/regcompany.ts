import {
  createTRPCRouter,
  //   protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
// import { prisma } from "@/server/db";

export const registerBusiness = createTRPCRouter({
  getTypeCompany: publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.m002_BusinessType.findMany();
    return data;
    // Cara client side
    // const ddl = await prisma.m002_BusinessType.findMany();
    // return ddl;
  }),
});
