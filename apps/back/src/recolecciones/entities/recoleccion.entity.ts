import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/users/entities/user.entity';

@Entity()
export class Recoleccion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

  @Column()
  fecha: string;

  @Column()
  puntos: number;

  @ManyToOne(() => User, user => user.recolecciones)
  usuario: User;
}