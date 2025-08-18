// src/seed/role.seeder.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';

@Injectable()
export class RoleSeeder {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async seed() {
   const roles = [
      { id: 1, name: 'Cliente', description: 'Rol del usuario que solicita la recolección de residuos' },
      { id: 2, name: 'Recolector', description: 'Rol recolector' },
      { id: 3, name: 'Admin', description: 'Rol administrador' },
    ];

    // Recorre los roles y los guarda, actualiza si es necesario
    for (const role of roles) {
      // Busca si el rol ya existe por `id` o `name`
      let existingRole = await this.roleRepository.findOne({ where: { id: role.id } });

      if (!existingRole) {
        // Si no existe, lo crea
        console.log(`Creando rol ${role.name}`);
        await this.roleRepository.save(role);
      } else {
        // Si existe, lo actualiza
        console.log(`Actualizando rol ${role.name}`);
        await this.roleRepository.save({ ...existingRole, ...role });
      }
    }

    console.log('Roles predeterminados insertados o actualizados!');
  }
}
