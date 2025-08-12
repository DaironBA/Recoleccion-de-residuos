import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, Not, ILike } from 'typeorm';
import { fieldsTranslation } from 'src/common/helpers/fields-translation';
import { AbstractEntity } from './abstract.entity'; // Asegúrate de que esté correctamente importada
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export abstract class AbstractService<T extends AbstractEntity, CreateDto extends Partial<T>, UpdateDto extends Partial<T>> {

  constructor(
    @InjectRepository(AbstractEntity) protected repository: Repository<T>,
  ) {}

  // Crear un nuevo registro
  async create(createDto: CreateDto): Promise<T> {
    const newEntity = this.repository.create(createDto as unknown as import('typeorm').DeepPartial<T>);
    return this.repository.save(newEntity);
  }

  // Obtener todos los registros
  async findAll(params: any): Promise<T[]> {
    const filters = this.buildFilters(params);
    return this.repository.find({ where: filters });
  }

  buildFilters(params: any): any {
    const filters: any = {};
    for (const key in params) {
      if (params[key] !== undefined && params[key] !== null) {
        if(key.includes('[ilike]')) {
          const field = key.replace('[ilike]', '');
          filters[field] = ILike(`%${params[key]}%`);
        }else {
          filters[key] = params[key];
        }
      }
    }
    return filters;
  }

  // Buscar un registro por ID
  async findOne(id: number): Promise<T> {
    const entity = await this.repository.findOne({ where: { id } as any });
    if (!entity) {
      throw new NotFoundException('El registro que busca no se encuentra');
    }
    return entity;
  }

  // Actualizar un registro por ID
  async update(id: number, updateDto: UpdateDto): Promise<T> {
    let entity = await this.repository.findOne({ where: { id } as any });
    if (!entity) {
      throw new NotFoundException('El registro que intenta actualizar no se encuentra');
    }
    entity = { ...entity, ...updateDto };
    return this.repository.save(entity);
  }

  // Eliminar un registro por ID (soft delete)
  async remove(id: number): Promise<void> {
    const entity = await this.repository.findOne({ where: { id } as any });
    if (!entity) {
      throw new NotFoundException('El registro que intenta eliminar no se encuentra');
    }
    await this.repository.softDelete(id);
    return;
  }

  // Validar que un campo no esté duplicado (según el nombre del campo y su valor)
  async validateDuplicatedField(field: string, value: string | number | null, id?: number, translationFile?: string): Promise<void> {
    let params: any = {
      [field]: value,
    };

    if (id) {
      params.id = Not(id); // Excluye el ID si se proporciona
    }

    const duplicatedField = await this.repository.exists({ where: params });
    if (duplicatedField) {
      const fieldName = translationFile ? fieldsTranslation(translationFile, field) : field;
      throw new BadRequestException(
        `El valor del campo '${fieldName}' ya se encuentra en uso`,
      );
    }
  }
}
