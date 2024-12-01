"use client";
import FormCategories, {
  FormCategoryRefType,
} from "@/modules/category/FormCategories";
import { RootState } from "@/store/store";
import { api } from "@/utils/api";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Props {
  id: number;
  detail: any;
}
const Editcategories = ({ detail, id }: Props) => {
  const ref = useRef<FormCategoryRefType>(null);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state: RootState) => state.User);
  const router = useRouter();

  const { mutate: updateCategory } =
    api.category.updateProductCategory.useMutation();

  const onSubmit = async (values: any) => {
    setLoading(true);
    const sendData: any = {
      id: id,
      code: values.code,
      name: values.name,
      isActive: values.isActive,
      updatedBy: user.id,
    };
    updateCategory(sendData, {
      onSuccess: (resp: any) => {
        setLoading(false);
        toast.success("Kategori Berhasil Diubah");
        router.push("/admin/product/category");
      },
      onError: () => {
        toast.error("Gagal mengubah kategori");
        setLoading(false);
      },
    });
  };

  return (
    <div className="max-w-3xl justify-center px-0 py-5 sm:px-6 lg:px-8 lg:py-5 mx-auto space-y-5">
      <div className="relative space-y-1">
        <h3 className="text-slate-700 text-sm lg:text-lg font-semibold">
          Edit Category
        </h3>
        <p className="text-xs text-gray-500 font-normal">
          Anda dapat mengubah kategori produk
        </p>
      </div>
      <div className="relative pt-2 lg:pt-2">
        <FormCategories
          ref={ref}
          onSubmit={onSubmit}
          isLoading={loading}
          defaultValues={detail}
        />
      </div>
    </div>
  );
};

export default Editcategories;
