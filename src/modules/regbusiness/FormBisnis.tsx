"use client";
import { useFormData } from "@/components/formsteps/FormContext";
import InputSelect from "@/components/inputs/InputSelect";
import InputText from "@/components/inputs/InputText";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formBisnisSchema } from "./schema";
import { BusinessValue } from "@/interface/business";

interface Props {
  formStep: any;
  nextFormStep: () => void;
  typeBusiness: any;
}

const operationalTime = [
  { code: "1-6 Bulan", display: "1-6 Bulan" },
  { code: "7-12 Bulan", display: "7-12 Bulan" },
  { code: "> 1 Tahun", display: "> 1 Tahun" },
  { code: "> 2 Tahun", display: "> 2 Tahun" },
];

const FormBisnis = ({ formStep, nextFormStep, typeBusiness }: Props) => {
  const { setFormValues } = useFormData();
  const [provinceList, setProvinceList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [districtList, setDistrictList] = useState([]);

  // ValuesState
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    setValue,
  } = useForm<BusinessValue>({
    mode: "all",
    resolver: yupResolver(formBisnisSchema),
    defaultValues: {
      company_name: "",
      company_owner: "",
      business_typeID: "",
      operational_time: "",
      province_code: "",
      city_code: "",
      district_code: "",
    },
  });

  const fetchProvince = async () => {
    await fetch(
      "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
    )
      .then(async (response: any) => {
        const res = await response.json();
        setProvinceList(res);
      })
      .catch((err) => {});
  };

  const handleChangeProvince = async (provinceID: string) => {
    setSelectedCity("");
    setSelectedDistrict("");
    setCityList([]);
    setDistrictList([]);

    if (provinceID) {
      setSelectedProvince(provinceID);
      setValue("province_code", provinceID);
      await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceID}.json`
      )
        .then(async (response: any) => {
          const res = await response.json();
          setCityList(res);
        })
        .catch((err) => {});
    }
  };

  const handleChangeCity = async (cityId: string) => {
    setSelectedDistrict("");
    setDistrictList([]);

    if (cityId) {
      setSelectedCity(cityId);
      setValue("city_code", cityId);

      await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${cityId}.json`
      )
        .then(async (response: any) => {
          const res = await response.json();
          setDistrictList(res);
        })
        .catch((err) => {});
    }
  };

  useEffect(() => {
    fetchProvince();
  }, []);

  // console.log(provinceList);

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
              name="company_owner"
              label="Nama Pemilik Usaha"
              placeholder="Silahkan masukan nama Pemilik"
              control={control}
            />
            <InputSelect
              label="Tipe Bisnis"
              name="business_typeID"
              placeholder="Pilih tipe bisnis anda"
              options={typeBusiness}
              control={control}
            />
            <InputSelect
              label="Lama Beroperasi"
              name="operational_time"
              placeholder="Pilih berapa lama beroperasi"
              options={operationalTime}
              control={control}
            />
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-700 font-medium mb-2 dark:text-white">
                  Provinsi
                </label>
                <div>
                  <select
                    {...register("province_code")}
                    name="province"
                    onChange={(e: any) => {
                      handleChangeProvince(e.target.value);
                    }}
                    value={selectedProvince}
                    className={`py-3 px-3 pe-9 block w-full ${errors.province_code ? "border-red-500" : "border-gray-200"} rounded-lg text-sm border focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`}
                  >
                    <option disabled={true} value={""}>
                      Pilih Provinsi
                    </option>
                    {provinceList &&
                      provinceList.map((item: any, key: React.Key) => {
                        return (
                          <option key={key} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                  {errors.province_code ? (
                    <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                      <svg
                        className="flex-shrink-0 size-4 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" x2="12" y1="8" y2="12"></line>
                        <line x1="12" x2="12.01" y1="16" y2="16"></line>
                      </svg>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {errors.province_code ? (
                  <p
                    className="text-sm text-red-600 mt-2"
                    id="hs-validation-name-error-helper"
                  >
                    {errors.province_code.message?.toString()}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-700 font-medium mb-2 dark:text-white">
                  Kota
                </label>
                <div>
                  <select
                    {...register("city_code")}
                    name="city"
                    onChange={(e: any) => {
                      handleChangeCity(e.target.value);
                    }}
                    value={selectedCity}
                    className={`py-3 px-3 pe-9 block w-full ${errors.city_code ? "border-red-500" : "border-gray-200"} rounded-lg text-sm border focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`}
                  >
                    <option disabled={true} value={""}>
                      Pilih Kota
                    </option>
                    {cityList &&
                      cityList.map((item: any, key: React.Key) => {
                        return (
                          <option key={key} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                  {errors.city_code ? (
                    <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                      <svg
                        className="flex-shrink-0 size-4 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" x2="12" y1="8" y2="12"></line>
                        <line x1="12" x2="12.01" y1="16" y2="16"></line>
                      </svg>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {errors.city_code ? (
                  <p
                    className="text-sm text-red-600 mt-2"
                    id="hs-validation-name-error-helper"
                  >
                    {errors.city_code.message?.toString()}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-700 font-medium mb-2 dark:text-white">
                  Kecamatan
                </label>
                <div>
                  <select
                    {...register("district_code")}
                    name="district"
                    onChange={(e: any) => {
                      setSelectedDistrict(e.target.value);
                      setValue("district_code", e.target.value);
                    }}
                    value={selectedDistrict}
                    className={`py-3 px-3 pe-9 block w-full ${errors.district_code ? "border-red-500" : "border-gray-200"} rounded-lg text-sm border focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`}
                  >
                    <option disabled={true} value={""}>
                      Pilih Kecamatan
                    </option>
                    {districtList &&
                      districtList.map((item: any, key: React.Key) => {
                        return (
                          <option key={key} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                  {errors.district_code ? (
                    <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                      <svg
                        className="flex-shrink-0 size-4 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" x2="12" y1="8" y2="12"></line>
                        <line x1="12" x2="12.01" y1="16" y2="16"></line>
                      </svg>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {errors.district_code ? (
                  <p
                    className="text-sm text-red-600 mt-2"
                    id="hs-validation-name-error-helper"
                  >
                    {errors.district_code.message?.toString()}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
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
