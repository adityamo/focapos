import * as yup from "yup";

export const formBisnisSchema = yup.object().shape({
  company_name: yup.string().required("Nama perusahaan wajib diisi"),
  company_owner: yup.string().required("Nama pemilik wajib diisi"),
  business_typeID: yup.string().required("Tipe bisnis wajib diisi"),
  operational_time: yup.string().required("Waktu beroperasi wajib diisi"),
  province_code: yup.string().required("Province wajib diisi"),
  city_code: yup.string().required("Kota wajib diisi"),
  district_code: yup.string().required("Kecamatan wajib diisi"),
});
