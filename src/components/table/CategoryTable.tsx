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
import { FiTrash, FiEdit2 } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const CategoryTable = () => {
  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("")
  );
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [perPage] = useQueryState("perPage", parseAsInteger.withDefault(5));
  const { user } = useSelector((state: RootState) => state.User);

  const {
    data: category,
    isLoading,
    refetch,
  } = api.category.getProductCategory.useQuery({
    search,
    page,
    perPage,
    storeId: user?.storeId,
  });

  const data = category?.data;

  type Unpacked<T> = T extends (infer U)[] ? U : T;
  type TData = NonNullable<typeof data>;
  const MySwal = withReactContent(Swal);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const { mutate: deleteCategories } =
    api.category.deleteProductCategory.useMutation();

  const handleDelete = (categoriesID: any) => {
    MySwal.fire({
      title: (
        <h3 className="text-xl font-semibold text-slate-700">
          Apakah anda yakin untuk menghapus?
        </h3>
      ),
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCategories(
          { id: categoriesID },
          {
            onSuccess: (resp: any) => {
              toast.success("Kategori Berhasil dihapus");
              refetch();
            },
            onError: () => {
              toast.error("Gagal Menghapus");
            },
          }
        );
      }
    });
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
        header: "Terakhir diubah",
        accessorKey: "updatedAt",
        cell: ({ getValue }) => {
          const value = new Date(getValue<Date>());
          return format(value, "dd MMM yyyy, hh:ss");
        },
      },
      {
        header: "Aksi",
        cell: ({ row }) => {
          return (
            <div className="flex justify-start">
              <Link
                href={`/admin/product/category/${row.original.id}`}
                className="py-2 px-3 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-500 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all text-sm "
              >
                <FiEdit2 />
              </Link>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete(row.original.id);
                }}
                className="py-2 px-3 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-500 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all text-sm "
              >
                <FiTrash />
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
