"use client";
import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const HeaderLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";

  function toogleMenu() {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }

  return (
    <header className="bg-[#4136C5] shadow-sm backdrop-blur-md sticky w-full z-20 top-0 start-0">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          className="flex font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
          href="/"
          aria-label="Brand"
        >
          <img src={"/assets/icon/logo/logo-white.svg"} alt="" className="" />
          {/* <h5 className="font-normal text-lg lg:text-xl text-white">
            Foca<span className="font-bold">POS</span>
          </h5> */}
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            href={"/auth/signin"}
            className="py-2 px-3 me-2 hidden lg:inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-white"
          >
            Masuk
          </Link>

          <Link
            href={"/auth/register"}
            className="py-2 px-3 hidden lg:inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-indigo-700 text-white hover:bg-indigo-700 focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none"
          >
            Daftar
          </Link>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-white rounded-lg md:hidden hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toogleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {siteConfig.navItems.map((items: any, key: React.Key) => {
              return (
                <Link
                  href={items.href}
                  key={key}
                  className={`${pathname === items.href ? "text-white font-bold" : "text-white"} block py-2 px-3 md:p-0 text-sm font-normal rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  {items.label}
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
      {/* Navigation Mobile */}
      <div
        className={
          isMenuOpen
            ? "block m-0 sm:ml-4 mt-0 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
            : "hidden"
        }
      >
        <ul className="items-center justify-between w-full md:flex md:w-auto md:order-1">
          {siteConfig.navItems.map((items: any, key: React.Key) => {
            return (
              <li key={key}>
                <a
                  href={items.href}
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {items.label}
                </a>
              </li>
            );
          })}
          <li className="flex items-center py-4 mt-2 px-3 space-x-2 border-t border-white">
            <Link
              href={"/auth/signin"}
              className="py-2 px-3 me-2 lg:inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-indigo-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-white"
            >
              Masuk
            </Link>

            <Link
              href={"/auth/register"}
              className="py-2 px-3 lg:inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-indigo-900 text-white hover:bg-indigo-700 focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none"
            >
              Daftar
            </Link>
          </li>
        </ul>
      </div>
      {/* End Navigation Mobile */}
    </header>
  );
};

export default HeaderLanding;
