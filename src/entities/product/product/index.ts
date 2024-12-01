import { z } from "zod";

export const ProductSchema = z.object({
  productCode: z
    .string({
      required_error: "Kode Produk wajib diisi",
    })
    .min(2, { message: "Kode Produk Harus lebih dari 2 karakter" }),
  productName: z
    .string({
      required_error: "Nama Produk wajib diisi",
    })
    .min(2, { message: "Nama Produk Harus lebih dari 2 karakter" }),
  description: z
    .string({
      required_error: "Deskripsi wajib diisi",
    })
    .min(2, { message: "Deskripsi Harus lebih dari 2 karakter" }),
});
