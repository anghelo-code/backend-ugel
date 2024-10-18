import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateColegioDto {

  @IsString()
  @IsNotEmpty()
  codigoModular: string;

  @IsString()
  @MinLength(5)
  nombre: string;

  @IsString()
  distrito: string;

  @IsString()
  direccion: string;

  @IsString()
  strImages: string;

  @IsNumber()
  @IsNotEmpty()
  ugelId: number;

  @IsNumber()
  @IsNotEmpty()
  UsuarioId: number;
}
