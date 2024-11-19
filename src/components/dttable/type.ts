import { TMetaItem } from "@/entities/meta";
import { HeaderGroup } from "@tanstack/react-table";
import { ColumnDef } from "@tanstack/react-table";
import { RowModel } from "@tanstack/react-table";
import { ChangeEventHandler, DetailedHTMLProps, HTMLAttributes } from "react";

export type TDataTable<T extends Record<string, unknown>> = {
  data: T[];
  meta?: TMetaItem;
  columns: ColumnDef<T>[];
  createLink?: string;
  createLabel?: string;
  isLoading?: boolean;
  handleSearch?: ChangeEventHandler<HTMLInputElement>;
};

export type TTable = DetailedHTMLProps<
  HTMLAttributes<HTMLTableElement>,
  HTMLTableElement
> & {
  meta?: TMetaItem;
  handleSearch?: ChangeEventHandler<HTMLInputElement>;
  createLink?: string;
  createLabel?: string;
  data: Array<any>;
};

export type TTableHead<T> = {
  tableHead: HeaderGroup<T>[];
};

export type TTableBody<T> = {
  tableBody: RowModel<T>;
};

export type TPagination = {
  meta?: TMetaItem;
};

export type TSearch = {
  placeholder?: string;
  handleSearch?: ChangeEventHandler<HTMLInputElement>;
};
