import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, Query } from '@nestjs/common';
import { AbstractEntity } from './abstract.entity';
import { AbstractService } from './abstract.service';

@Controller('/')
export abstract class AbstractController <T extends AbstractEntity, CreateDto extends Partial<T>, UpdateDto extends Partial<T>> {
  constructor(protected readonly abstractService: AbstractService<T, CreateDto, UpdateDto>) {}

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.abstractService.create(createDto);
  }

  @Get()
  findAll(@Query() query: any) {
    return this.abstractService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.abstractService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
    return this.abstractService.update(+id, updateDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.abstractService.remove(+id);
  }
}
