-- DropForeignKey
ALTER TABLE "M001_Company" DROP CONSTRAINT "M001_Company_businessTypeId_fkey";

-- DropIndex
DROP INDEX "M001_Company_businessTypeId_key";

-- CreateTable
CREATE TABLE "_M001_CompanyToM002_BusinessType" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_M001_CompanyToM002_BusinessType_AB_unique" ON "_M001_CompanyToM002_BusinessType"("A", "B");

-- CreateIndex
CREATE INDEX "_M001_CompanyToM002_BusinessType_B_index" ON "_M001_CompanyToM002_BusinessType"("B");

-- AddForeignKey
ALTER TABLE "_M001_CompanyToM002_BusinessType" ADD CONSTRAINT "_M001_CompanyToM002_BusinessType_A_fkey" FOREIGN KEY ("A") REFERENCES "M001_Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_M001_CompanyToM002_BusinessType" ADD CONSTRAINT "_M001_CompanyToM002_BusinessType_B_fkey" FOREIGN KEY ("B") REFERENCES "M002_BusinessType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
