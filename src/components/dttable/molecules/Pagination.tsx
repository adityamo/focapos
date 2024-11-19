import React, { FC, ReactElement } from "react";
import { TPagination } from "../type";
import { parseAsInteger, useQueryState } from "next-usequerystate";

export const Pagination: FC<TPagination> = (props): ReactElement => {
  const { meta } = props;

  const [page, setPage] = useQueryState("page", parseAsInteger);
  const [perPage, setPerPage]: any = useQueryState("perPage", parseAsInteger);

  const totalPage = Number(meta?.totalPage) || 0;
  const currentPage = Number(meta?.page) || 1;
  const maxButtons = 5;
  const halfMaxButtons = Math.floor(maxButtons / 2);

  let startPage = Math.max(currentPage - halfMaxButtons, 1);
  const endPage = Math.min(startPage + maxButtons - 1, totalPage);

  if (endPage - startPage < maxButtons - 1) {
    startPage = Math.max(endPage - maxButtons + 1, 1);
  }

  return (
    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
      <div className="max-w-sm space-y-3">
        <select
          value={perPage}
          onChange={(e) => {
            setPerPage(Number(e));
          }}
          className="py-2 px-3 pe-9 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
        >
          {[5, 10, 20, 30].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>

      <div>
        <div className="inline-flex gap-x-2">
          <button
            type="button"
            // disabled={!canPreviousPage}
            onClick={() => Number(page) > 1 && setPage(Number(page) - 1)}
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          >
            <svg
              className="flex-shrink-0 size-4"
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
              <path d="m15 18-6-6 6-6" />
            </svg>
            Prev
          </button>

          <button
            type="button"
            // disabled={!canNextPage}
            onClick={() =>
              Number(page) < Number(meta?.totalPage) &&
              setPage(Number(page) + 1)
            }
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          >
            Next
            <svg
              className="flex-shrink-0 size-4"
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
