import { PartialType } from '@nestjs/mapped-types';
import { CreateCollectionRequestDto } from './create-collection-request.dto';

export class UpdateCollectionRequestDto extends PartialType(CreateCollectionRequestDto) {}