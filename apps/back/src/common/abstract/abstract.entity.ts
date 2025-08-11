import { PrimaryGeneratedColumn, DeleteDateColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class AbstractEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // timestamps
    @DeleteDateColumn()
    deletedAt: Date | null;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
