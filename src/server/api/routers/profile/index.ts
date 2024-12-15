import { createTRPCRouter } from "../../trpc";
import { protectedProcedure } from "../../trpc";
import * as bs from "bcryptjs";
import { z } from "zod";

export const profileController = createTRPCRouter({
  getDetailProfile: protectedProcedure.query(async ({ ctx }: any) => {
    const userID: any = ctx.session?.user?.id;
    const user = await ctx.prisma.user.findUnique({
      where: {
        id: userID,
      },
      include: {
        M001_Company: true, // Asumsikan terdapat relasi 'company' di model Prisma
        M003_Store: true,
        M1001_Roles: true,
      },
    });

    if (!user) {
      return {
        code: 500,
        message: "User not found",
      };
    }

    return {
      code: 200,
      message: "Success Fetch User",
      data: user,
    };
  }),
  changeAccount: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        email: z.string(),
      })
    )
    .mutation(async ({ input, ctx }: any) => {
      const updateUser = await ctx.prisma.user.update({
        where: { id: input.id },
        data: {
          name: input.name,
          email: input.email,
        },
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
    }),
  changeProfilePict: protectedProcedure
    .input(z.object({ id: z.string(), file: z.string() }))
    .mutation(async ({ input, ctx }: any) => {
      const updateProfilePict = await ctx.prisma.user.update({
        where: { id: input.id },
        data: {
          image: input.file,
        },
      });

      if (!updateProfilePict) {
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
  changePassword: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        password: z.string(),
        new_password: z.string(),
      })
    )
    .mutation(async ({ input, ctx }: any) => {
      const { id, password } = input;
      const newPasswordEncrypt = await bs.hash(
        input.new_password,
        await bs.genSalt(12)
      );

      const validateUser = await ctx.prisma.user.findUnique({
        where: { id: id },
      });

      if (!validateUser || !validateUser.password) {
        return {
          code: 500,
          message: "User not found",
        };
      }

      const isValidPassword = await bs.compare(password, validateUser.password);

      if (!isValidPassword) {
        return {
          code: 500,
          message: "Password not match",
        };
      }

      try {
        await ctx.prisma.user.update({
          where: { id: id },
          data: {
            password: newPasswordEncrypt,
          },
        });

        return {
          code: 200,
          message: "Password Success",
        };
      } catch (err) {
        return {
          code: 500,
          message: "Password Failed change",
        };
      }
    }),
});
