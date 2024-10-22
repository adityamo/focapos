"use client";
import Container from "@/components/container";
import React, { useState } from "react";

const tabs = [
  { id: 1, name: "Food & Beverage" },
  { id: 2, name: "Toko Retail" },
  { id: 3, name: "Jasa Profesional" },
];

const solution = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const handleTabClick = (e: any) => {
    setCurrentTab(e);
  };

  const displayContent = (content: any) => {
    switch (content) {
      case 1:
        return <FoodBeverage />;
      case 2:
        return <Retail />;
      case 3:
        return <Profesional />;
    }
  };

  return (
    <section className="py-5 lg:py-20">
      <Container className="bg-indigo-50 rounded-lg">
        <div className="flex flex-col p-6">
          <div className="">
            <h5 className="text-indigo-700 text-xs lg:text-lg font-semibold pb-3">
              Solusi berbagai jenis bisnis
            </h5>
            <h3 className="text-xl lg:text-3xl text-slate-700 font-semibold pb-2">
              Gunakan di Berbagai Jenis Bisnis
            </h3>
            <small className="text-xs lg:text-sm text-gray-500 pt-2">
              Kami akan membantu anda di berbagai jenis bisnis yang anda miliki
            </small>
          </div>
          <div className="flex w-full justify-start lg:justify-start pt-5">
            <ul className="flex flex-wrap text-xs lg:text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              {tabs.map((item: any, key: React.Key) => {
                return (
                  <li className="me-4" key={key}>
                    <button
                      className={`inline-block px-6 py-3 rounded-full ${currentTab === item.id ? "text-white bg-indigo-600 active" : "text-indigo-600"}`}
                      aria-current="page"
                      onClick={() => {
                        handleTabClick(item.id);
                      }}
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col lg:flex-row pt-6 gap-10">
            {displayContent(currentTab)}
          </div>
        </div>
      </Container>
    </section>
  );
};

const FoodBeverage = () => {
  return (
    <>
      <div className="w-full lg:w-1/2">
        <img
          src="/assets/images/hero/casher.jpg"
          alt=""
          className="h-50 w-80 lg:h-[400px] lg:w-[750px] rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col space-y-5">
          <h4 className="text-md lg:text-2xl text-slate-700 font-semibold">
            Satu aplikasi untuk semua kebutuhan
          </h4>
          <ul className="max-w-xl space-y-5 text-gray-500 list-inside dark:text-gray-400">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 me-5  text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <div className="flex flex-col space-y-2">
                <h5 className="text-sm lg:text-lg text-slate-700 font-semibold">
                  Aplikasi Kasir
                </h5>
                <small className="text-xs lg:text-sm text-gray-500 text-normal">
                  Kini kasir tidak perlu report lagi untuk melakukan pencatatat
                  transaksi kami memberikan kemudahan untuk opersional kasir
                </small>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 me-5  text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <div className="flex flex-col space-y-2">
                <h5 className="text-sm lg:text-lg text-slate-700 font-semibold">
                  Fitur Menu
                </h5>
                <small className="text-xs lg:text-sm text-gray-500 text-normal">
                  Kami menyediakan fitur menu untuk customer untuk melakukan
                  proses pemesanan tanpa harus meninggalkan meja
                </small>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 me-5  text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <div className="flex flex-col space-y-2">
                <h5 className="text-sm lg:text-lg text-slate-700 font-semibold">
                  Laporan Penjualan
                </h5>
                <small className="text-xs lg:text-sm text-gray-500 text-normal">
                  Kami menyediakan fitur menu untuk customer untuk melakukan
                  proses pemesanan tanpa harus meninggalkan meja
                </small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Retail = () => {
  return (
    <>
      <div className="w-full lg:w-1/2">
        <img
          src="/assets/images/hero/retail.jpg"
          alt=""
          className="h-50 w-80 lg:h-[400px] lg:w-[750px] rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col space-y-5">
          <h4 className="text-md lg:text-2xl text-slate-700 font-semibold">
            Kemudahan untuk memantau dan kelola banyak store
          </h4>
          <ul className="max-w-xl space-y-5 text-gray-500 list-inside dark:text-gray-400">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 me-5  text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <div className="flex flex-col space-y-2">
                <h5 className="text-sm lg:text-lg text-slate-700 font-semibold">
                  Sistem Pembukuan
                </h5>
                <small className="text-xs lg:text-sm text-gray-500 text-normal">
                  Kemudahan dalam pelaporan penjualan, anda dapat memantau
                  langsung laporan penjualan
                </small>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 me-5  text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <div className="flex flex-col space-y-2">
                <h5 className="text-sm lg:text-lg text-slate-700 font-semibold">
                  Manajemen Stock
                </h5>
                <small className="text-xs lg:text-sm text-gray-500 text-normal">
                  Pantau dan atur limit stok untuk kemudahan tim purchasing
                  dalam membuat rencana pengadaan yang efisien
                </small>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 me-5  text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <div className="flex flex-col space-y-2">
                <h5 className="text-sm lg:text-lg text-slate-700 font-semibold">
                  Produk dan inventaris
                </h5>
                <small className="text-xs lg:text-sm text-gray-500 text-normal">
                  Pantau setiap produk dan inventaris yang anda miliki di toko
                </small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Profesional = () => {
  return (
    <>
      <div className="w-full lg:w-1/2">
        <img
          src="/assets/images/hero/service.jpg"
          alt=""
          className="h-50 w-80 lg:h-[400px] lg:w-[750px] rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col space-y-5">
          <h4 className="text-md lg:text-2xl text-slate-700 font-semibold">
            Buat operasional bisnis lebih mudah
          </h4>
          <ul className="max-w-xl space-y-5 text-gray-500 list-inside dark:text-gray-400">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 me-5  text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <div className="flex flex-col space-y-2">
                <h5 className="text-sm lg:text-lg text-slate-700 font-semibold">
                  Maintain banyak customer
                </h5>
                <small className="text-xs lg:text-sm text-gray-500 text-normal">
                  Semakin mudah untuk kelola setiap customer anda
                </small>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 me-5  text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <div className="flex flex-col space-y-2">
                <h5 className="text-sm lg:text-lg text-slate-700 font-semibold">
                  Reservasi Pekerjaan
                </h5>
                <small className="text-xs lg:text-sm text-gray-500 text-normal">
                  tidah perlu pusing lagi pekerjaan yang akan anda ambil, Atur
                  dan jadwalkan setiap pekerjaan anda
                </small>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 me-5  text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <div className="flex flex-col space-y-2">
                <h5 className="text-sm lg:text-lg text-slate-700 font-semibold">
                  Analisis Layanan
                </h5>
                <small className="text-xs lg:text-sm text-gray-500 text-normal">
                  Fitur dashboard kami akan membantu hasil dari laporan jasa
                  anda
                </small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default solution;
