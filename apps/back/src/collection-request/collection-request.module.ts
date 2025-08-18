import { Module } from '@nestjs/common';
import { CollectionRequestService } from './collection-request.service';
import { CollectionRequestController } from './collection-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionRequest } from './entities/collection-request.entity';
import { UsersModule } from 'src/users/users/users.module';


@Module({
  imports: [TypeOrmModule.forFeature([CollectionRequest]), UsersModule],
  controllers: [CollectionRequestController],
  providers: [CollectionRequestService],
  exports: [CollectionRequestService]
})
export class CollectionRequestModule {}
