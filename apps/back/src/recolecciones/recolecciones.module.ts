import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recoleccion } from './entities/recoleccion.entity';
import { RecoleccionesService } from './recolecciones.service';
import { RecoleccionesController } from './recolecciones.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Recoleccion])],
  providers: [RecoleccionesService],
  controllers: [RecoleccionesController],
})
export class RecoleccionesModule {}