import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/users/entities/user.entity';
import { AbstractEntity } from 'src/common/abstract/abstract.entity';

@Entity()
export class Recoleccion extends AbstractEntity {

  @Column()
  tipo: string;

  @Column({nullable: true})
  fecha: Date;

  @Column({ default: 0})
  kilos: number;

  @Column()
  puntos: number;

  @ManyToOne(() => User, user => user.recolecciones)
  usuario: User;
}