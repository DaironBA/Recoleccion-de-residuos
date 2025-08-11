import { Repository } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
export declare abstract class AbstractService<T extends AbstractEntity, CreateDto extends Partial<T>, UpdateDto extends Partial<T>> {
    protected repository: Repository<T>;
    constructor(repository: Repository<T>);
    create(createDto: CreateDto): Promise<T>;
    findAll(): Promise<T[]>;
    findOne(id: number): Promise<T>;
    update(id: number, updateDto: UpdateDto): Promise<T>;
    remove(id: number): Promise<void>;
    validateDuplicatedField(field: string, value: string | number | null, id?: number, translationFile?: string): Promise<void>;
}
