import { PartialType } from '@nestjs/mapped-types';
import { CreateUgelDto } from './create-ugel.dto';

export class UpdateUgelDto extends PartialType(CreateUgelDto) {}
