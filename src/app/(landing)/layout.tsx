import React, { ReactNode } from "react";
import PageLayout from "@/components/pagelayout";

type Props = {
  children: ReactNode;
};

export default async function PublicLayout({ children }: Props) {
  return <PageLayout>{children}</PageLayout>;
}
