
import { AbstractEntity } from "src/common/abstract/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Role extends AbstractEntity {
    @Column({ length: 500 })
    name: string;

    @Column({ nullable: true })
    description: string;
}
