import React, { ChangeEvent, FC, ReactElement, useRef } from "react";
import { TSearch } from "../type";

export function debounce<F extends (...args: any[]) => any>(
  func: F,
  waitFor: number
): (...args: Parameters<F>) => ReturnType<F> {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<F>): ReturnType<F> => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
    return undefined as unknown as ReturnType<F>;
  };
}

export const SearchBox: FC<TSearch> = (props): ReactElement => {
  const debouncedOnChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    props.handleSearch?.(e);
  }, 500);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <label className="sr-only">Search</label>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          id="hs-as-table-product-review-search"
          name="hs-as-table-product-review-search"
          className="py-2 px-5 ps-11 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder={props.placeholder || "Cari Data"}
          onChange={(e) => {
            e.persist();
            debouncedOnChange(e);
          }}
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
          <svg
            className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-500"
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>
    </>
  );
};
