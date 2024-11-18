/*
  Warnings:

  - The `createdBy` column on the `M2001_ProductCategories` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updatedBy` column on the `M2001_ProductCategories` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "M2001_ProductCategories" DROP COLUMN "createdBy",
ADD COLUMN     "createdBy" INTEGER,
DROP COLUMN "updatedBy",
ADD COLUMN     "updatedBy" INTEGER;
