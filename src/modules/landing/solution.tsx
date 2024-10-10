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

  return (
    <section className="py-5 lg:py-20">
      <Container className="bg-indigo-50 rounded-lg">
        <div className="flex flex-col p-6">
          <div className="">
            <h5 className="text-indigo-700 text-xs lg:text-md font-normal pb-3">
              Solusi berbagai jenis bisnis
            </h5>
            <h3 className="text-xl lg:text-3xl text-slate-700 font-semibold pb-2">
              Gunakan di Berbagai Jenis Bisnis
            </h3>
            <small className="text-xs lg:text-sm text-gray-400 pt-2">
              Kami akan membantu anda di berbagai jenis bisnis yang anda miliki
            </small>
          </div>
          <div className="flex flex-col lg:flex-row pt-6 gap-10">
            <div className="w-full lg:w-1/2">
              <img
                src="/assets/images/hero/casher.jpg"
                alt=""
                className="h-50 w-80 lg:h-[450px] lg:w-[750px] rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <ul className="flex flex-wrap text-xs lg:text-md font-medium text-center text-gray-500 dark:text-gray-400">
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
              <div className="mt-5 lg:mt-10">
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
                        <h5 className="text-lg text-slate-700 font-semibold">
                          Aplikasi Kasir
                        </h5>
                        <small className="text-gray-500 text-normal text-sm">
                          Kini kasir tidak perlu report lagi untuk melakukan
                          pencatatat transaksi kami memberikan kemudahan untuk
                          opersional kasir
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
                        <h5 className="text-lg text-slate-700 font-semibold">
                          Fitur Menu
                        </h5>
                        <small className="text-gray-500 text-normal text-sm">
                          Kami menyediakan fitur menu untuk customer untuk
                          melakukan proses pemesanan tanpa harus meninggalkan
                          meja
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
                        <h5 className="text-lg text-slate-700 font-semibold">
                          Laporan Penjualan
                        </h5>
                        <small className="text-gray-500 text-normal text-sm">
                          Kami menyediakan fitur menu untuk customer untuk
                          melakukan proses pemesanan tanpa harus meninggalkan
                          meja
                        </small>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default solution;
