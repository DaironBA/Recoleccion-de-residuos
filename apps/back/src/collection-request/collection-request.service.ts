import { Injectable } from '@nestjs/common';
import { CollectionRequest } from './entities/collection-request.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractService } from 'src/common/abstract/abstract.service';
import { CreateCollectionRequestDto } from './dto/create-collection-request.dto';
import { UsersService } from 'src/users/users/users.service';

@Injectable()
export class CollectionRequestService extends AbstractService<CollectionRequest, CreateCollectionRequestDto> {

  constructor(
    @InjectRepository(CollectionRequest) protected repository: Repository<CollectionRequest>,
    protected readonly userService: UsersService
  ) {
    super(repository);
  }

    async create(createDto: CreateCollectionRequestDto): Promise<CollectionRequest> {
      const user = await this.userService.findOne(createDto.userId);
      const newEntity = this.repository.create(createDto as unknown as import('typeorm').DeepPartial<CollectionRequest>);
      newEntity.user = user;
      return this.repository.save(newEntity);
  }
  
}
