import { api } from "@/utils/server";
import { notFound } from "next/navigation";
import React from "react";
import Editcategories from "./editcategories";

const page = async ({ params }: any) => {
  const { categoryId } = params;

  const getDetail = await api.category.getDetailProductCategory.query({
    id: categoryId,
  });

  if (!categoryId) {
    return notFound();
  }

  if (!getDetail) {
    return notFound();
  }
  return <Editcategories id={categoryId} detail={getDetail.result} />;
};

export default page;
