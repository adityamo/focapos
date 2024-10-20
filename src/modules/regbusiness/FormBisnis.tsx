import { useFormData } from "@/components/formsteps/FormContext";
import InputText from "@/components/inputs/InputText";
import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  formStep: any;
  nextFormStep: any;
}

const FormBisnis = ({ formStep, nextFormStep }: Props) => {
  const { setFormValues } = useFormData();
  const { handleSubmit, control } = useForm({
    mode: "all",
    defaultValues: {},
  });

  const onSubmit = (values: any) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={`${formStep === 1 ? "flex justify-center" : "hidden"}`}>
      <div className="flex flex-col w-full lg:max-w-3xl bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <div className="space-y-1">
          <h4 className="font-semibold text-lg">Informasi Bisnis Anda</h4>
          <p className="font-normal text-sm text-gray-500">
            Silahkan lengkapi informasi mengenai usaha anda
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-7">
            <InputText
              name="company_name"
              label="Nama Perusahaan"
              placeholder="Silahkan masukan nama perusahaan"
              control={control}
            />
            <InputText
              name="company_name"
              label="Nama Pemilik Usaha"
              placeholder="Silahkan masukan nama Pemilik"
              control={control}
            />
          </div>
          <div className="flex w-full border-t border-gray-300 mt-5">
            <div className="mt-4 flex w-full justify-end">
              <button
                type="submit"
                className="text-white bg-indigo-700 px-5 py-2 font-semibold rounded-md text-sm hover:bg-indigo-800 shadow-sm"
              >
                Lanjut
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormBisnis;
