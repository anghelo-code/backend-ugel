import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UgelService } from './ugel.service';
import { CreateUgelDto } from './dto/create-ugel.dto';
import { UpdateUgelDto } from './dto/update-ugel.dto';

@Controller('ugel')
export class UgelController {
  constructor(private readonly ugelService: UgelService) {}

  @Post()
  create(@Body() createUgelDto: CreateUgelDto) {
    return this.ugelService.create(createUgelDto);
  }

  @Get()
  findAll() {
    return this.ugelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ugelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUgelDto: UpdateUgelDto) {
    return this.ugelService.update(+id, updateUgelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ugelService.remove(+id);
  }
}
