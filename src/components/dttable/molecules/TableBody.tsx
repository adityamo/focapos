import { flexRender } from "@tanstack/react-table";
import { ReactElement } from "react";
import { TTableBody } from "../type";
import Spinner1 from "@/components/spinners";

export const TableBody = <T extends Record<string, unknown>>(
  props: TTableBody<T> & { loading: boolean; columnLength: number }
): ReactElement => {
  const loading = props.loading;
  const columnLength = props.columnLength;

  return (
    <>
      {loading ? (
        <tbody className="">
          <tr className="tr">
            <td colSpan={columnLength}>
              <div className="text-center justify-center p-5">
                <Spinner1 />
              </div>
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody className="divide-y w-fit divide-gray-200">
          {props.tableBody.rows.length > 0 ? (
            props.tableBody.rows.map((row) => (
              <tr key={row.id} className="hover:bg-indigo-50 bg-white">
                {row.getVisibleCells().map((cell, index) => (
                  <td
                    key={index}
                    className="p-4 w-fit text-sm  text-gray-600 font-medium"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="text-center">
              <td colSpan={columnLength}>Data Kosong</td>
            </tr>
          )}
        </tbody>
      )}
    </>
  );
};
