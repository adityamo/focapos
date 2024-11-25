import React, { useState } from "react";
import Image from "next/image";
// import MdlAccount from "./modal/MdlAccount";
import { AccountValues } from "@/interface/settings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AccountInformationSchema } from "@/entities";
import InputText from "@/components/inputs/InputText";
import { api } from "@/utils/api";
import { toast } from "react-toastify";

interface Props {
  user: any;
}

const Account = ({ user }: Props) => {
  // const [isModaOpen, setIsModalOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const { handleSubmit, control, reset } = useForm<AccountValues>({
    resolver: zodResolver(AccountInformationSchema),
    defaultValues: {
      name: "",
      email: "",
      ...user,
    },
  });

  const { mutate: changeAccount } = api.profile.changeAccount.useMutation();

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  const onSubmit = async (values: any) => {
    setLoading(true);
    const sendData = {
      id: user.id,
      name: values.name,
      email: values.email,
    };

    changeAccount(sendData, {
      onSuccess: () => {
        setLoading(false);
        reset();
        toast.success("Berhasil update Akun");
      },
      onError: () => {
        setLoading(false);
        toast.error("Gagal update akun");
      },
    });
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex w-full flex-col border-b border-gray-200 pb-2">
                <h6 className="text-sm text-slate-700 font-semibold">
                  Ubah Data Diri
                </h6>
                <div className="grid grid-cols-2 gap-5 py-4">
                  <div className="col-span-2">
                    <InputText
                      label="Nama"
                      name="name"
                      control={control}
                      placeholder="Masukan nama anda"
                    />
                  </div>
                  <div className="col-span-2">
                    <InputText
                      label="Email"
                      name="email"
                      control={control}
                      placeholder="Masukan email anda"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-end mt-5">
                <button
                  type="button"
                  onClick={() => {
                    reset();
                  }}
                  className="ms-3 py-2 px-5 bg-white text-indigo-700 border border-indigo-700 font-semibold rounded-md text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-5 ms-3 bg-indigo-700 text-white font-semibold rounded-md text-xs"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-4 h-4 me-3 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                      Menyimpan...
                    </>
                  ) : (
                    "Simpan"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <MdlAccount isOpen={isModaOpen} onClose={closeModal} /> */}
    </div>
  );
};

export default Account;
