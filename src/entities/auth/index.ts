import { z } from "zod";

export const RegisterSchema = z.object({
  name: z
    .string({
      required_error: "Nama harus diisi",
      invalid_type_error: "Nama Tidak Valid",
    })
    .min(1, { message: "Nama Wajib diisi" }),
  email: z
    .string({
      required_error: "Email harus diisi",
      invalid_type_error: "Email Tidak Valid",
    })
    .min(1, { message: "Email Wajib diisi" }),
  password: z
    .string({
      required_error: "Password harus diisi",
      invalid_type_error: "Password Tidak Valid",
    })
    .min(2, { message: "Minimal 5 Karakter" }),
});

export const CheckCompanySchema = z.object({
  id: z.number(),
});
