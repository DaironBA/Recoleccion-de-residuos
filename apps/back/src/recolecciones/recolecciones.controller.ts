import { Controller, Get, Query } from '@nestjs/common';
import { RecoleccionesService } from './recolecciones.service';

@Controller('recolecciones')
export class RecoleccionesController {
  constructor(private readonly recoService: RecoleccionesService) {}

  @Get()
  async getRecolecciones(@Query('userId') userId: string) {
    console.log('userId recibido:', userId);  // Para debug
    return this.recoService.obtenerPorUsuario(Number(userId));
  }
}