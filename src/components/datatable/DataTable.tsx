import React from "react";
import {
  Column,
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import SearchBox from "./SearchBox";
import Spinner from "@/components/spinner";

type DataTableProps<T extends object> = {
  data: T[];
  column: ReadonlyArray<Column<T>>;
  isLoading: boolean;
  handlingExport?: () => void;
  isLoadingExport?: boolean;
};

function DataTable<T extends object>(props: DataTableProps<T>) {
  const {
    page,
    prepareRow,
    getTableBodyProps,
    headerGroups,
    getTableProps,
    setGlobalFilter,
    preGlobalFilteredRows,
    // setFilter,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    setPageSize,
    //   pageOptions,
    //   gotoPage,
    state: { pageSize, globalFilter },
  } = useTable(
    {
      data: props.data,
      columns: props.column,
      initialState: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { isLoading, column, handlingExport, isLoadingExport } = props;

  return (
    <div className="mx-auto">
      {/* Card */}
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
              {/* Search Content */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                <div className="sm:col-span-1">
                  <SearchBox
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={globalFilter}
                    setGlobalFilter={setGlobalFilter}
                  />
                </div>
                <div className="sm:col-span-2 md:grow">
                  <div className="flex justify-end gap-x-2">
                    <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
                      {handlingExport ? (
                        <button
                          id="hs-as-table-table-export-dropdown"
                          type="button"
                          onClick={handlingExport}
                          disabled={isLoadingExport}
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                        >
                          {isLoadingExport ? (
                            <>
                              {" "}
                              <svg
                                aria-hidden="true"
                                role="status"
                                className="inline w-4 h-4 me-3 text-white animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="#E5E7EB"
                                />
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentColor"
                                />
                              </svg>
                              Exporting...
                            </>
                          ) : (
                            <>
                              <svg
                                className="flex-shrink-0 size-3.5"
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
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" x2="12" y1="15" y2="3" />
                              </svg>
                              Export
                            </>
                          )}
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* End Search */}
              {/* Table */}
              <table
                {...getTableProps()}
                className="min-w-full divide-y divide-gray-200"
              >
                <thead className="bg-gray-50">
                  {headerGroups.map((headerGroups) => {
                    const { key, ...restHeaderGroupProps } =
                      headerGroups.getHeaderGroupProps();
                    return (
                      <tr key={key} {...restHeaderGroupProps}>
                        {headerGroups.headers.map((column) => {
                          const { key, ...restColumn } =
                            column.getHeaderProps();
                          return (
                            <th
                              className={`px-6 py-3 text-start ${
                                column.canFilter
                                  ? "sorting_asc"
                                  : "sorting_desc"
                              }`}
                              key={key}
                              {...restColumn}
                              {...column.getSortByToggleProps()}
                            >
                              <div className="flex items-center gap-x-2">
                                <span className="group inline-flex items-center gap-x-2 text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                  {column.render("Header")}
                                  <svg
                                    className="flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200"
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
                                    <path d="m7 15 5 5 5-5" />
                                    <path d="m7 9 5-5 5 5" />
                                  </svg>
                                </span>
                              </div>
                            </th>
                          );
                        })}
                      </tr>
                    );
                  })}
                </thead>

                {isLoading ? (
                  <tbody>
                    <tr>
                      <td colSpan={column.length}>
                        <div className="text-center justify-center p-5">
                          <Spinner />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody
                    className="divide-y divide-gray-200"
                    {...getTableBodyProps()}
                  >
                    {page.length > 0 ? (
                      page.map((row) => {
                        prepareRow(row);
                        const { key, ...restRowProps } = row.getRowProps();
                        return (
                          <tr
                            key={key}
                            {...restRowProps}
                            className="bg-white hover:bg-gray-50"
                          >
                            {row.cells.map((cell) => {
                              const { key, ...restCellProps } =
                                cell.getCellProps();
                              return (
                                <td
                                  key={key}
                                  {...restCellProps}
                                  className="size-px whitespace-nowrap align-top"
                                >
                                  <span className="block p-6 text-sm text-gray-600 dark:text-neutral-400">
                                    {cell.render("Cell")}
                                  </span>
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })
                    ) : (
                      <>
                        <tr className="text-center">
                          <td colSpan={props.column.length}>
                            <div className="text-center justify-center p-5">
                              No Data
                            </div>
                          </td>
                        </tr>
                      </>
                    )}
                  </tbody>
                )}
              </table>
              {/* End Table */}
              {/* Footer */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                <div className="max-w-sm space-y-3">
                  <select
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
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
                      disabled={!canPreviousPage}
                      onClick={previousPage}
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
                      disabled={!canNextPage}
                      onClick={nextPage}
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
              {/* End Footer */}
            </div>
          </div>
        </div>
      </div>
      {/* End Card */}
    </div>
  );
}

export default DataTable;
