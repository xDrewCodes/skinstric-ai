/*
  Warnings:

  - The `ages` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `genders` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `races` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "ages",
ADD COLUMN     "ages" JSONB,
DROP COLUMN "genders",
ADD COLUMN     "genders" JSONB,
DROP COLUMN "races",
ADD COLUMN     "races" JSONB;
