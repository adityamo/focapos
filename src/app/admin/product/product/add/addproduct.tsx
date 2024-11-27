"use client";

import React from "react";
import Image from "next/image";
// import { FiShare } from "react-icons/fi";
import { Controller, useForm } from "react-hook-form";
import { ProductValues } from "@/interface/product/product";
import InputText from "@/components/inputs/InputText";
import InputTextArea from "@/components/inputs/InputTextArea";
import InputSelect from "@/components/inputs/InputSelect";
import { api } from "@/utils/api";
import { dropdownFormat } from "@/helpers/FormatHelper";
import InputUpload from "@/components/inputs/InputUpload";

const AddProduct = () => {
  const { control } = useForm<ProductValues>();

  const { data } = api.product.getCategoryDDL.useQuery(
    { store_id: 1 }, // Input for the query
    {
      refetchOnWindowFocus: false, // Optional: Adjust query behavior
    }
  );

  const ddlCategories = data?.data ? dropdownFormat(data.data) : [];

  return (
    <div className="relative w-full space-y-5">
      <div className="space-y-1">
        <h3 className="text-slate-700 text-md lg:text-lg font-semibold">
          Tambah Produk
        </h3>
        <p className="text-xs text-gray-500 font-normal">
          Anda dapat menambahkan produk
        </p>
      </div>
      <div className="grid lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8 space-y-4">
          <div className="relative space-y-2 bg-white dark:bg-slate-700 rounded-md shadow-sm">
            <div className="p-5 relative w-full border-b border-gray-200">
              <h4 className="text-slate-700 text-md font-medium">
                Informasi Produk
              </h4>
            </div>
            <div className="p-5 relative w-full space-y-5">
              {/* <div className="space-y-4">
                <label
                  htmlFor=""
                  className="block text-xs lg:text-[13px] text-slate-700 font-medium mb-2 dark:text-white"
                >
                  Foto Sampul
                </label>
                <div className="flex flex-row w-full items-center">
                  <Image
                    src={"/assets/images/user/anon-pic-circle.svg"}
                    width={30}
                    height={30}
                    alt="profilepict"
                    className="w-20 h-20 me-4"
                  />
                  <div className="relative space-y-1">
                    <div className="flex">
                      <button className="inline-flex items-center px-5 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-xs text-white">
                        <span className="me-2">
                          <FiShare />
                        </span>{" "}
                        Upload Photo
                      </button>
                      <button className="ms-3 px-5 py-2 bg-white hover:bg-red-500 hover:text-white border border-gray-200 rounded-md text-xs text-red-500">
                        Candel
                      </button>
                    </div>
                    <div>
                      <small className="text-xs text-gray-500 font-normal">
                        Your image should be square, at least 100x100px, and JPG
                        or PNG.
                      </small>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="lg:col-span-1">
                  <InputText
                    label="Kode Produk"
                    name="productCode"
                    control={control}
                    placeholder="Masukan nama produk"
                    description="Buat kode produk unik"
                  />
                </div>
                <div className="lg:col-span-2">
                  <InputText
                    label="Nama Produk"
                    name="productName"
                    control={control}
                    placeholder="Masukan nama produk"
                  />
                </div>
                <div className="lg:col-span-2">
                  <InputTextArea
                    label="Description"
                    name="description"
                    control={control}
                    placeholder="Deskripsikan produk anda"
                    rows={4}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative space-y-2 bg-white dark:bg-slate-700 rounded-md shadow-sm">
            <div className="p-5 relative w-full border-b border-gray-200">
              <h4 className="text-slate-700 text-md font-medium">
                Photo Produk
              </h4>
            </div>
            <div className="p-5">
              <InputUpload name="file" control={control} />
            </div>
          </div>
          <div className="flex w-full justify-start">
            <div className="inline-flex w-full justify-end">
              <button className="px-5 py-3 bg-white border border-red-500 rounded-md shadow-m text-red-500 text-sm">
                Kembali
              </button>
              <button className="ms-2 px-5 py-3 bg-indigo-700 hover:bg-indigo-800 rounded-md shadow-m text-white text-sm">
                Simpan
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 space-y-4">
          <div className="relative bg-white dark:bg-slate-700 rounded-md shadow-sm">
            <div className="p-5 relative w-full border-b border-gray-200">
              <h4 className="text-slate-700 text-md font-medium">
                Foto Sampul
              </h4>
            </div>
            <div className="p-5 relative w-full">
              <InputUpload name="file" control={control} />
            </div>
          </div>
          <div className="relative bg-white dark:bg-slate-700 rounded-md shadow-sm">
            <div className="p-5 relative w-full border-b border-gray-200">
              <h4 className="text-slate-700 text-md font-medium">
                Detail Produk
              </h4>
            </div>
            <div className="p-5 relative w-full">
              <div className="grid grid-cols-1 gap-4">
                <InputSelect
                  label="Category"
                  name="category_id"
                  placeholder="Pilih category produk"
                  options={ddlCategories}
                  control={control}
                />
                <div className="py-4 px-4 flex flex-row w-full justify-between items-center border border-gray-200 rounded-md">
                  <div>
                    <p className="text-gray-500 text-sm font-normal">Status</p>
                  </div>
                  <div>
                    <Controller
                      name="isActive"
                      control={control}
                      render={({ field }) => (
                        <label className="inline-flex w-full justify-start items-center my-1 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={(e) => field.onChange(e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                        </label>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-gradient-to-r from-indigo-700 to-indigo-800 rounded-md shadow-md">
            <div className="p-4 space-y-2">
              <Image
                src={"/assets/images/admin/dashboard/brangkas.png"}
                width={150}
                height={150}
                alt="brangkas_img"
              />
              <h3 className="text-lg font-semibold text-white">
                Cek ketersediaan produk
              </h3>
              <p className="text-xs text-white font-normal">
                Jangan lupa selalu update ketersediaan produk apabila anda
                melakukan perubahan
              </p>
            </div>
          </div>
          {/* <div className="relative bg-white dark:bg-slate-700 rounded-md shadow-sm">
            <div className="p-5 relative w-full border-b border-gray-200">
              <h4 className="text-slate-700 text-md font-medium">
                Pajak Produk
              </h4>
            </div>
            <div className="p-5 relative w-full">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex w-full">
                  <Controller
                    name="isActive"
                    control={control}
                    render={({ field }) => (
                      <label className="inline-flex w-full justify-start items-center my-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Harga jual termasuk pajak ?
                        </span>
                      </label>
                    )}
                  />
                </div>
                <InputText
                  label="Persentase Pajak"
                  name="productName"
                  control={control}
                  placeholder="Masukan presentase pajak"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
