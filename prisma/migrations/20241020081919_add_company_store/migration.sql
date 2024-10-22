/*
  Warnings:

  - A unique constraint covering the columns `[roles_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roles_id" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "M1001_Roles" (
    "id" SERIAL NOT NULL,
    "roles_name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "M1001_Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "M001_Company" (
    "id" SERIAL NOT NULL,
    "company_name" TEXT NOT NULL,
    "company_owner" TEXT NOT NULL,
    "business_typeID" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "operational_time" TEXT,
    "province_code" TEXT NOT NULL,
    "city_code" TEXT NOT NULL,
    "district_code" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updateBy" INTEGER NOT NULL,

    CONSTRAINT "M001_Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "M002_BusinessType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "M002_BusinessType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "M003_Store" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "store_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "bank_tf" TEXT NOT NULL,
    "logo_small" TEXT NOT NULL,
    "logo_big" TEXT NOT NULL,
    "footer_faktur" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updateBy" INTEGER NOT NULL,

    CONSTRAINT "M003_Store_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "M001_Company_business_typeID_key" ON "M001_Company"("business_typeID");

-- CreateIndex
CREATE UNIQUE INDEX "M001_Company_userId_key" ON "M001_Company"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "M003_Store_company_id_key" ON "M003_Store"("company_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_roles_id_key" ON "User"("roles_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roles_id_fkey" FOREIGN KEY ("roles_id") REFERENCES "M1001_Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "M001_Company" ADD CONSTRAINT "M001_Company_business_typeID_fkey" FOREIGN KEY ("business_typeID") REFERENCES "M002_BusinessType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "M001_Company" ADD CONSTRAINT "M001_Company_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
