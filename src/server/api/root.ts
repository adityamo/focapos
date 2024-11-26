import { authRouter } from "./routers/auth";
import { categoryController } from "./routers/product/category";
import { profileController } from "./routers/profile";
import { registerBusiness } from "./routers/regbusiness";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  regcompany: registerBusiness,
  category: categoryController,
  profile: profileController,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
// export const createCaller = createCallerFactory(appRouter)
