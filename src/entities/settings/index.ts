import { z } from "zod";

export const ChangePasswordSchema = z
  .object({
    password: z
      .string({
        required_error: "password saat ini harus diisi",
      })
      .min(5, { message: "Password Minimal 5 Karakter" }),
    new_password: z
      .string({
        required_error: "password baru harus diisi",
      })
      .min(5, { message: "Password Minimal 5 Karakter" }),
    confirm_password: z
      .string({
        required_error: "ulangi password wajib disi",
      })
      .min(5, { message: "Password Minimal 5 Karakter" }),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    path: ["confirm_password"], // Specify the field causing the error
    message: "Password baru dan ulangi password harus sama", // Error message
  });

export const AccountInformationSchema = z.object({
  name: z
    .string({ required_error: "Nama Wajib diisi" })
    .min(4, { message: "Nama minimmal 4 Karakter" }),
  email: z
    .string({ required_error: "Email wajib diisi" })
    .min(4, { message: "Nama minimmal 4 Karakter" })
    .email("Format Email tidak valid"),
});
