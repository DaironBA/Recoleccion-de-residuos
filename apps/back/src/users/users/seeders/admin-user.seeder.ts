import { Injectable } from "@nestjs/common";
import { User } from "../entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcryptjs from 'bcryptjs';
import { CreateUserDto } from "../dto/create-user.dto";


@Injectable()
export class AdminUserSeeder {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async seed() {

        const adminUser = {
            name: 'Admin User',
            address: '123 Admin Street, Admin City',
            email: 'admin@admin.com',
            phone: '1234567890',
            password: '12345678',
            age: 30,
            documentNumber: 123456789,
            documentType: 1,
            roleId: 3,
        };

        adminUser.password = await bcryptjs.hash(adminUser.password, 10);

        // Verifica si ya existe un usuario admin
        const existingAdmin = await this.userRepository.findOne({ where: { email: adminUser.email } });

        if (!existingAdmin) {
        // Si no existe, crea el usuario admin
        await this.userRepository.save(adminUser);
            console.log('Usuario Admin creado correctamente!');
        } else {
            console.log('El usuario Admin ya existe.');
        }
    }
}
