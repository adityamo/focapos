import React, { useState } from "react";
import Image from "next/image";
import MdlAccount from "./modal/MdlAccount";

interface Props {
  user: any;
}

const Account = ({ user }: Props) => {
  const [isModaOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white shadow-sm rounded-md border border-gray-200">
      <div className="p-5 border-b relative">
        <div className="space-y-1">
          <h4 className="font-semibold text-md text-slate-700">
            Informasi Akun
          </h4>
          <p className="text-xs text-gray-500 font-normal">
            Informasi detail seputar akun anda
          </p>
        </div>
      </div>
      <div className="relative p-5">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="flex flex-col space-y-4 bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex w-full items-center justify-center">
              <Image
                src={"/assets/images/user/anon-pic-circle.svg"}
                width={30}
                height={30}
                alt="profilepict"
                className="w-20 h-20"
              />
            </div>
            <button className="w-full px-10 py-2 bg-white rounded-lg border border-gray-200 shadow-sm text-slate-700 text-sm font-semibold hover:bg-slate-200">
              Pilih Foto
            </button>
            <small className="text-xs text-gray-500 font-normal">
              Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi
              file yang diperbolehkan: .JPG .JPEG .PNG
            </small>
          </div>
          <div className="lg:col-span-2">
            <div className="flex w-full flex-col">
              <h6 className="text-sm text-slate-700 font-semibold">
                Ubah Data Diri
              </h6>
              <div className="grid grid-cols-4 gap-3 py-3">
                <div className="col-span-1">
                  <p className="text-slate-700 text-xs">Nama</p>
                </div>
                <div className="col-span-3">
                  <p className="text-slate-700 text-xs font-semibold">
                    {user.name}{" "}
                    <span className="text-green-500 ms-4 font-semibold">
                      <a
                        href=""
                        className=""
                        onClick={(e) => {
                          e.preventDefault();
                          openModal();
                        }}
                      >
                        Ubah
                      </a>
                    </span>
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-slate-700 text-xs">Email</p>
                </div>
                <div className="col-span-3">
                  <p className="text-slate-700 text-xs font-semibold">
                    adityahalim18@gmail.com
                    <span className="text-green-500 ms-4 font-semibold">
                      <a href="" className="">
                        Ubah
                      </a>
                    </span>
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-slate-700 text-xs">Nomer HP</p>
                </div>
                <div className="col-span-3">
                  <p className="text-slate-700 text-xs font-semibold">
                    087888362186{" "}
                    <span className="text-green-500 ms-4 font-semibold">
                      <a href="" className="">
                        Ubah
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col pt-2">
              <h6 className="text-sm text-slate-700 font-semibold">
                Informmasi Usaha
              </h6>
              <div className="grid grid-cols-4 gap-3 py-3">
                <div className="col-span-1">
                  <p className="text-slate-700 text-xs">Nama Perusahaan</p>
                </div>
                <div className="col-span-3">
                  <p className="text-slate-700 text-xs font-semibold">
                    Demo Foca Pos
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-slate-700 text-xs">Store</p>
                </div>
                <div className="col-span-3">
                  <p className="text-slate-700 text-xs font-semibold">
                    {user.store_name}
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-slate-700 text-xs ">Jabatan</p>
                </div>
                <div className="col-span-3">
                  <p className="text-slate-700 text-xs font-semibold">
                    {user.roles_name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MdlAccount isOpen={isModaOpen} onClose={closeModal} />
    </div>
  );
};

export default Account;
