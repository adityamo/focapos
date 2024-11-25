"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from "react-icons/io";
import { BsBox } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const DashboardAdmin = () => {
  const { user } = useSelector((state: RootState) => state.User);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (user) {
      setUsername(user.name);
    }
  }, []);

  return (
    <>
      <div className="relative pb-5 space-y-2">
        <h3 className="text-slate-700 font-semibold text-2xl">
          Selamat Datang, <span className="text-indigo-700">{username}</span>
        </h3>
        <p className="text-gray-500 font-medium text-sm">
          Pantau selalu setiap kegiatan yang ada di tokomu
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-gradient-to-r from-indigo-700 to-indigo-800 p-7 flex justify-between items-center rounded-lg w-full">
          <div className="space-y-1">
            {username && (
              <h3 className="text-white font-medium text-xl">
                Halo, {username}
              </h3>
            )}

            <p className="text-sm text-white font-light">
              Rekap Penjualan anda hari ini
            </p>
            <div className="grid grid-cols-2 divide-x-2 gap-5 pt-3 w-full">
              <div className="flex items-center">
                <div className="flex h-10 w-10 bg-white rounded-md me-5  justify-center items-center">
                  <IoMdArrowRoundUp className="text-green-500 text-2xl" />
                </div>
                <div className="space-y-1">
                  <h5 className="text-lg text-white font-semibold">
                    Rp 25.000
                  </h5>
                  <p className="text-xs text-white font-normal">Penjualan</p>
                </div>
              </div>
              <div className="flex items-center ps-5">
                <div className="flex h-10 w-10 bg-white rounded-md me-5  justify-center items-center">
                  <IoMdArrowRoundDown className="text-red-500 text-2xl" />
                </div>
                <div className="space-y-1">
                  <h5 className="text-lg text-white font-semibold">
                    Rp 25.000
                  </h5>
                  <p className="text-sm text-white font-normal">Pembelian</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src={"/assets/images/admin/dashboard/brangkas.png"}
              width={100}
              height={100}
              alt="brangkas_img"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 flex w-full shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 py-2 px-2 content-center w-full">
            <div className="flex items-center p-4 border-r border-b border-gray-200">
              <div className="bg-teal-100 p-3 rounded-lg">
                <BsBox className="text-teal-600 text-2xl" />
              </div>
              <div className="ml-4">
                <p className="text-gray-600 text-sm">Barang Terjual</p>
                <p className="text-gray-900 text-2xl font-semibold">257</p>
              </div>
            </div>
            <div className="flex items-center p-4  rounded-lg border-b border-gray-200">
              <div className="bg-indigo-200 p-3 rounded-lg">
                <BsBox className="text-indigo-600 text-2xl" />
              </div>
              <div className="ml-4">
                <p className="text-gray-600 text-sm">Total Produk</p>
                <p className="text-gray-900 text-2xl font-semibold">6</p>
              </div>
            </div>
            <div className="flex items-center p-4 border-r">
              <div className="bg-blue-100 p-3 rounded-lg">
                <LuUsers className="text-blue-600 text-2xl" />
              </div>
              <div className="ml-4">
                <p className="text-gray-600 text-sm">Barang Terjual</p>
                <p className="text-gray-900 text-2xl font-semibold">257</p>
              </div>
            </div>
            <div className="flex items-center p-4  rounded-lg ">
              <div className="bg-purple-200 p-3 rounded-lg">
                <FiShoppingCart className="text-purple-600 text-2xl" />
              </div>
              <div className="ml-4">
                <p className="text-gray-600 text-sm">Total Produk</p>
                <p className="text-gray-900 text-2xl font-semibold">6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
