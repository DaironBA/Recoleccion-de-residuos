
import { AbstractEntity } from "src/common/abstract/abstract.entity";
import { Column, Entity } from "typeorm";
import { Exclude } from 'class-transformer';
import { Recoleccion } from '../../../recolecciones/entities/recoleccion.entity';
import { OneToMany } from 'typeorm';

@Entity()
export class User extends AbstractEntity {
    @Column({ length: 500 })
    name: string;

    @Column({ nullable: true })
    address: string;

    @Column()
    email: string;

    @Column({nullable: true})
    phone: string;

    @Column({ type: 'numeric', nullable: true })
    age: number;

    @Exclude()
    @Column()
    password: string;

    @Column({ type: 'numeric', default: 0 })
    totalPoints: number;

    @Column({ nullable: true })
    documentNumber: number;

    @Column({ type: 'smallint', default: 1 })
    documentType: number;

    @Column({ type: 'smallint', default: 1 })
    roleId: number;

    @OneToMany(() => Recoleccion, reco => reco.usuario)
    recolecciones: Recoleccion[];
}
