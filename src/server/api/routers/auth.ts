import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { z } from "zod";

import { RegisterSchema } from "@/entities";
import * as bs from "bcryptjs";
import { prisma } from "@/server/db";

export const authRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return "trpc running bro";
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "You can see this in server side";
  }),
  getUserInfo: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
        include: {
          M001_Company: true, // Asumsikan terdapat relasi 'company' di model Prisma
          M003_Store: true,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      return user;
    }),
  registerUser: publicProcedure
    .input(RegisterSchema)
    .mutation(async ({ input }: any) => {
      const { name, email, password } = input;
      const passwordEncrypt = await bs.hash(password, await bs.genSalt(12));

      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        throw new Error("User sudah terdaftar");
      }

      const registerData: any = {
        name: name,
        password: passwordEncrypt,
        email: email,
        roles_id: 1,
      };

      const user = await prisma.user.create({
        data: registerData,
      });

      return user;
    }),
});
