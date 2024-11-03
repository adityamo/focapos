"use client";
import { StoreValue } from "@/interface/business";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputText from "@/components/inputs/InputText";
import InputNum from "@/components/inputs/InputNum";
import InputTextArea from "@/components/inputs/InputTextArea";
import InputSelect from "@/components/inputs/InputSelect";
import { useFormData } from "@/components/formsteps/FormContext";
import { RegisterStoreSchema } from "@/entities/regbusiness";

interface Props {
  formStep: any;
  prevFormStep: any;
  onSubmit: any;
  isLoading: boolean;
  typeBank: [];
}

const FormStore = ({
  prevFormStep,
  onSubmit,
  isLoading,
  formStep,
  typeBank,
}: Props) => {
  const { data } = useFormData();
  const { setFormValues } = useFormData();
  const { handleSubmit, control } = useForm<StoreValue>({
    mode: "all",
    resolver: zodResolver(RegisterStoreSchema),
    defaultValues: {
      store_name: "",
      address: "",
      phone: "",
      bank_type: "",
      bank_tf: "",
    },
  });

  const nextSubmit = (values: any) => {
    setFormValues(values);
    const sendData = { ...data, ...values };
    onSubmit(sendData);
  };

  return (
    <div className={`${formStep === 2 ? "flex justify-center" : "hidden"}`}>
      <div className="flex flex-col w-full lg:max-w-3xl bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <div className="space-y-1">
          <h4 className="font-semibold text-lg">Informasi Toko Anda</h4>
          <p className="font-normal text-sm text-gray-500">
            Silahkan lengkapi informasi mengenai toko anda
          </p>
        </div>
        <form onSubmit={handleSubmit(nextSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-7">
            <InputText
              name="store_name"
              label="Nama Toko"
              placeholder="Silahkan masukan nama toko anda"
              control={control}
            />
            <InputNum
              label="Nomer Telephone"
              name="phone"
              placeholder="Nomer Telephone"
              control={control}
              minLength={8}
              maxLength={13}
            />
            <InputSelect
              label="Bank"
              name="bank_type"
              placeholder="Pilih Bank"
              options={typeBank}
              control={control}
            />
            <InputText
              name="bank_tf"
              label="Nomer Rekening"
              placeholder="Silahkan masukan nomer rekening  anda"
              control={control}
            />
            <InputTextArea
              name="address"
              label="Alamat"
              placeholder="Silahkan masukan Alamat anda"
              rows={4}
              control={control}
            />
          </div>
          <div className="flex w-full border-t border-gray-300 mt-5">
            <div className="mt-4 flex w-full justify-end">
              <div className="flex flex-row gap-4">
                <button
                  onClick={prevFormStep}
                  className="text-slate-700 bg-white px-5 py-2 font-semibold rounded-md text-sm hover:bg-indigo-800 shadow-sm border border-gray-300"
                >
                  Kembali
                </button>
                <button
                  type="submit"
                  className="text-white bg-indigo-700 px-5 py-2 font-semibold rounded-md text-sm hover:bg-indigo-800 shadow-sm"
                >
                  {isLoading ? (
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
                    "Lanjut"
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormStore;
