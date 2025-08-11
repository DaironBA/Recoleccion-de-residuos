import { AbstractEntity } from './abstract.entity';
import { AbstractService } from './abstract.service';
export declare abstract class AbstractController<T extends AbstractEntity, CreateDto extends Partial<T>, UpdateDto extends Partial<T>> {
    protected readonly abstractService: AbstractService<T, CreateDto, UpdateDto>;
    constructor(abstractService: AbstractService<T, CreateDto, UpdateDto>);
    create(createUserDto: CreateDto): Promise<T>;
    findAll(): Promise<T[]>;
    findOne(id: string): Promise<T>;
    update(id: string, updateUserDto: UpdateDto): Promise<T>;
    remove(id: string): Promise<void>;
}
