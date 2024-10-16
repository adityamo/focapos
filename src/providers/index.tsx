import { cookies } from "next/headers";
import { AuthProvider } from "./AuthProvider";
import { TRPCReactProvider } from "@/utils/api";
// import { QueryProvider } from "@/utils/api";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <AuthProvider>
      <TRPCReactProvider cookies={cookies().toString()}>
        {children}
      </TRPCReactProvider>
    </AuthProvider>
  );
};
