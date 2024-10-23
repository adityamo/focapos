import React from "react";
import Image from "next/image";

interface Props {
  formStep: any;
}

const SuccessState = ({ formStep }: Props) => {
  return (
    <div className={`${formStep === 3 ? "flex justify-center" : "hidden"}`}>
      <div className="flex flex-col w-full lg:max-w-3xl bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <div className="text-center space-y-">
          <div className="flex w-full justify-center">
            <Image
              src={"/assets/images/illustration/join.svg"}
              width={250}
              height={250}
              alt="Ilustration_success"
              className="pb-5"
            />
          </div>
          <h5 className="text-xl lg:text-3xl font-semibold text-slate-700">
            Selamat Bergabung
          </h5>
          <p className="text-xs lg:text-sm font-normal text-gray-500">
            Toko anda berhasil dibuat silahkan tekan lanjut untuk memulai
            petualangan
          </p>
        </div>
        <div className="flex w-full border-t border-gray-300 mt-5">
          <div className="mt-4 flex w-full justify-end">
            <button
              type="submit"
              className="text-white bg-indigo-700 px-5 py-2 font-semibold rounded-md text-sm hover:bg-indigo-800 shadow-sm"
            >
              Ke Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessState;
