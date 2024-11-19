import { FC, ReactElement } from "react";
import { TTable } from "../type";
import { SearchBox } from "./SearchBox";
import { Pagination } from "./Pagination";

export const Table: FC<TTable> = (props): ReactElement => {
  return (
    <section className="shadow-md bg-white h-full overflow-y-hidden border p-4 rounded-lg w-full gap-y-4 flex flex-col overflow-x-auto">
      <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
        <SearchBox {...props} />
      </div>
      <div className="overflow-x-auto min-w-max w-full h-fit flex relative">
        <table className="divide-y divide-gray-200">{props.children}</table>
      </div>
      {props.meta && props?.data?.length > 0 && <Pagination {...props} />}
    </section>
  );
};
