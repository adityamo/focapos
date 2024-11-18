"use client";
import CategoryTable from "@/components/table/CategoryTable";
import React from "react";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";

const CategoryList = () => {
  return (
    <>
      <div className="flex flex-col w-full space-y-4 pb-5">
        <div className="flex w-full justify-between">
          <h4 className="text-lg text-slate-700 font-semibold dark:text-white">
            Kategori
          </h4>
          <div>
            <Link
              href={"/admin/product/category/add"}
              className="inline-flex items-center  bg-indigo-700 px-5 py-2 rounded-md text-white text-xs lg:text-sm"
            >
              <span className="me-2">
                <FiPlus />
              </span>
              Tambah
            </Link>
          </div>
        </div>
      </div>
      <CategoryTable />
    </>
  );
};

export default CategoryList;
