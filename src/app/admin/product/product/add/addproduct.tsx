"use client";

import React, { useRef, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { ProductValues } from "@/interface/product/product";

import FormProduct, { FormProductRefType } from "@/modules/product/FormProduct";

const AddProduct = () => {
  const ref = useRef<FormProductRefType>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<ProductValues> = (data) => {
    setLoading(true);
    console.log("Submitted Data", data);
  };

  return (
    <div className="relative w-full">
      <div className="space-y-1 pb-4">
        <h3 className="text-slate-700 text-md lg:text-lg font-semibold dark:text-white">
          Tambah Produk
        </h3>
        <p className="text-xs text-gray-500 font-normal dark:text-white">
          Anda dapat menambahkan produk
        </p>
      </div>
      <FormProduct
        ref={ref}
        defaultValues={{}}
        isLoading={loading}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AddProduct;
