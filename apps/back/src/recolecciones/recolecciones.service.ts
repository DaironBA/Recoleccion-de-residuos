import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recoleccion } from './entities/recoleccion.entity';
import { Repository } from 'typeorm';
import { CollectionRequestService } from 'src/collection-request/collection-request.service';
import { WasteStatus } from 'src/enums/wasteStatus.enum';
import { WasteType } from 'src/enums/wasteType.enum';
import { addMonths, addWeeks } from 'date-fns';
import { CreateCollectionRequestDto } from 'src/collection-request/dto/create-collection-request.dto';
import { UsersService } from 'src/users/users/users.service';

@Injectable()
export class RecoleccionesService {
  constructor(
    @InjectRepository(Recoleccion)
    private readonly recoRepo: Repository<Recoleccion>,
    protected readonly collectionRequestService: CollectionRequestService,
    protected readonly userService: UsersService
  ) {}

  async obtenerPorUsuario(userId: number): Promise<Recoleccion[]> {
    return this.recoRepo.find({
      where: { usuario: { id: userId } },
      relations: ['usuario'], // opcional, para traer datos del usuario
    });
  }

  async registrarRecoleccion(idSolicitud: number, kilos: number) {
    const solicitud = (await this.collectionRequestService.findAll({id: idSolicitud, relations: 'user'}))[0];

    const nuevaRecoleccion = this.recoRepo.create({ 
      kilos: kilos,
      tipo: solicitud.wasteType,
      fecha: new Date(),
      puntos: this.calcularPuntos(solicitud.wasteType, kilos),
      usuario: solicitud.user
    } as unknown as import('typeorm').DeepPartial<Recoleccion>);

    await this.collectionRequestService.update(idSolicitud, {status: WasteStatus.COMPLETED});
    if (solicitud.periodically) {
      this.crearNuevaSolicitudPeriodica(solicitud);
    }
    await this.sumarPuntos(nuevaRecoleccion);
    return this.recoRepo.save(nuevaRecoleccion);
  }

  private sumarPuntos(recoleccion: Recoleccion) {
    const puntos = recoleccion.puntos || 0;
    const usuario = recoleccion.usuario;
    usuario.totalPoints += puntos;
    return this.userService.update(usuario.id, usuario);
  }

  private calcularPuntos(tipo: WasteType, kilos: number): number {
    const factor = tipo === WasteType.RECYCLABLE ? 1 : tipo === WasteType.HAZARDOUS ? 2 : 0;
    console.log(factor, kilos);
    return factor * kilos;
  }

 private async crearNuevaSolicitudPeriodica(solicitud: any) {
    let nuevaFecha: Date;
    // Dependiendo del tipo de desecho (wasteType), calculamos la nueva fecha
    if (solicitud.wasteType === WasteType.RECYCLABLE) {
      // Si el tipo es inorganico, sumamos 2 semanas
      nuevaFecha = addWeeks(new Date(solicitud.date), 2);
    } else if (solicitud.wasteType === WasteType.HAZARDOUS) {
      // Si el tipo es peligroso, sumamos un mes
      nuevaFecha = addMonths(new Date(solicitud.date), 1);
    } else {
      return; // Si el tipo no es 2 ni 3, no hacemos nada
    }

    // Crear una nueva solicitud con la nueva fecha
    const nuevaSolicitud: CreateCollectionRequestDto = {
      address: solicitud.address,
      wasteType: solicitud.wasteType,
      date: nuevaFecha,
      status: WasteStatus.PENDING,
      periodically: true,
      userId: solicitud.user.id,
    };

    await this.collectionRequestService.create(nuevaSolicitud);

    console.log('Nueva solicitud periódica creada:', nuevaSolicitud);
  }
}