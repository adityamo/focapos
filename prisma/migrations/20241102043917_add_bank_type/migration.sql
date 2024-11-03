/*
  Warnings:

  - Added the required column `bank_type` to the `M003_Store` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "M003_Store" ADD COLUMN     "bank_type" INTEGER NOT NULL;
