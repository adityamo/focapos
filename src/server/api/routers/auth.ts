import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { z } from "zod";

import { UserRegisterSchema } from "@/entities";
import * as bs from "bcryptjs";
import { prisma } from "@/server/db";
import { TRPCError } from "@trpc/server";

export const authRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return "trpc running bro";
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "You can see this in server side";
  }),
  getUserInfo: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
        include: {
          M001_Company: true, // Asumsikan terdapat relasi 'company' di model Prisma
          M003_Store: true,
          M1001_Roles: true,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      const finalResult = {
        id: user.id,
        name: user.name,
        companyId: user.M001_Company?.id || null,
        companyName: user.M001_Company?.companyName || null,
        image: user.image || null,
        storeId: user.M003_Store?.id || null,
        storeName: user.M003_Store?.storeName || null,
        rolesId: user.M1001_Roles?.id || null,
        rolesName: user.M1001_Roles?.rolesName || null,
      };

      return finalResult;
    }),
  registerUser: publicProcedure
    .input(UserRegisterSchema)
    .mutation(async ({ input }: any) => {
      const { name, email, password } = input;
      const passwordEncrypt = await bs.hash(password, await bs.genSalt(12));

      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `User sudah terdaftar`,
        });
      }

      const findRoles = await prisma.m1001_Roles.findFirst({
        where: {
          rolesName: "Owner",
        },
      });

      if (!findRoles) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Roles tidak ditemukan`,
        });
      }

      const registerData: any = {
        name: name,
        password: passwordEncrypt,
        email: email,
        rolesId: findRoles.id,
      };

      const user = await prisma.user.create({
        data: registerData,
      });

      return user;
    }),
});
