-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "image" TEXT,
    "age" TEXT,
    "gender" TEXT,
    "race" TEXT,
    "demos" JSONB,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
