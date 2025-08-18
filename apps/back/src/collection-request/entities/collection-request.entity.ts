import { AbstractEntity } from "src/common/abstract/abstract.entity";
import { WasteStatus } from "src/enums/wasteStatus.enum";
import { WasteType } from "src/enums/wasteType.enum";
import { User } from "src/users/users/entities/user.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class CollectionRequest extends AbstractEntity {

    @Column()
    address: string;

    @Column()
    wasteType: WasteType;

    @Column()
    date: Date;

    @Column({default: WasteStatus.PENDING})
    status: WasteStatus;

    @Column({default: false})
    periodically: boolean;

    @ManyToOne(() => User, user => user.collectionRequests)
    user: User;

}