import { z } from "zod";

export const CategorySchema = z.object({
  code: z
    .string({
      required_error: "Code Kategori Wajib di isi",
    })
    .min(2, { message: "Kode kategori harus lebih dari 2 karakter" }),
  name: z
    .string({
      required_error: "Nama Kategori wajib diisi",
    })
    .min(2, { message: "Nama Barang Harus lebih dari 2 karakter" }),
  isActive: z.boolean({
    required_error: "Status Harus dipilih",
  }),
});
