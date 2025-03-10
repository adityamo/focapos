"use client";
import { UserValues } from "@/interface/user";
import RegisterModule, {
  RegisterFormRefType,
} from "@/modules/auth/register/module";
import React, { useRef, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { api } from "@/utils/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const ref = useRef<RegisterFormRefType>(null);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const { mutate: registerAccount } = api.auth.registerUser.useMutation();
  const router = useRouter();

  const handleRegister: SubmitHandler<UserValues> = async (values) => {
    setLoading(true);

    registerAccount(values, {
      onSuccess: () => {
        setLoading(false);
        toast.success("Akun anda teregistrasi");
        router.push("/");
      },
      onError: (err) => {
        toast.error(err.message);
        setLoading(false);
      },
    });

    setErrMsg("");
  };
  return (
    <RegisterModule
      ref={ref}
      onSubmit={handleRegister}
      errorMsg={errMsg}
      onLoading={loading}
    />
  );
};

export default RegisterPage;
