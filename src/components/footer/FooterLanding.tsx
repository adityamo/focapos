"use client";
import { siteConfig } from "@/config/site";
import React from "react";

const FooterLanding = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-indigo-50 w-full dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex">
          <div className="w-full lg:w-3/5">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />

                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  <h5 className="text-indigo-600 font-normal">
                    Foca<span className="font-bold">POS</span>
                  </h5>
                </span>
              </a>
              <p className="text-gray-400 text-sm pt-4 pe-4">
                Kami berfokus dalam pengembangan digitalisasi proses bisnis yang
                berjalan dan langkah yang kami buat akan membantu anda untuk
                memanajen bisnis anda.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <div className="grid grid-cols-2 gap-8 sm:gap-6 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Layanan Kami
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {siteConfig.navItems.map((items: any, key: React.Key) => {
                    return (
                      <li key={key} className="mb-3">
                        <a
                          href={items.href}
                          className="hover:underline me-4 md:me-6"
                        >
                          {items.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contact Us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm p-5 text-gray-500 sm:text-center dark:text-gray-400">
        © {currentYear}{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          FocaPOS
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default FooterLanding;
