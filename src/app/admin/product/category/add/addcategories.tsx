"use client";
import React, { useRef, useState } from "react";
import FormCategories, {
  FormCategoryRefType,
} from "@/modules/category/add/FormCategories";

const AddCategory = () => {
  const ref = useRef<FormCategoryRefType>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: any) => {
    setLoading(true);
  };

  return (
    <div className="max-w-full justify-center px-0 py-5 sm:px-6 lg:px-8 lg:py-5 mx-auto space-y-5">
      <div className="relative space-y-1">
        <h3 className="text-slate-700 text-sm lg:text-lg font-semibold">
          Tambah Category
        </h3>
        <p className="text-xs text-gray-500 font-normal">
          Anda dapat menambahkan kategori produk
        </p>
      </div>
      <div className="relative pt-2 lg:pt-2">
        <FormCategories
          ref={ref}
          onSubmit={onSubmit}
          isLoading={loading}
          defaultValues={{}}
        />
      </div>
    </div>
  );
};

export default AddCategory;
