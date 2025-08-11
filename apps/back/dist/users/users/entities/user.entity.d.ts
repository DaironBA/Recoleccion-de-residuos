import { AbstractEntity } from "src/common/abstract/abstract.entity";
export declare class User extends AbstractEntity {
    name: string;
    address: string;
    email: string;
    phone: string;
    age: number;
    password: string;
    totalPoints: number;
    documentNumber: number;
    documentType: number;
    roleId: number;
}
