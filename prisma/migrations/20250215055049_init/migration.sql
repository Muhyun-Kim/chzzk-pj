/*
  Warnings:

  - You are about to drop the `AccessTocken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "AccessTocken";

-- CreateTable
CREATE TABLE "AccessToken" (
    "id" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AccessToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AccessToken_accessToken_key" ON "AccessToken"("accessToken");

-- CreateIndex
CREATE UNIQUE INDEX "AccessToken_refreshToken_key" ON "AccessToken"("refreshToken");
