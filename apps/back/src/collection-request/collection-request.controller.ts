import { Controller } from '@nestjs/common';
import { AbstractController } from 'src/common/abstract/abstract.controller';
import { CollectionRequest } from './entities/collection-request.entity';
import { CollectionRequestService } from './collection-request.service';
import { CreateCollectionRequestDto } from './dto/create-collection-request.dto';
import { UpdateCollectionRequestDto } from './dto/update-collection-request.dto';

@Controller('collection-request')
export class CollectionRequestController extends AbstractController<CollectionRequest, CreateCollectionRequestDto, UpdateCollectionRequestDto> {
  constructor(private readonly service: CollectionRequestService) {
    super(service);
  }
}
