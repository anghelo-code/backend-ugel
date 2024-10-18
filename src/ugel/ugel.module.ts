import { Module } from '@nestjs/common';
import { UgelService } from './ugel.service';
import { UgelController } from './ugel.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UgelController],
  providers: [UgelService, PrismaService],
})
export class UgelModule { }
