"use client";

import { AuthProvider } from "@/libs/next-auth";
import { QueryProvider } from "@/utils/api";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <AuthProvider>
      <QueryProvider>{children}</QueryProvider>
    </AuthProvider>
  );
};
