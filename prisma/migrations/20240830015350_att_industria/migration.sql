/*
  Warnings:

  - You are about to drop the `maquina` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "maquina";

-- CreateTable
CREATE TABLE "maquinas" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" BYTEA,

    CONSTRAINT "maquinas_pkey" PRIMARY KEY ("id")
);
