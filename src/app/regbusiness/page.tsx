import React from "react";
import RegisterBusiness from "./register";
import { api } from "@/utils/server";
import { dropdownFormat } from "@/helpers/FormatHelper";
import { unstable_noStore as noStore } from "next/cache";

export default async function page({ searchParams }: any) {
  noStore();
  const ddlTypeCompany: any = await api.regcompany.getTypeCompany.query();
  const ddlBank: any = await api.regcompany.getTypeBank.query();

  const userID = searchParams.user;

  let ddlFrTypeComp = [];
  let ddlFrBank = [];
  if (ddlTypeCompany && ddlBank) {
    ddlFrTypeComp = dropdownFormat(ddlTypeCompany);
    ddlFrBank = dropdownFormat(ddlBank);
  }

  const sendDDL = {
    companyType: ddlFrTypeComp,
    bankType: ddlFrBank,
  };

  const steps = ["Informasi Bisnis", "Buat Toko", "Selesai"];

  return (
    <RegisterBusiness ddlData={sendDDL} steps={steps} idCustomer={userID} />
  );
}
