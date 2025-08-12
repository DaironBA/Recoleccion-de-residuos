import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users/users.service';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async login(loginDto: LoginDto) {
        const user = (await this.userService.findAll({email: loginDto.email})).shift();
        if (!user) {
            throw new UnauthorizedException('Correo incorrecto');
        }
        const isPasswordValid = await bcryptjs.compare(loginDto.password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Contraseña incorrecta');
        }
        return 'Login exitoso';
    }

}
