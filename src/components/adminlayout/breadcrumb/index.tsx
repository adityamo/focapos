"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const Breadcrumb = () => {
  const paths = usePathname();
  const pathSegments = paths.split("/").filter((segment) => segment); // Remove empty segments
  // Start from the 3rd segment to skip 'en/admin'

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    return { name: segment.charAt(0).toUpperCase() + segment.slice(1), path };
  });

  return (
    <ol className="flex items-center whitespace-nowrap pb-3 lg:pb-5">
      {breadcrumbItems.map((segment: any, index: number) => {
        return (
          <li className="inline-flex items-center" key={index}>
            <Link
              href={segment.path}
              className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
            >
              {segment.name}
            </Link>
            {index < breadcrumbItems.length - 1 && (
              <svg
                className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default Breadcrumb;
