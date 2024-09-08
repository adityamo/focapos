import { createTRPCRouter } from "@/libs/trpc/init";
import { authRouter } from "./routers";

export const appRouter = createTRPCRouter({
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
