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
