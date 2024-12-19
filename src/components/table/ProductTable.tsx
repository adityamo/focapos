import { RootState } from "@/store/store";
import { api } from "@/utils/api";
import { ColumnDef } from "@tanstack/react-table";
import {
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "next-usequerystate";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import DataTableController from "../dttable";
import { format } from "date-fns";
import { formatCurrency } from "@/helpers/FormatHelper";
import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";
import Badge from "../badge";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ProductTable = () => {
  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("")
  );

  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [perPage] = useQueryState("perPage", parseAsInteger.withDefault(5));
  const { user } = useSelector((state: RootState) => state.User);
  const [openActionDropdown, setOpenActionDropdown] = useState<string | null>(
    null
  );
  const MySwal = withReactContent(Swal);

  const toggleAction = (rowId: string) => {
    setOpenActionDropdown((prev) => (prev === rowId ? null : rowId));
  };

  const { mutate: deleteProduct } = api.product.delete.useMutation();

  const {
    data: productList,
    isLoading,
    refetch,
  } = api.product.getProduct.useQuery({
    search,
    page,
    perPage,
    storeId: user?.storeId,
  });

  const handleDelete = (productID: any) => {
    console.log(productID);
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
        deleteProduct(
          { id: productID },
          {
            onSuccess: (resp: any) => {
              toast.success("Produk Berhasil dihapus");
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

  const data = productList?.data;
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
        header: "Produk",
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-x-4">
              <img
                className="shrink-0 size-[38px] rounded-lg"
                src={row.original.M2005_ProductImage[0].image_url}
                alt="Product Image"
              />
              <div className="relative space-y-1">
                <p className="font-semibold text-sm text-slate-700">
                  {row.original.productName}
                </p>
                <small className="text-xs font-normal text-gray-500">
                  {row.original.productCode}
                </small>
              </div>
            </div>
          );
        },
      },
      {
        header: "Kategori",
        cell: ({ row }) => {
          return (
            <p className="text-gray-500 text-sm font-normal">
              {row.original.M2001_ProductCategories.name}
            </p>
          );
        },
      },
      {
        header: "Harga",
        cell: ({ row }) => {
          return (
            <p className="text-slate-700 text-sm font-normal">
              {formatCurrency(row.original.M2003_ProductPrice[0].unitPrice)}
            </p>
          );
        },
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

          return <Badge type={color} label={status} bullet={true} />;
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
          const rowId = row.id;
          return (
            <div className="">
              <button
                className="inline-flex items-center p-2 text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-indigo-100 focus:ring-4 focus:outline-none focus:ring-indigo-200"
                type="button"
                onClick={() => toggleAction(rowId)}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 4 15"
                >
                  <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
              </button>
              {openActionDropdown === rowId && (
                <div className="absolute right-0 mt-2 z-99 w-36 bg-white rounded-lg shadow-lg divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <button className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        <FiEye />
                        View
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        <FiEdit2 />
                        Edit
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleDelete(row.original.id)}
                        className="flex items-center gap-2 px-4 py-2 w-full text-left text-red-500 hover:bg-red-100 dark:hover:bg-red-600"
                      >
                        <FiTrash2 />
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          );
        },
      },
    ],
    [openActionDropdown]
  );

  return (
    <DataTableController
      isLoading={isLoading}
      columns={columns}
      handleSearch={handleSearch}
      data={data || []}
      meta={productList?.meta}
    />
  );
};

export default ProductTable;
