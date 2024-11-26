"use client";
import InputPassword from "@/components/inputs/InputPassword";
import { ChangePasswordSchema } from "@/entities";
import { ChangePasswordValues } from "@/interface/settings";
import { RootState } from "@/store/store";
import { api } from "@/utils/api";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Security = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state: RootState) => state.User);
  const { handleSubmit, control, reset } = useForm<ChangePasswordValues>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      password: "",
      new_password: "",
      confirm_password: "",
    },
  });

  const { mutate: changePassword } = api.profile.changePassword.useMutation();

  const handleChangePassword = (values: ChangePasswordValues) => {
    setLoading(true);
    const sendData = {
      id: user.id,
      password: values.password,
      new_password: values.new_password,
    };

    changePassword(sendData, {
      onSuccess: () => {
        setLoading(false);
        reset();
        toast.success("Berhasil ubah password");
      },
      onError: () => {
        setLoading(false);
        toast.error("Gagal ubah password");
      },
    });
  };

  return (
    <div className="bg-white shadow-sm rounded-md border border-gray-200">
      <div className="p-5 border-b relative">
        <div className="space-y-1">
          <h4 className="font-semibold text-md text-slate-700">
            Ubah Password
          </h4>
          <p className="text-xs text-gray-500 font-normal">
            Selalu jaga kerahasiaan akun anda
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(handleChangePassword)} className="relative">
        <div className="p-5 space-y-4">
          <InputPassword
            name="password"
            label="Password"
            placeholder="password"
            control={control}
          />
          <InputPassword
            name="new_password"
            label="Password Baru"
            placeholder="Masukan password Baru"
            control={control}
          />
          <InputPassword
            name="confirm_password"
            label="Ulangi Password"
            placeholder="Ulangi password Baru"
            control={control}
          />
        </div>
        <div className="flex w-full justify-start pb-5 px-5">
          <button
            type="submit"
            className="py-2 px-5 bg-indigo-700 text-white font-semibold rounded-md text-xs"
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
          <button
            type="button"
            onClick={() => {
              reset();
            }}
            className="ms-3 py-2 px-5 bg-white text-indigo-700 border border-indigo-700 font-semibold rounded-md text-xs"
          >
            Cancel
          </button>
        </div>
      </form>
      <div className="relative py-4 px-5  space-y-3 ">
        <div className="flex flex-col gap-1">
          <h5 className="text-xs lg:text-sm font-semibold text-slate-700">
            Ketentuan Password
          </h5>
          <p className="text-[10px] lg:text-xs font-normal text-gray-500">
            Pastikan persyaratan berikut dipenuhi :
          </p>
        </div>
        <ul className="w-full space-y-1 text-xs text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>Panjang minimal 8 karakter - semakin banyak, semakin baik</li>
          <li>Setidaknya satu karakter huruf kecil</li>
          <li>Setidaknya satu karakter huruf besar</li>
          <li>setidaknya satu angka, simbol, atau karakter spasi</li>
        </ul>
      </div>
    </div>
  );
};

export default Security;
