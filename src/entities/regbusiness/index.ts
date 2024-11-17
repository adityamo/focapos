import { z } from "zod";

export const RegisterCompanySchema = z.object({
  company_name: z
    .string({
      required_error: "Nama Perusahaan harus diisi",
      invalid_type_error: "Nama Perusahaan Tidak Valid",
    })
    .min(1, { message: "Perusahaan Wajib diisi" }),
  company_owner: z
    .string({
      required_error: "Pemilik Usaha harus diisi",
      invalid_type_error: "Pemilik Usaha Tidak Valid",
    })
    .min(1, { message: "Pemilik Usah Wajib diisi" }),
  business_typeID: z
    .string({
      required_error: "Tipe bisnis harus diisi",
      invalid_type_error: "Tipe bisnis Tidak Valid",
    })
    .min(1, { message: "Tipe bisnis Wajib diisi" }),
  operational_time: z
    .string({
      required_error: "Waktu beroperasinal harus diisi",
      invalid_type_error: "Waktu beroperasinal Tidak Valid",
    })
    .min(1, { message: "Waktu beroperasinal Wajib diisi" }),
  province_code: z
    .string({
      required_error: "Provinsi harus diisi",
      invalid_type_error: "Provinsi Tidak Valid",
    })
    .min(1, { message: "Provinsi Wajib diisi" }),
  city_code: z
    .string({
      required_error: "Kota harus diisi",
      invalid_type_error: "Kota Tidak Valid",
    })
    .min(1, { message: "Kota Wajib diisi" }),
  district_code: z
    .string({
      required_error: "Kecamatan harus diisi",
      invalid_type_error: "Kecamatan Tidak Valid",
    })
    .min(1, { message: "Kota Wajib diisi" }),
});

export const RegisterStoreSchema = z.object({
  store_name: z
    .string({
      required_error: "Nama Toko Wajib diisi",
      invalid_type_error: "Nama Toko Wajib diisi Tidak Valid",
    })
    .min(1, { message: "Nama Toko Wajib diisi" }),
  address: z
    .string({
      required_error: "Alamat harus diisi",
      invalid_type_error: "Alamat Tidak Valid",
    })
    .min(1, { message: "Alamat Wajib diisi" }),
  phone: z
    .string({
      required_error: "Nomer telepon harus diisi",
      invalid_type_error: "Nomer telepon Tidak Valid",
    })
    .min(1, { message: "Nomer telepon Wajib diisi" }),
  bank_type: z
    .string({
      required_error: "Jenis Bank harus diisi",
      invalid_type_error: "Jenis Bank Tidak Valid",
    })
    .min(1, { message: "Jenis Bank  Wajib diisi" }),
  bank_tf: z
    .string({
      required_error: "Nomer rekening harus diisi",
      invalid_type_error: "Nomer rekening Tidak Valid",
    })
    .min(1, { message: "Nomer rekening diisi" }),
});
