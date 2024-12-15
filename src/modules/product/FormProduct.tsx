"use client";
import { dropdownFormat } from "@/helpers/FormatHelper";
import { ProductValues } from "@/interface/product/product";
import { RootState } from "@/store/store";
import { api } from "@/utils/api";
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";
import { useSelector } from "react-redux";
import Image from "next/image";
import InputText from "@/components/inputs/InputText";
import InputTextArea from "@/components/inputs/InputTextArea";
import InputUpload from "@/components/inputs/InputUpload";
import InputQty from "@/components/inputs/InputQty";
import { FiPlusCircle, FiTrash2 } from "react-icons/fi";
import InputSelect from "@/components/inputs/InputSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductSchema } from "@/entities/product/product";
import InputCurrency from "@/components/inputs/inputCurrency";

type Props = {
  defaultValues: any;
  onSubmit: SubmitHandler<ProductValues>;
  isLoading: boolean;
};

export type FormProductRefType = {
  setError: UseFormSetError<ProductValues>;
  setValue: UseFormSetValue<ProductValues>;
};

const FormProduct: ForwardRefRenderFunction<FormProductRefType, Props> = (
  { defaultValues, onSubmit, isLoading },
  ref
) => {
  const { user } = useSelector((state: RootState) => state.User);
  const [storeID, setStoreID] = useState("");

  const { data, refetch } = api.product.getCategoryDDL.useQuery(
    { storeId: storeID } // Input for the query
  );

  const { control, register, handleSubmit, setValue, setError } = useForm({
    defaultValues: {
      productCode: "",
      productName: "",
      description: "",
      category_id: null,
      store_id: user?.store_id || "",
      isActive: true,
      productThumbnail: "",
      productImg: "",
      priceData: [{ qty1: 1, qty2: 1, unitPrice: 0 }],
      ...defaultValues,
    },
    resolver: zodResolver(ProductSchema),
  });

  useImperativeHandle(ref, () => ({
    setError,
    setValue,
  }));

  const { fields, append, remove } = useFieldArray({
    control,
    name: "priceData",
  });

  useEffect(() => {
    if (user) {
      setStoreID(user.store_id);
      setValue("store_id", user.store_id);
      refetch();
    }
  }, [user]);

  const ddlCategories = data?.data ? dropdownFormat(data.data) : [];

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid lg:grid-cols-12 gap-5">
        <input type="hidden" {...register("store_id")} />
        <div className="lg:col-span-8 space-y-4">
          <div className="relative space-y-2 bg-white dark:bg-slate-700 rounded-md shadow-sm">
            <div className="p-5 relative w-full border-b border-gray-200">
              <h4 className="text-slate-700 text-md font-medium dark:text-white">
                Informasi Produk
              </h4>
            </div>
            <div className="p-5 relative w-full space-y-5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="lg:col-span-2">
                  <div className="flex w-full lg:w-3/4">
                    <InputText
                      label="Kode Produk"
                      name="productCode"
                      control={control}
                      placeholder="Masukan nama produk"
                      description="Buat kode produk unik, atau kode produk yang dapat discan"
                    />
                  </div>
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
              <InputUpload name="productImg" control={control} />
            </div>
          </div>
          <div className="relative space-y-2 bg-white dark:bg-slate-700 rounded-md shadow-sm">
            <div className="p-5 relative w-full border-b border-gray-200">
              <h4 className="text-slate-700 text-md font-medium">Harga</h4>
            </div>
            <div className="p-5 space-y-5">
              {fields.map((field: any, index: any) => {
                return (
                  <div
                    key={field.id}
                    className="grid grid-cols-1 lg:grid-cols-4 gap-4"
                  >
                    <InputQty
                      label="Qty"
                      name={`priceData.${index}.qty1`}
                      control={control}
                    />
                    <InputQty
                      label="Qty Sampai"
                      name={`priceData.${index}.qty2`}
                      control={control}
                    />
                    <div className="flex w-full items-end col-span-2">
                      <InputCurrency
                        label="Harga"
                        name={`priceData.${index}.unitPrice`}
                        control={control}
                        placeholder="Masukan Harga"
                        indonesiaCurrency={true}
                      />

                      <div className="ms-4 flex items-end">
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="flex text-gray-500 text-sm"
                        >
                          <FiTrash2 className="me-3" />
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="px-5 pb-5 flex w-full justify-start">
              <button
                type="button"
                onClick={() => append({ qty1: 0, qty2: 0, unitPrice: 0 })}
                className="inline-flex items-center bg-white border border-gray-300 text-slate-700 px-5 py-2 text-xs font-semibold hover:bg-gray-100 rounded-xl"
              >
                <FiPlusCircle className="me-3" />
                Tambah
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
              <InputUpload name="productThumbnail" control={control} />
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
        </div>
      </div>
      <div className="flex w-full justify-start">
        <div className="inline-flex w-full justify-end">
          <button
            type="button"
            className="px-5 py-3 bg-white border border-red-500 rounded-md shadow-m text-red-500 text-sm"
          >
            Kembali
          </button>
          <button
            type="submit"
            className="ms-2 px-5 py-3 bg-indigo-700 hover:bg-indigo-800 rounded-md shadow-m text-white text-sm"
          >
            Simpan
          </button>
        </div>
      </div>
    </form>
  );
};

export default forwardRef(FormProduct);
