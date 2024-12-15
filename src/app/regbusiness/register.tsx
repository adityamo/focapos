"use client";
import FormSteps from "@/components/formsteps";
import FormBisnis from "@/modules/regbusiness/FormBisnis";
import FormStore from "@/modules/regbusiness/FormStore";
import SuccessState from "@/modules/regbusiness/SuccessState";
import React, { useState } from "react";
import { api } from "@/utils/api";
import { toast } from "react-toastify";

interface Props {
  ddlData: any;
  steps: any;
  idCustomer: any;
}

const RegisterBusiness = ({ ddlData, steps, idCustomer }: Props) => {
  const findID = idCustomer;
  const [formStep, setFormStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { mutate: registerBusiness } =
    api.regcompany.registerBusiness.useMutation();

  const nextFormStep = () => {
    setFormStep((currentStep) => currentStep + 1);
  };

  const prevFormStep = (e: any) => {
    e.preventDefault();
    setFormStep((currentStep) => currentStep - 1);
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    const sendData: any = {
      company: {
        companyName: data.companyName,
        companyOwner: data.companyOwner,
        businessTypeId: Number(data.businessTypeId),
        ownerId: findID,
        operationalTime: data.operationalTime,
        provinceId: data.provinceId,
        cityId: data.cityId,
        districtId: data.districtId,
        isActive: true,
        // updateAt: getDateTimeNow(),
      },
      store: {
        storeName: data.storeName,
        address: data.address,
        phone: data.phone,
        bankType: Number(data.bankType),
        bankTf: data.bankTf,
        isActive: true,
        // updateAt: getDateTimeNow(),
      },
    };

    registerBusiness(sendData, {
      onSuccess: (resp: any) => {
        setLoading(false);
        toast.success("Bisnis anda teregistrasi");
        nextFormStep();
      },
      onError: (err) => {
        toast.error(err.message);
        setLoading(false);
      },
    });
  };

  return (
    <div className="relative bg-gradient-to-b from-[#4136C5] to-[#221D68] ">
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
              <FormBisnis
                formStep={formStep}
                nextFormStep={nextFormStep}
                typeBusiness={ddlData.companyType}
              />
            )}
            {formStep >= 2 && (
              <FormStore
                formStep={formStep}
                prevFormStep={prevFormStep}
                onSubmit={onSubmit}
                isLoading={loading}
                typeBank={ddlData.bankType}
              />
            )}
            {formStep >= 3 && <SuccessState formStep={formStep} />}
          </FormSteps>
        </div>
      </div>
    </div>
  );
};

export default RegisterBusiness;
