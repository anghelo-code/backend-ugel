import { Injectable } from '@nestjs/common';
import { CreateUgelDto } from './dto/create-ugel.dto';
import { UpdateUgelDto } from './dto/update-ugel.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UgelService {
  constructor(private prismaService: PrismaService) { }

  create(createUgelDto: CreateUgelDto) {
    return 'This action adds a new ugel';
  }

  findAll() {
    return `This action returns all ugel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ugel`;
  }

  update(id: number, updateUgelDto: UpdateUgelDto) {
    return `This action updates a #${id} ugel`;
  }

  remove(id: number) {
    return `This action removes a #${id} ugel`;
  }
}
