import React from "react";
import { FiCodepen } from "react-icons/fi";

const Billing = () => {
  return (
    <div className="bg-white shadow-sm rounded-md border border-gray-200">
      <div className="p-5 border-b relative">
        <div className="space-y-1">
          <h4 className="font-semibold text-md text-slate-700">Ubah rencana</h4>
          <p className="text-xs text-gray-500 font-normal">
            Anda dapat meningkatkan dan menurunkan versi kapan pun Anda mau.
          </p>
        </div>
      </div>
      <div className="p-5 relative">
        <div className="relative flex flex-col w-full space-y-1">
          <h5 className="font-semibold text-xl text-slate-700">
            Paket Anda Saat ini :{" "}
            <span className="ms-2 text-blue-700">Personal</span>
          </h5>
          <p className="text-gray-500 text-xs">
            Terima kasih telah bergabung dengan foca dan membantu pengembangan
          </p>
        </div>
        <div className="flex pt-8 lg:pt-10 w-full">
          <div className="bg-indigo-100 p-4 rounded-lg me-5 text-xl">
            <FiCodepen className="text-indigo-700" />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Perancaan Saat Ini</p>
            <h5 className="text-xl text-slate-700 font-semibold">
              Rp. 0/Bulan
            </h5>
          </div>
        </div>
        <div className="inline-flex pt-7">
          <button className="px-5 py-2 bg-indigo-700 shadow-1 text-white rounded-md text-sm hover:bg-indigo-800">
            Upgrade Rencana
          </button>
          <button className="ms-4 px-5 py-2 bg-white shadow-1 border border-indigo-700 text-indigo-700 rounded-md text-sm hover:bg-indigo-700 hover:text-white">
            Cancel
          </button>
        </div>
      </div>
      <div className="px-5 py-3">
        <h5 className="text-md text-slate-700 font-semibold">
          History Pembayaran
        </h5>
      </div>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 pb-5">
        <thead className="bg-gray-50 dark:bg-neutral-800">
          <tr>
            <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
              <span className="text-xs font-semibold tracking-wide text-gray-500 dark:text-neutral-200">
                Deskripsi
              </span>
            </th>
            <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
              <span className="text-xs font-semibold tracking-wide text-gray-500 dark:text-neutral-200">
                Jumlah
              </span>
            </th>
            <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
              <span className="text-xs font-semibold tracking-wide text-gray-500 dark:text-neutral-200">
                Invoice
              </span>
            </th>
            <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
              <span className="text-xs font-semibold tracking-wide text-gray-500 dark:text-neutral-200">
                Tanggal
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
          <tr>
            <td className="size-px whitespace-nowrap px-6 py-3">
              <span className="text-xs text-slate-700 dark:text-white">
                Pembayaran Bulanan
              </span>
            </td>
            <td className="size-px whitespace-nowrap px-6 py-3">
              <span className="text-xs text-slate-700 dark:text-white">
                Rp 50.000
              </span>
            </td>
            <td className="size-px whitespace-nowrap px-6 py-3">
              <a href="">
                <span className="px-4 py-1 bg-gray-200 rounded-lg">
                  <small className="text-xs text-gray-500 font-bold">PDF</small>
                </span>
              </a>
            </td>
            <td className="size-px whitespace-nowrap px-6 py-3">
              <span className="text-xs text-slate-700 dark:text-white">
                25 Jun 2024
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Billing;
