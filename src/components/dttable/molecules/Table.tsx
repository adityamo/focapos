import { FC, ReactElement } from "react";
import { TTable } from "../type";
import { SearchBox } from "./SearchBox";
import { Pagination } from "./Pagination";

export const Table: FC<TTable> = (props): ReactElement => {
  return (
    <section className="shadow-md bg-white h-full overflow-y-hidden border rounded-lg w-full flex flex-col overflow-x-auto">
      <div className="flex md:flex-row flex-col md:gap-x-3 md:items-center sticky z-10 w-full">
        <SearchBox {...props} />
      </div>
      <div className="overflow-x-auto min-w-max w-full h-fit flex p-1 bg-gray-50 rounded-lg ">
        <table className="p-2 w-full">{props.children}</table>
      </div>
      {props.meta && props?.data?.length > 0 && <Pagination {...props} />}
    </section>
  );
};
