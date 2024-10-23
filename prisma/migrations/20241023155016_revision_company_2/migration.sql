/*
  Warnings:

  - Changed the type of `createdBy` on the `M001_Company` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `updatedBy` on the `M001_Company` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "M001_Company" DROP COLUMN "createdBy",
ADD COLUMN     "createdBy" INTEGER NOT NULL,
DROP COLUMN "updatedBy",
ADD COLUMN     "updatedBy" INTEGER NOT NULL;
