/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `Ugel` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Ugel_nombre_key" ON "Ugel"("nombre");
