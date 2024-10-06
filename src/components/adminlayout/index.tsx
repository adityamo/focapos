"use client";
import React, { useState } from "react";
import HeaderAdmin from "./header";
import Sidebar from "./sidebar";

interface Props {
  children: React.ReactNode;
}

const AdminPageLayout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-1 flex-col lg:ml-72.5">
        <HeaderAdmin
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="dark:bg-boxdark-2 dark:text-bodydark">
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 ">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPageLayout;
