import AdminPageLayout from "@/components/adminlayout";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default async function LayoutAdmin({ children }: Props) {
  return (
    <AdminPageLayout>
      <div className="dark:bg-boxdark-2 dark:text-bodydark">{children}</div>
    </AdminPageLayout>
  );
}
