"use client";
import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";

const ProductList = () => {
  return (
    <div className="relative w-full space-y-4">
      <div className="flex w-full justify-between">
        <h4 className="text-lg text-slate-700 font-semibold dark:text-white">
          Produk
        </h4>
        <div>
          <Link
            href={"/admin/product/product/add"}
            className="inline-flex items-center  bg-indigo-700 px-5 py-2 rounded-md text-white text-xs lg:text-sm hover:bg-indigo-800"
          >
            <span className="me-2">
              <FiPlus />
            </span>
            Tambah
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
