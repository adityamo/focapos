"use client";
import { RootState } from "@/store/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { FiActivity, FiShoppingCart, FiPackage } from "react-icons/fi";

const SalesToday = () => {
  const { user } = useSelector((state: RootState) => state.User);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (user) {
      setUsername(user.name);
    }
  }, []);
  return (
    <div className="relative space-y-4">
      <div className="flex flex-col lg:flex-row w-full lg:justify-between ">
        <div className="space-y-2">
          {username ? (
            <>
              <h3 className="text-slate-700 dark:text-white font-semibold text-2xl">
                Selamat Datang,{" "}
                <span className="text-indigo-700 dark:text-indigo-400">
                  {username}
                </span>
              </h3>
              <p className="text-gray-500 font-medium text-sm dark:text-white">
                Pantau selalu setiap kegiatan yang ada di tokomu
              </p>
            </>
          ) : (
            <div className="animate-pulse flex flex-col w-full gap-2">
              <div className="h-6 bg-gray-200 rounded w-2/3"></div>
              <div className="mt-2 h-4 bg-gray-200 rounded w-1/3"></div>
            </div>
          )}
        </div>
      </div>
      <div className="relative bg-gradient-to-r from-indigo-700 to-indigo-800 rounded-md shadow-sm">
        <div className="grid lg:grid-cols-12 gap-4 p-5 items-center">
          <div className="lg:col-span-8">
            <div className="space-y-5 relative">
              <div className="flex flex-col space-y-3">
                <p className="text-white text-sm lg:text-md font-medium">
                  Total Penjualan Hari ini
                </p>
                <h3 className="text-white text-3xl lg:text-4xl  font-semibold">
                  Rp. 2.870.000
                </h3>
                <small className="text-xs text-white">
                  * Total keseluruhan dari transaksi toko anda tanggal 24 Nov
                  2024
                </small>
              </div>
              <div className="flex w-full">
                <div className="grid grid-cols-1 space-y-4 lg:space-y-1 lg:gap-10 lg:grid-cols-3">
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 bg-white rounded-md me-5  justify-center items-center">
                      <FiActivity className="text-indigo-500 text-2xl" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-white font-normal">
                        Total Transaksi
                      </p>
                      <h5 className="text-lg text-white font-semibold">
                        125 Transaksi
                      </h5>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 bg-white rounded-md me-5  justify-center items-center">
                      <FiShoppingCart className="text-green-500 text-2xl" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-white font-normal">
                        Item Terjual
                      </p>
                      <h5 className="text-lg text-white font-semibold">
                        256 Item
                      </h5>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 bg-white rounded-md me-5  justify-center items-center">
                      <FiPackage className="text-blue-500 text-2xl" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-white font-normal">
                        Total Produk
                      </p>
                      <h5 className="text-lg text-white font-semibold">
                        5 Produk
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 hidden lg:block ">
            <div className="flex w-full justify-end pr-4">
              <Image
                src={"/assets/images/illustration/graphdashboard.svg"}
                width={200}
                height={200}
                alt="brangkas_img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesToday;
