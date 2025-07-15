/*
  Warnings:

  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - Added the required column `newPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oldPrice` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "price",
ADD COLUMN     "newPrice" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "oldPrice" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "avatar" DROP NOT NULL;
