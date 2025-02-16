-- CreateTable
CREATE TABLE "AccessTocken" (
    "id" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AccessTocken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AccessTocken_accessToken_key" ON "AccessTocken"("accessToken");

-- CreateIndex
CREATE UNIQUE INDEX "AccessTocken_refreshToken_key" ON "AccessTocken"("refreshToken");
