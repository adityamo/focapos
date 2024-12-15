import { z } from "zod";

export const UserRegisterSchema = z
  .object({
    name: z.string().min(1, { message: "Nama tidak boleh kosong" }),
    email: z
      .string()
      .min(1, { message: "Email tidak boleh kosong" })
      .email({ message: "Format email tidak cocok" }),
    password: z
      .string()
      .min(5, { message: "Password terlalu pende" })
      .min(1, { message: "Password tidak boleh kosong" }),
    confirm_password: z
      .string()
      .min(5, { message: "Password anda terlalu pendek" })
      .min(1, { message: "Password anda tidak boleh kosong" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"], // Specify the field causing the error
    message: "Passworrd anda tidak sesuai", // Error message
  });

export const LoginSchema = z.object({
  email: z.string().min(1, { message: "Email tidak boleh kosong" }),
  password: z.string().min(1, { message: "Password tidak boleh kosong" }),
});

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
  id: z.string(),
});
