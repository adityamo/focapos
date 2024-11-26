import React, { ReactElement } from "react";
import { TTableHead } from "../type";
import { flexRender } from "@tanstack/react-table";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export const TableHead = <T extends Record<string, unknown>>(
  props: TTableHead<T>
): ReactElement => {
  return (
    <thead className="bg-indigo-50 p-2 w-fit h-auto">
      {props.tableHead.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              className="font-semibold p-4  tracking-wide text-indigo-800 text-xs  text-left w-fit select-none"
              key={header.id}
            >
              <div
                {...{
                  className: "flex items-center",
                  onClick: header.column.getToggleSortingHandler(),
                }}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}

                {{
                  asc: (
                    <IoMdArrowDropup
                      size="1.5em"
                      style={{ marginLeft: "2px" }}
                    />
                  ),
                  desc: (
                    <IoMdArrowDropdown
                      size="1.5em"
                      style={{ marginLeft: "2px" }}
                    />
                  ),
                }[header.column.getIsSorted() as string] ?? null}
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
