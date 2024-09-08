import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/libs/trpc";

export const authRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return "trpc running bro";
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "You can see this in server side";
  }),
});
