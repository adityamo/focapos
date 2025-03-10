import { z } from "zod";

const ProductPriceSchema = z.object({
  qty1: z.number().optional(),
  qty2: z.number().optional(),
  unitPrice: z.number().optional(),
});

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
  categoryId: z
    .string({
      required_error: "Category Wajib dipilih",
    })
    .nullable() // Allow null initially
    .refine((value) => value !== null, {
      message: "Category Wajib dipilih", // Ensures null is not accepted for submission
    }),
  storeId: z
    .string({ required_error: "store id tidak ditemukan" })
    .min(1, { message: "store id tidak ditemukan" }),
  isActive: z.boolean({
    required_error: "Status Harus dipilih",
  }),
  productThumbnail: z.array(z.instanceof(Blob)).optional(),
  priceData: z.array(ProductPriceSchema).optional(),
});
