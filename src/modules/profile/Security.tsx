import InputPassword from "@/components/inputs/InputPassword";
import { ChangePasswordSchema } from "@/entities";
import { ChangePasswordValues } from "@/interface/settings";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const Security = () => {
  const { handleSubmit, control, reset } = useForm<ChangePasswordValues>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      password: "",
      new_password: "",
      confirm_password: "",
    },
  });

  const handleChangePassword = (values: ChangePasswordValues) => {
    reset();
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
          >
            Simpan
          </button>
          <button
            type="submit"
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
