"use client";

import { UserValues } from "@/interface/user";
import RegisterModule, {
  RegisterFormRefType,
} from "@/modules/auth/register/module";
import React, { useRef, useState } from "react";
import { SubmitHandler } from "react-hook-form";

const RegisterPage = () => {
  const ref = useRef<RegisterFormRefType>(null);
  const [errMsg, setErrMsg] = useState("");

  const handleRegister: SubmitHandler<UserValues> = async (values) => {
    console.log(values);
    setErrMsg("");
  };
  return (
    <RegisterModule ref={ref} onSubmit={handleRegister} errorMsg={errMsg} />
  );
};

export default RegisterPage;
