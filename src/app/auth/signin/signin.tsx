"use client";
import { UserLogin } from "@/interface/user";
import SignInModule, { SignInFormRefType } from "@/modules/auth/signin";
import React, { useRef, useState } from "react";
import { SubmitHandler } from "react-hook-form";

const SignInPage = () => {
  const ref = useRef<SignInFormRefType>(null);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSigIn: SubmitHandler<UserLogin> = async (values) => {
    setLoading(true);
    setErrMsg;
  };

  return (
    <SignInModule
      ref={ref}
      onSubmit={handleSigIn}
      errorMsg={errMsg}
      onLoading={loading}
    />
  );
};

export default SignInPage;
