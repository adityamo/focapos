import { z } from "zod";

export const ChangePasswordSchema = z
  .object({
    password: z
      .string({
        required_error: "password saat ini harus diisi",
      })
      .min(6, { message: "Password Minimal 5 Karakter" }),
    new_password: z
      .string({
        required_error: "password baru harus diisi",
      })
      .min(6, { message: "Password Minimal 5 Karakter" }),
    confirm_passowrd: z
      .string({
        required_error: "ulangi password wajib disi",
      })
      .min(6, { message: "Password Minimal 5 Karakter" }),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirm_passowrd) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password tidak sesuai dengan password yang ingin anda ubah",
        path: ["confirm_passowrd"],
      });
    }
  });
