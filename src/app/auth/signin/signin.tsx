"use client";
import { UserLogin } from "@/interface/user";
import SignInModule, { SignInFormRefType } from "@/modules/auth/signin";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { SubmitHandler } from "react-hook-form";

const SignInPage = () => {
  const ref = useRef<SignInFormRefType>(null);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const router = useRouter();
  const handleSigIn: SubmitHandler<UserLogin> = async (values) => {
    setLoading(true);
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (res?.error) {
      setLoading(false);
      setErrMsg("Please check username or password");
    } else if (res?.ok) {
      setLoading(false);
      setErrMsg("");
      router.push("/admin/dashboard");
    }
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
