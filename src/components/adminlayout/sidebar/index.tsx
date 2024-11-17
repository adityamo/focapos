"use client";

import React, { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import ClickOutside from "@/components/clickoutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import { FiCodesandbox } from "react-icons/fi";
import { menuItem as MenuData } from "./menu";
import { FiMonitor } from "react-icons/fi";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  user: any;
}

const menuGroups = MenuData;

const Sidebar = ({ sidebarOpen, setSidebarOpen, user }: SidebarProps) => {
  // const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");
  const [storeName, setStoreName] = useState("");

  useEffect(() => {
    if (user) {
      setStoreName(user.store_name);
    }
  }, []);

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72.5 flex-col overflow-y-hidden bg-gradient-to-b from-[#4136C5] to-[#221D68] duration-300 ease-linear dark:bg-slate-900 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-4">
          <Link href="/">
            <Image
              width={156}
              height={22}
              src={"/assets/icon/logo/logo-white.svg"}
              alt="Logo"
              priority
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex flex-col px-4 py-5 lg:px-6 lg:ml-4">
          <div className="flex flex-row items-center text-white">
            <FiCodesandbox className="me-4 h-8 w-8" />

            <div className="flex flex-col">
              <p className="text-xs font-normal ">Outlet</p>
              {storeName && (
                <h5 className="text-sm font-semibold">
                  {user?.store_name || ""}
                </h5>
              )}
            </div>
          </div>
        </div>
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-indigo-900 ">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-5 px-4 py-4 lg:mt-0 lg:px-6">
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <Link
                  href={"/admin/dashboard"}
                  className={`text-sm group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-indigo-900 hover:rounded-md dark:hover:bg-meta-4`}
                >
                  {/* {item.icon} */}
                  <FiMonitor />
                  Beranda
                </Link>
              </li>
            </ul>
            {menuGroups.map((group: any, groupIndex: React.Key) => (
              <div key={groupIndex}>
                <h3 className="mb-4 ml-4 text-xs font-semibold text-white">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                  {group.menuItems.length > 0 &&
                    group.menuItems.map(
                      (menuItem: any, menuIndex: React.Key) => (
                        <SidebarItem
                          key={menuIndex}
                          item={menuItem}
                          pageName={pageName}
                          setPageName={setPageName}
                        />
                      )
                    )}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
