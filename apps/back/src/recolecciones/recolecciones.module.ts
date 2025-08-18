import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recoleccion } from './entities/recoleccion.entity';
import { RecoleccionesService } from './recolecciones.service';
import { RecoleccionesController } from './recolecciones.controller';
import { CollectionRequestModule } from 'src/collection-request/collection-request.module';
import { UsersModule } from 'src/users/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Recoleccion]), CollectionRequestModule, UsersModule],
  providers: [RecoleccionesService],
  controllers: [RecoleccionesController],
})
export class RecoleccionesModule {}