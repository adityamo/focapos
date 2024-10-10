import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";

const PenjualanChart = () => {
  return (
    <div className="flex w-full py-5">
      <div className="bg-white border border-gray-200 shadow-sm w-full rounded-lg">
        <div className="flex w-full p-4 border-b border-gray-200">
          <div className="flex flex-col space-y-1">
            <h5 className="font-semibold text-xl text-slate-700">Penjualan</h5>
            <p className="flex items-center text-gray-500 text-xs">
              <span className="me-2">
                <FaRegCalendar />
              </span>
              Agustus 2024, rekap penjualan anda dibulan ini
            </p>
          </div>
        </div>
        <div className="p-4 border-b border-gray-200">
          <div className="grid grid-col-1 lg:grid-cols-12 gap-5">
            <div className="col-span-4 border-e border-gray-200">
              <select
                id="countries"
                className="max-w-34 mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Bulan</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <div className="space-y-2">
                <p className="text-slate-700 text-sm font-medium">
                  Total Penjualan
                </p>
                <h4 className="flex items-center text-2xl font-semibold text-slate-700">
                  Rp 25.889.099
                  <span className="flex items-center ms-3 py-1 px-5 text-xs rounded-full bg-emerald-200 font-semibold text-emerald-700">
                    <FiChevronUp className="me-1" />
                    12 %
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-span-8">
              <div className="w-full grid grid-cols-3 gap-5">
                <div className="space-y-2">
                  <p className="text-slate-700 text-xs font-medium">
                    Laba Kotor
                  </p>
                  <h4 className="flex items-center text-lg font-semibold text-slate-700">
                    Rp 25.889.099
                    <span className="flex items-center ms-3 py-1 px-3 text-xs rounded-full bg-emerald-200 font-semibold text-emerald-700">
                      <FiChevronUp className="me-1" />
                      12 %
                    </span>
                  </h4>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-700 text-xs font-medium">
                    Laba Kotor
                  </p>
                  <h4 className="flex items-center text-lg font-semibold text-slate-700">
                    Rp 25.889.099
                    <span className="flex items-center ms-3 py-1 px-3 text-xs rounded-full bg-emerald-200 font-semibold text-emerald-700">
                      <FiChevronUp className="me-1" />
                      12 %
                    </span>
                  </h4>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-700 text-xs font-medium">
                    Laba Kotor
                  </p>
                  <h4 className="flex items-center text-lg font-semibold text-slate-700">
                    Rp 25.889.099
                    <span className="flex items-center ms-3 py-1 px-3 text-xs rounded-full bg-emerald-200 font-semibold text-emerald-700">
                      <FiChevronUp className="me-1" />
                      12 %
                    </span>
                  </h4>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-700 text-xs font-medium">
                    Laba Kotor
                  </p>
                  <h4 className="flex items-center text-lg font-semibold text-slate-700">
                    Rp 25.889.099
                    <span className="flex items-center ms-3 py-1 px-3 text-xs rounded-full bg-emerald-200 font-semibold text-emerald-700">
                      <FiChevronUp className="me-1" />
                      12 %
                    </span>
                  </h4>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-700 text-xs font-medium">
                    Laba Kotor
                  </p>
                  <h4 className="flex items-center text-lg font-semibold text-slate-700">
                    Rp 25.889.099
                    <span className="flex items-center ms-3 py-1 px-3 text-xs rounded-full bg-emerald-200 font-semibold text-emerald-700">
                      <FiChevronUp className="me-1" />
                      12 %
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h5 className="font-semibold text-lg text-slate-700">
            Grafik Penjualan
          </h5>
        </div>
      </div>
    </div>
  );
};

export default PenjualanChart;
