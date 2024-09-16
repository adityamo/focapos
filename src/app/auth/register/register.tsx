"use client";
import { UserValues } from "@/interface/user";
import RegisterModule, {
  RegisterFormRefType,
} from "@/modules/auth/register/module";
import React, { useRef, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { api } from "@/utils/api";

const RegisterPage = () => {
  const ref = useRef<RegisterFormRefType>(null);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const mutation = api.auth.registerUser.useMutation();

  const handleRegister: SubmitHandler<UserValues> = async (values) => {
    setLoading(true);
    const sendData: any = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    console.log(sendData);
    mutation.mutate(sendData);

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
