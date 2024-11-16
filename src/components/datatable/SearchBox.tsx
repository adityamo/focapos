import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

type SearchBoxProps = {
  // onChangeDebounce?: (value: string) => void;
  preGlobalFilteredRows: any;
  globalFilter: any;
  setGlobalFilter: any;
};

const SearchBox = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: SearchBoxProps) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 500);
  // const debounced = useAsyncDebounce(
  //    (value) => props.onChangeDebounce && props.onChangeDebounce(value),
  //    500
  // );

  // const newProps = { ...props };
  // delete newProps.onChangeDebounce;

  return (
    <>
      <label className="sr-only">Search</label>
      <div className="relative">
        <input
          value={value || ""}
          type="text"
          id="hs-as-table-product-review-search"
          name="hs-as-table-product-review-search"
          className="py-2 px-5 ps-11 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Search"
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          // onChange={(e) => debounced(e.target.value)}
          // {...props}
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

export default SearchBox;
