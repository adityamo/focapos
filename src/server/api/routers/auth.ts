import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

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

      const user = await prisma.user.create({
        data: {
          name: name,
          password: passwordEncrypt,
          email: email,
        },
      });

      return user;
    }),
});
