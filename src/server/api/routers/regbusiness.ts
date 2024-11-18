// import { RegisterCompanySchema } from "@/entities/regbusiness";
import { createTRPCRouter } from "@/server/api/trpc";
import { publicProcedure } from "@/server/api/trpc";
import { prisma } from "@/server/db";
import { z } from "zod";

export const registerBusiness = createTRPCRouter({
  getTypeCompany: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.m002_BusinessType.findMany();
  }),
  getTypeBank: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.m1002_DataBank.findMany();
  }),
  checkHaveCompany: publicProcedure
    .input(z.object({ email: z.string().email() })) // Validasi input menggunakan zod
    .query(async ({ ctx, input }) => {
      // Cari user berdasarkan email dan sertakan data perusahaan
      const user = await ctx.prisma.user.findUnique({
        where: {
          email: input.email,
        },
        include: {
          M001_Company: true, // Asumsikan terdapat relasi 'company' di model Prisma
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      // Cek apakah user memiliki company
      const hasCompany = user.company_id ? true : false;

      return {
        hasCompany,
      };
    }),
  registerBusiness: publicProcedure
    .input((input) => input)
    .mutation(async ({ input }: any) => {
      const { company, store } = input;
      const ownerID: number = company.owner_id;

      const existingUser = await prisma.user.findUnique({
        where: {
          id: ownerID,
        },
      });

      if (!existingUser) {
        throw new Error("User Not Found");
      }

      const companySend = await prisma.m001_Company.create({ data: company });

      if (!companySend) {
        throw new Error("Failed to create company");
      }

      const storeSend = await prisma.m003_Store.create({
        data: {
          ...store,
          company_id: companySend.id,
        },
      });

      if (storeSend) {
        const updateUser = await prisma.user.update({
          where: { id: ownerID },
          data: { company_id: companySend.id, store_id: storeSend.id },
        });

        if (!updateUser) {
          return {
            code: 500,
            message: "Failed to submit",
          };
        }

        return {
          code: 200,
          message: "Success Submit",
        };
      }

      return {
        code: 500,
        message: "Failed to submit",
      };
    }),
});
