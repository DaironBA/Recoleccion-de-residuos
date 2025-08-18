import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Query } from '@nestjs/common';
import { AbstractEntity } from './abstract.entity';
import { AbstractService } from './abstract.service';

@Controller('/')
export abstract class AbstractController <
  T extends AbstractEntity,
  CreateDto extends Partial<T> = Partial<T>,
  UpdateDto extends Partial<T> = Partial<T>
> {
  constructor(protected readonly abstractService: AbstractService<T, CreateDto, UpdateDto>) {}

  @Post()
  create(@Body() createUserDto: CreateDto) {
    return this.abstractService.create(createUserDto);
  }

  @Get()
  findAll(@Query() query: any) {
    return this.abstractService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.abstractService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateDto) {
    return this.abstractService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.abstractService.remove(+id);
  }
}
