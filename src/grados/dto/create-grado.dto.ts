import { IsIn, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateGradoDto {

  @IsIn(['INICIAL', 'PRIMARIA', 'SECUNDARIA'], {
    message: 'El nivel debe ser uno de los siguientes: INICIAL, PRIMARIA, SECUNDARIA',
  })
  @IsNotEmpty()
  nivel: string;

  @IsString()
  @IsNotEmpty()
  grado: string;

  @IsNumber()
  @IsNotEmpty()
  nroAlumnos: number;

  @IsNumber()
  @IsNotEmpty()
  nroCupos: number;

  @IsString()
  @IsNotEmpty()
  colegioId: string;
}
