import React from "react";
import RegisterBusiness from "./register";
import { api } from "@/utils/server";
import { dropdownFormat } from "@/helpers/FormatHelper";

export default async function page({ searchParams }: any) {
  const ddl: any = await api.regcompany.getTypeCompany.query();
  const idCustomer = searchParams.code;
  let ddlFormat = [];
  if (ddl) {
    ddlFormat = dropdownFormat(ddl);
  }

  const steps = ["Informasi Bisnis", "Buat Toko", "Selesai"];

  return (
    <RegisterBusiness
      ddlData={ddlFormat}
      steps={steps}
      idCustomer={idCustomer}
    />
  );
}
