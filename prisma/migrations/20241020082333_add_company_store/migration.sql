-- DropIndex
DROP INDEX "User_roles_id_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "roles_id" DROP DEFAULT;
