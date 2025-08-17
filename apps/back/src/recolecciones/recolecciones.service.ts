import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recoleccion } from './entities/recoleccion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecoleccionesService {
  constructor(
    @InjectRepository(Recoleccion)
    private readonly recoRepo: Repository<Recoleccion>,
  ) {}

  async obtenerPorUsuario(userId: number): Promise<Recoleccion[]> {
    return this.recoRepo.find({
      where: { usuario: { id: userId } },
      relations: ['usuario'], // opcional, para traer datos del usuario
    });
  }
}