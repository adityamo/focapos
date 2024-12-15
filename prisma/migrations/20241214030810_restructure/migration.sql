-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "phoneNumber" TEXT,
    "image" TEXT,
    "password" TEXT,
    "isActive" BOOLEAN,
    "rolesId" TEXT,
    "companyId" TEXT,
    "storeId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT DEFAULT '',
    "access_token" TEXT DEFAULT '',
    "oauth_token" TEXT,
    "oauth_token_secret" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "M1001_Roles" (
    "id" TEXT NOT NULL,
    "rolesName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "M1001_Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "M001_Company" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyOwner" TEXT NOT NULL,
    "businessTypeId" INTEGER NOT NULL,
    "ownerId" TEXT,
    "operationalTime" TEXT,
    "provinceId" TEXT NOT NULL,
    "cityId" TEXT NOT NULL,
    "districtId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,

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
    "id" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,
    "storeName" TEXT NOT NULL,
    "address" TEXT,
    "phone" TEXT,
    "bankType" INTEGER,
    "bankTf" TEXT NOT NULL,
    "logoSmall" TEXT,
    "logoBig" TEXT,
    "footerFaktur" TEXT,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,

    CONSTRAINT "M003_Store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "M1002_DataBank" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "code" VARCHAR(3) NOT NULL,
    "address" TEXT,
    "phone" VARCHAR(41),
    "fax" VARCHAR(51),
    "website" TEXT,

    CONSTRAINT "M1002_DataBank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "M2001_ProductCategories" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "isActive" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,

    CONSTRAINT "M2001_ProductCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "M2002_Product" (
    "id" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "productCode" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,

    CONSTRAINT "M2002_Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "M2003_ProductPrice" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "qty1" INTEGER NOT NULL,
    "qty2" INTEGER NOT NULL,
    "unitPrice" DECIMAL(65,30) NOT NULL,
    "notes" TEXT,
    "isActive" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,

    CONSTRAINT "M2003_ProductPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "M2004_ProductVariant" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "variantName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT,
    "updatedBy" TEXT,

    CONSTRAINT "M2004_ProductVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "M2005_ProductImage" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "categoryImg" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "M2005_ProductImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "M001_Company_businessTypeId_key" ON "M001_Company"("businessTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "M001_Company_ownerId_key" ON "M001_Company"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "M003_Store_companyId_key" ON "M003_Store"("companyId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "M1001_Roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "M001_Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "M003_Store"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "M001_Company" ADD CONSTRAINT "M001_Company_businessTypeId_fkey" FOREIGN KEY ("businessTypeId") REFERENCES "M002_BusinessType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "M2001_ProductCategories" ADD CONSTRAINT "M2001_ProductCategories_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "M003_Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "M2002_Product" ADD CONSTRAINT "M2002_Product_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "M003_Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "M2002_Product" ADD CONSTRAINT "M2002_Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "M2001_ProductCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "M2003_ProductPrice" ADD CONSTRAINT "M2003_ProductPrice_productId_fkey" FOREIGN KEY ("productId") REFERENCES "M2002_Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "M2004_ProductVariant" ADD CONSTRAINT "M2004_ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "M2002_Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "M2005_ProductImage" ADD CONSTRAINT "M2005_ProductImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "M2002_Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
