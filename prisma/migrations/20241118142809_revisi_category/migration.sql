/*
  Warnings:

  - Changed the type of `store_id` on the `M2001_ProductCategories` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "M2001_ProductCategories" DROP COLUMN "store_id",
ADD COLUMN     "store_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "M2001_ProductCategories" ADD CONSTRAINT "M2001_ProductCategories_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "M003_Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
