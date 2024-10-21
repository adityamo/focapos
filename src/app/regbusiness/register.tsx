"use client";
import FormSteps from "@/components/formsteps";
import FormBisnis from "@/modules/regbusiness/FormBisnis";
// import { api } from "@/utils/api";
import React, { useState } from "react";

interface Props {
  ddlData: any;
}

const RegisterBusiness = ({ ddlData }: Props) => {
  console.log(ddlData);
  const [formStep, setFormStep] = useState(1);
  const steps = ["Informasi Bisnis", "Buat Toko", "Selesai"];

  const nextFormStep = () => {
    setFormStep((currentStep) => currentStep + 1);
  };

  // const { data: test } = api.regcompany.getTypeCompany.useQuery();
  // console.log(test);

  // const prevFormStep = (e: any) => {
  //   e.preventDefault();
  //   setFormStep((currentStep) => currentStep - 1);
  // };

  // const onSubmit = async (data: any) => {};

  return (
    <div className="relative bg-gradient-to-b from-[#4136C5] to-[#221D68] h-screen">
      <div className="max-w-[85rem] px-4 py-10 sm:px-8 lg:py-10 mx-auto">
        <div className="mx-w-2xl mx-auto">
          <div className="flex w-full justify-center pb-4">
            <img
              src={"/assets/icon/logo/logo-white.svg"}
              alt=""
              className="h-7 lg:h-10"
            />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-xl lg:text-2xl font-semibold text-white ">
              Siap bergabung dengan foca ?
            </h1>
            <p className="mt-1 text-xs lg:text-sm text-white dark:text-neutral-400">
              Silahkan lengkapi form dibawah ini untuk memulai petualangan baru
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <FormSteps currentStep={formStep} steps={steps}>
            {formStep >= 1 && (
              <FormBisnis formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 2 && <></>}
          </FormSteps>
        </div>
      </div>
    </div>
  );
};

export default RegisterBusiness;
