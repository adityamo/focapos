import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default async function AuthLayout({ children }: Props) {
  return (
    <div className="relative h-full min-h-screen w-full">
      <main className={`mx-aut min-h-screen`}>{children}</main>
    </div>
  );
}
