"use client";

import React, { useRef, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { ProductValues } from "@/interface/product/product";

import FormProduct, { FormProductRefType } from "@/modules/product/FormProduct";
import { api } from "@/utils/api";
import { toast } from "react-toastify";
import { nanoid } from "@reduxjs/toolkit";
import supabase from "@/utils/spbaseclient";

const AddProduct = () => {
  const ref = useRef<FormProductRefType>(null);
  const [loading, setLoading] = useState(false);
  const { mutate: postProduct } = api.product.store.useMutation();

  const onSubmit: SubmitHandler<ProductValues> = async (data: any) => {
    setLoading(true);
    const thumbnailPath = data.productThumbnail?.[0];
    const thumbnailFileName = nanoid();

    let fileUrl = null;

    try {
      if (thumbnailPath) {
        const { data: uploadThumbnail, error: uploadThumbnailErr } =
          await supabase.storage
            .from("focastorage")
            .upload(
              `product/${thumbnailFileName}.${thumbnailPath.name.split(".").pop()}`,
              thumbnailPath
            );

        if (uploadThumbnailErr) throw new Error(uploadThumbnailErr.message);

        fileUrl = supabase.storage
          .from("focastorage")
          .getPublicUrl(uploadThumbnail?.path).data.publicUrl;
      }

      const payload = {
        ...data,
        productThumbnail: fileUrl,
      };

      postProduct(payload, {
        onSuccess: (resp: any) => {
          setLoading(false);
          toast.success("Product Berhasil Dibuat");
          console.log(resp);
        },
        onError: () => {
          setLoading(false);
          toast.error("Gagal membuat product");
        },
      });
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message || "File upload failed");
    }
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
