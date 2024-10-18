import { IsString, MinLength } from "class-validator";

export class CreateUgelDto {

  @IsString()
  @MinLength(5)
  nombre: string;

  @IsString()
  strImages: string;
}
