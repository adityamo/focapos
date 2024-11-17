"use client";
import InputText from "@/components/inputs/InputText";
import { CategoryValues } from "@/interface/product/category";
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
} from "react";
import {
  SubmitHandler,
  useForm,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CategorySchema } from "@/entities/product/category";

type Props = {
  defaultValues: any;
  onSubmit: SubmitHandler<CategoryValues>;
  isLoading: boolean;
};

export type FormCategoryRefType = {
  setError: UseFormSetError<CategoryValues>;
  setValue: UseFormSetValue<CategoryValues>;
};

const FormCategories: ForwardRefRenderFunction<FormCategoryRefType, Props> = (
  { defaultValues, onSubmit, isLoading },
  ref
) => {
  const [toggleIsActive, setToggleIsActive] = useState(true);

  const { handleSubmit, control, setError, setValue } = useForm({
    defaultValues: {
      code: "",
      name: "",
      isActive: true,
      ...defaultValues,
    },
    resolver: zodResolver(CategorySchema),
  });

  useImperativeHandle(ref, () => ({
    setError,
    setValue,
  }));

  return (
    <div className="relative bg-white max-w-3xl p-4 rounded-md border border-gray-200 shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-7 items-center pb-2">
          <div className="flex flex-col space-y-1">
            <h5 className="text-slate-700 text-sm font-medium">Kode</h5>
            <p className="text-xs text-gray-500 font-normal">
              Masukan kode kategori
            </p>
          </div>
          <InputText
            name="code"
            placeholder="Masukan kode category"
            control={control}
          />
          <div className="flex flex-col space-y-1">
            <h5 className="text-slate-700 text-sm font-medium">Kategori</h5>
            <p className="text-xs text-gray-500 font-normal">
              Masukan nama kategori
            </p>
          </div>
          <InputText
            name="code"
            placeholder="Masukan Nama Kategori"
            control={control}
          />
          <div className="col-span-2">
            <div className="flex w-full">
              <label className="inline-flex w-full justify-start items-center my-2 cursor-pointer ">
                <input
                  type="checkbox"
                  value="showTypeOfWork"
                  checked={toggleIsActive}
                  onChange={() => {
                    setToggleIsActive(!toggleIsActive);
                    setValue("isActive", !toggleIsActive); // Update form value
                  }}
                  className="sr-only peer"
                />
                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Status Kategori
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end pt-4 border-t border-gray-200">
          <button className="me-3 px-5 py-2 bg-white text-red-500 border border-red-500 rounded-md text-sm font-semibold hover:bg-red-500 hover:text-white">
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-indigo-700 text-white rounded-md text-sm font-semibold hover:bg-indigo-800"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default forwardRef(FormCategories);
