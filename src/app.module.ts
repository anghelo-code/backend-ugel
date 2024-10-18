import { Module } from '@nestjs/common';
import { UgelModule } from './ugel/ugel.module';
import { ColegiosModule } from './colegios/colegios.module';
import { GradosModule } from './grados/grados.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UgelModule, ColegiosModule, GradosModule, AuthModule],
  providers: [PrismaService],
})
export class AppModule { }
