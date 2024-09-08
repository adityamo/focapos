import { getServerSession } from "next-auth";
import RegisterPage from "./register";
import { authOptions } from "@/libs/next-auth";
import { createTRPCCaller } from "@/utils/api-rsc";

export default async function page() {
  const session = await getServerSession(authOptions);
  const caller = await createTRPCCaller(session);
  const hello = await caller.auth.hello();

  const secretMessage = caller.auth.getSecretMessage();
  console.log(hello);
  console.log(secretMessage);

  return <RegisterPage />;
}
