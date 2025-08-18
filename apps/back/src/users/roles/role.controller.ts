import { Controller } from '@nestjs/common';
import { AbstractController } from 'src/common/abstract/abstract.controller';
import { Role } from './entities/role.entity';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('roles')
export class RoleController extends AbstractController<Role, CreateRoleDto, UpdateRoleDto> {
  constructor(protected readonly service: RoleService) {
    super(service);
  }
}
