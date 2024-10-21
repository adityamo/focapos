import React from "react";
import RegisterBusiness from "./register";
// import { api } from "@/utils/api";
import { api } from "@/utils/server";

export default async function page() {
  const ddl: any = await api.regcompany.getTypeCompany.query();
  console.log(ddl);
  return <RegisterBusiness ddlData={ddl} />;
}
