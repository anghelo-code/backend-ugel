import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUgelDto } from './dto/create-ugel.dto';
import { UpdateUgelDto } from './dto/update-ugel.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UgelService {
  constructor(private prismaService: PrismaService) { }

  async create(createUgelDto: CreateUgelDto) {

    try {
      const ugel = await this.prismaService.ugel.create({
        data: {
          ...createUgelDto
        }
      })
      return `Ugel with name ${ugel.nombre} has been created`;
    }
    catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new ConflictException(`Ugel with name ${createUgelDto.nombre} alreasy exists`)
        }
      }
    }

  }

  findAll() {
    return this.prismaService.ugel.findMany();
  }

  async findOne(id: number) {
    const ugel = await this.prismaService.ugel.findUnique({
      where: {
        id: id
      }
    })
    if (!ugel) {
      throw new NotFoundException(`Ugel with id ${id} not found`);
    }

    return ugel
  }

  async update(id: number, updateUgelDto: UpdateUgelDto) {
    const ugel = await this.prismaService.ugel.update({
      where: {
        id: id
      },
      data: updateUgelDto
    })
    if (!ugel) {
      throw new NotFoundException(`Ugel with id ${id} not found`);
    }

    return ugel
  }

  async remove(id: number) {
    const ugel = await this.prismaService.ugel.delete({
      where: {
        id: id
      }
    })
    if (!ugel) {
      throw new NotFoundException(`Ugel with id ${id} not found`);
    }

    return `Ugel with id ${id} has been deleted`;
  }
}
