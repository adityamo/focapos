"use client";
import React, { useState } from "react";

const Notification = () => {
  const [toggleLayanan, setToggleLayanan] = useState(false);

  return (
    <div className="bg-white shadow-sm rounded-md border border-gray-200">
      <div className="p-5 border-b relative">
        <div className="space-y-1">
          <h4 className="font-semibold text-md text-slate-700">Notifikasi</h4>
          <p className="text-xs text-gray-500 font-normal">
            Kontrol notifikasi anda
          </p>
        </div>
      </div>
      <div className="relative p-5 space-y-2">
        <div className="flex w-full justify-between items-center border-b border-gray-200 pb-4">
          <div className="relative space-y-1">
            <h5 className="font-semibold text-slate-700 text-sm">
              Pembaharuan Layanan
            </h5>
            <small className="font-normal text-slate-500 text-xs">
              Berita, Pemberitahuan, dan seputar pembaharuan focapos.
            </small>
          </div>
          <input
            type="checkbox"
            value="showDepartment"
            checked={toggleLayanan}
            onChange={() => setToggleLayanan(!toggleLayanan)}
            className="sr-only peer"
          />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </div>
        <div className="flex w-full justify-between items-center border-gray-200 py-4">
          <div className="relative space-y-1">
            <h5 className="font-semibold text-slate-700 text-sm">
              Info Keamanan
            </h5>
            <small className="font-normal text-slate-500 text-xs">
              Berita penting tentang keamanan akun anda
            </small>
          </div>
          <input
            type="checkbox"
            value="showDepartment"
            checked={toggleLayanan}
            onChange={() => setToggleLayanan(!toggleLayanan)}
            className="sr-only peer"
          />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
