"use client";
import InputText from "@/components/inputs/InputText";
import { CategoryValues } from "@/interface/product/category";
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  // useEffect,
  useImperativeHandle,
  // useState,
} from "react";
import {
  Controller,
  SubmitHandler,
  useForm,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CategorySchema } from "@/entities/product/category";
import { useRouter } from "next/navigation";

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
  // const [toggleIsActive, setToggleIsActive] = useState(true);
  const router = useRouter();

  const { handleSubmit, control, setError, setValue, reset } = useForm({
    defaultValues: {
      code: "",
      name: "",
      isActive: defaultValues?.isActive || false,
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
            maxLength={7}
          />
          <div className="flex flex-col space-y-1">
            <h5 className="text-slate-700 text-sm font-medium">Kategori</h5>
            <p className="text-xs text-gray-500 font-normal">
              Masukan nama kategori
            </p>
          </div>
          <InputText
            name="name"
            placeholder="Masukan Nama Kategori"
            control={control}
          />
          <div className="col-span-2">
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
                    <span className="ms-3 text-xs font-medium text-gray-900 dark:text-gray-300">
                      Status Kategori
                    </span>
                  </label>
                )}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end pt-4 border-t border-gray-200">
          <button
            onClick={() => {
              reset();
              router.push("/admin/product/category");
            }}
            type="button"
            className="me-3 px-5 py-2 bg-white text-red-500 border border-red-500 rounded-md text-sm font-semibold hover:bg-red-500 hover:text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-indigo-700 text-white rounded-md text-sm font-semibold hover:bg-indigo-800"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Menyimpan...
              </>
            ) : (
              "Simpan"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default forwardRef(FormCategories);
