-- CreateTable
CREATE TABLE "maquina" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" BYTEA,

    CONSTRAINT "maquina_pkey" PRIMARY KEY ("id")
);
