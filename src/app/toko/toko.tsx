"use client";
import { TokoValues } from "@/interface/toko";
import FormUsaha, { FormUsahaRefType } from "@/modules/toko/FormUsaha";
import { useRef, useState } from "react";
import { SubmitHandler } from "react-hook-form";

const TokoPage = () => {
  const ref = useRef<FormUsahaRefType>(null);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSigIn: SubmitHandler<TokoValues> = async (values) => {
    setLoading(true);
    setErrMsg("");
  };

  return (
    <div className="relative bg-gradient-to-b from-[#4136C5] to-[#221D68] h-screen">
      <div className="max-w-[85rem] px-4 py-10 sm:px-8 lg:py-15 mx-auto">
        <div className="mx-w-2xl mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white lg:text-3xl">
              Siap bergabung dengan foca ?
            </h1>
            <p className="mt-1 text-white dark:text-neutral-400">
              Silahkan lengkapi form dibawah ini
            </p>
          </div>

          <FormUsaha
            ref={ref}
            onSubmit={handleSigIn}
            errorMsg={errMsg}
            onLoading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default TokoPage;
