-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "password" TEXT,
    "roles_id" INTEGER,
    "company_id" INTEGER,
    "store_id" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
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
    "userId" INTEGER NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "M1001_Roles" (
    "id" SERIAL NOT NULL,
    "roles_name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "M1001_Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "M001_Company" (
    "id" SERIAL NOT NULL,
    "company_name" TEXT NOT NULL,
    "company_owner" TEXT NOT NULL,
    "business_typeID" INTEGER NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "operational_time" TEXT,
    "province_code" TEXT NOT NULL,
    "city_code" TEXT NOT NULL,
    "district_code" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

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
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "M003_Store_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "M001_Company_business_typeID_key" ON "M001_Company"("business_typeID");

-- CreateIndex
CREATE UNIQUE INDEX "M001_Company_owner_id_key" ON "M001_Company"("owner_id");

-- CreateIndex
CREATE UNIQUE INDEX "M003_Store_company_id_key" ON "M003_Store"("company_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roles_id_fkey" FOREIGN KEY ("roles_id") REFERENCES "M1001_Roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "M001_Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "M003_Store"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "M001_Company" ADD CONSTRAINT "M001_Company_business_typeID_fkey" FOREIGN KEY ("business_typeID") REFERENCES "M002_BusinessType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
