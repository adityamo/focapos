// import { RegisterCompanySchema } from "@/entities/regbusiness";
import { createTRPCRouter } from "@/server/api/trpc";
import { publicProcedure } from "@/server/api/trpc";
import { prisma } from "@/server/db";
import { TRPCError } from "@trpc/server";
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
      const hasCompany = user.companyId ? true : false;

      return {
        hasCompany,
      };
    }),
  registerBusiness: publicProcedure
    .input((input) => input)
    .mutation(async ({ input }: any) => {
      const { company, store } = input;
      const ownerID: string = company.ownerId;

      console.log(ownerID);
      if (!ownerID) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `User tidak boleh kosong`,
        });
      }

      const existingUser = await prisma.user.findUnique({
        where: {
          id: ownerID,
        },
      });

      if (!existingUser) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `User tidak ditemukan`,
        });
      }

      const companySend = await prisma.m001_Company.create({ data: company });

      if (!companySend) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Gagal membuat perusahaan`,
        });
      }

      const storeSend = await prisma.m003_Store.create({
        data: {
          ...store,
          companyId: companySend.id,
        },
      });

      if (storeSend) {
        const updateUser = await prisma.user.update({
          where: { id: ownerID },
          data: { companyId: companySend.id, storeId: storeSend.id },
        });

        if (!updateUser) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: `Gagal mengupdate user`,
          });
        }

        return {
          code: 200,
          message: "Success Submit",
        };
      }

      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: `Gagal Submit`,
      });
    }),
});
