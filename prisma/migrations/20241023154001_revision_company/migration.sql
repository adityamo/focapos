/*
  Warnings:

  - You are about to drop the column `createBy` on the `M001_Company` table. All the data in the column will be lost.
  - You are about to drop the column `updateBy` on the `M001_Company` table. All the data in the column will be lost.
  - You are about to drop the column `createBy` on the `M003_Store` table. All the data in the column will be lost.
  - You are about to drop the column `updateBy` on the `M003_Store` table. All the data in the column will be lost.
  - Added the required column `createdBy` to the `M001_Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `M001_Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `M003_Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `M003_Store` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "M001_Company" DROP COLUMN "createBy",
DROP COLUMN "updateBy",
ADD COLUMN     "createdBy" TEXT NOT NULL,
ADD COLUMN     "updatedBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "M003_Store" DROP COLUMN "createBy",
DROP COLUMN "updateBy",
ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "updatedBy" INTEGER NOT NULL;
