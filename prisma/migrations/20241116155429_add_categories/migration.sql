-- CreateTable
CREATE TABLE "M2001_ProductCategories" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "store_id" TEXT NOT NULL,
    "isActive" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT,
    "updatedBy" TEXT,

    CONSTRAINT "M2001_ProductCategories_pkey" PRIMARY KEY ("id")
);
