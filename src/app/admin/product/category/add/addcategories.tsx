"use client";
import React, { useRef, useState } from "react";
import FormCategories, {
  FormCategoryRefType,
} from "@/modules/category/FormCategories";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { api } from "@/utils/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AddCategory = () => {
  const ref = useRef<FormCategoryRefType>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.User);
  const { mutate: postCategory } =
    api.category.createProductCategory.useMutation();

  const onSubmit = async (values: any) => {
    setLoading(true);

    const sendData: any = {
      code: values.code,
      name: values.name,
      isActive: values.isActive,
      storeId: user.storeId,
      createdBy: user.id,
      updatedBy: "",
    };

    postCategory(sendData, {
      onSuccess: (resp: any) => {
        setLoading(false);
        toast.success("Kategori Berhasil Dibuat");
        router.push("/admin/product/category");
      },
      onError: () => {
        toast.error("Gagal membuat kategori");
        setLoading(false);
      },
    });
  };

  return (
    <div className="max-w-3xl justify-center px-0 py-5 sm:px-6 lg:px-8 lg:py-5 mx-auto space-y-5">
      <div className="relative space-y-1">
        <h3 className="text-slate-700 text-md lg:text-lg font-semibold">
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
