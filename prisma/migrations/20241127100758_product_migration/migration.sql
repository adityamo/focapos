-- CreateTable
CREATE TABLE "M2002_Product" (
    "id" SERIAL NOT NULL,
    "store_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "productCode" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER,
    "updatedBy" INTEGER,

    CONSTRAINT "M2002_Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "M2003_ProductPrice" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "qty1" INTEGER NOT NULL,
    "qty2" INTEGER NOT NULL,
    "unitPrice" DECIMAL(65,30) NOT NULL,
    "notes" TEXT,
    "isActive" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER,
    "updatedBy" INTEGER,

    CONSTRAINT "M2003_ProductPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "M2004_ProductVariant" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "variantName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER,
    "updatedBy" INTEGER,

    CONSTRAINT "M2004_ProductVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "M2005_ProductImage" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "categoryImg" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "M2005_ProductImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "M2002_Product" ADD CONSTRAINT "M2002_Product_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "M003_Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "M2002_Product" ADD CONSTRAINT "M2002_Product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "M2001_ProductCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "M2003_ProductPrice" ADD CONSTRAINT "M2003_ProductPrice_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "M2002_Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "M2004_ProductVariant" ADD CONSTRAINT "M2004_ProductVariant_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "M2002_Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "M2005_ProductImage" ADD CONSTRAINT "M2005_ProductImage_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "M2002_Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
