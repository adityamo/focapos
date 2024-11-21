import React, { useMemo } from "react";
import {
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "next-usequerystate";
import DataTableController from "../dttable";
import { api } from "@/utils/api";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import Badge from "../badge";
import { AiFillDelete } from "react-icons/ai";

const CategoryTable = () => {
  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("")
  );
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [perPage] = useQueryState("perPage", parseAsInteger.withDefault(5));

  const {
    data: category,
    isLoading,
    // refetch,
  } = api.category.getProductCategory.useQuery({
    search,
    page,
    perPage,
    store_id: 1,
  });

  const data = category?.data;

  type Unpacked<T> = T extends (infer U)[] ? U : T;
  type TData = NonNullable<typeof data>;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const columns = useMemo<ColumnDef<Unpacked<TData>>[]>(
    () => [
      {
        header: "No",
        accessorKey: "no",
        cell: ({ row }) => row.index + 1,
      },
      {
        header: "Kode Kategori",
        accessorKey: "code",
      },
      {
        header: "Name Kategori",
        accessorKey: "name",
      },
      {
        header: "Status",
        accessorKey: "isActive",
        cell: ({ getValue }) => {
          const value = getValue<boolean>();
          let status: any;
          let color: any;

          if (!value) {
            status = "Tidak Aktif";
            color = "danger";
          } else {
            status = "Aktif";
            color = "success";
          }

          return <Badge type={color} label={status} />;
        },
      },
      {
        header: "Tanggal dibuat",
        accessorKey: "createdAt",
        cell: ({ getValue }) => {
          const value = new Date(getValue<Date>());
          return format(value, "dd MMM yyyy, hh:ss");
        },
      },
      {
        header: "Aksi",
        cell: ({ row }) => {
          return (
            <div className="flex gap-x-2">
              <a href="" className="">
                <AiFillDelete />
              </a>
              <a href="" className="">
                <AiFillDelete />
              </a>
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <DataTableController
      isLoading={isLoading}
      columns={columns}
      handleSearch={handleSearch}
      data={data || []}
      meta={category?.meta}
    />
  );
};

export default CategoryTable;
