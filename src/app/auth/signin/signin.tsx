"use client";
import { encryptID } from "@/helpers/EncryptHelper";
import { UserLogin } from "@/interface/user";
import SignInModule, { SignInFormRefType } from "@/modules/auth/signin";
import { api } from "@/utils/api";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { SubmitHandler } from "react-hook-form";
// import { decryptHelp, encryptHelp } from "@/helpers/Encrypted";

const SignInPage = () => {
  const ref = useRef<SignInFormRefType>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const { data: session }: any = useSession();
  const router = useRouter();

  const { refetch } = api.regcompany.checkHaveCompany.useQuery(
    { email },
    {
      enabled: false,
    }
  );

  const handleSigIn: SubmitHandler<UserLogin> = async (values) => {
    setLoading(true);
    setErrMsg("");
    setEmail(values.email);
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (res?.error) {
      setErrMsg("Email dan Password tidak sesuai");
    } else if (res?.ok) {
      setErrMsg("");
      setLoading(false);

      // const haveCompany = session?.user?.companyId ? true : false;
      const refetchResult = await refetch();
      const companyStatus = refetchResult.data;

      const userID = encryptID(session?.user?.id);

      if (companyStatus) {
        router.push("/admin/dashboard");
      } else {
        router.push(`/regbusiness?user=${userID}`);
      }
    }

    setLoading(false);
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
