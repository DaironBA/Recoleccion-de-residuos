import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleService } from './role.service';
import { Role } from './entities/role.entity';
import { RoleController } from './role.controller';
import { RoleSeeder } from './seeders/role.seeder';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RoleController],
  providers: [RoleService, RoleSeeder],
})
export class RoleModule {}
