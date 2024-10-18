-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('PERSONALDELAUGEL', 'DIRECTOR');

-- CreateEnum
CREATE TYPE "Nivel" AS ENUM ('INICIAL', 'PRIMARIA', 'SECUNDARIA');

-- CreateTable
CREATE TABLE "Ugel" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "strImages" TEXT NOT NULL,

    CONSTRAINT "Ugel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Colegio" (
    "id" SERIAL NOT NULL,
    "codigoModular" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "distrito" TEXT NOT NULL,
    "direccion" TEXT,
    "strImages" TEXT NOT NULL,
    "ugelId" INTEGER NOT NULL,
    "UsuarioId" INTEGER NOT NULL,

    CONSTRAINT "Colegio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grados" (
    "id" SERIAL NOT NULL,
    "nivel" "Nivel" NOT NULL,
    "grado" TEXT NOT NULL,
    "nroAlumnos" INTEGER NOT NULL,
    "nroCupos" INTEGER NOT NULL,
    "colegioId" INTEGER NOT NULL,

    CONSTRAINT "Grados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "dni" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tipoUsuario" "TipoUsuario" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Colegio_UsuarioId_key" ON "Colegio"("UsuarioId");

-- AddForeignKey
ALTER TABLE "Colegio" ADD CONSTRAINT "Colegio_ugelId_fkey" FOREIGN KEY ("ugelId") REFERENCES "Ugel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Colegio" ADD CONSTRAINT "Colegio_UsuarioId_fkey" FOREIGN KEY ("UsuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grados" ADD CONSTRAINT "Grados_colegioId_fkey" FOREIGN KEY ("colegioId") REFERENCES "Colegio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
