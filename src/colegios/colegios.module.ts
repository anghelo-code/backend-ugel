import { Module } from '@nestjs/common';
import { ColegiosService } from './colegios.service';
import { ColegiosController } from './colegios.controller';

@Module({
  controllers: [ColegiosController],
  providers: [ColegiosService],
})
export class ColegiosModule {}
