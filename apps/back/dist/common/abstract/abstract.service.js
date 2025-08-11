"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const fields_translation_1 = require("../helpers/fields-translation");
const abstract_entity_1 = require("./abstract.entity");
const typeorm_2 = require("@nestjs/typeorm");
let AbstractService = class AbstractService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async create(createDto) {
        const newEntity = this.repository.create(createDto);
        return this.repository.save(newEntity);
    }
    async findAll() {
        return this.repository.find();
    }
    async findOne(id) {
        const entity = await this.repository.findOne({ where: { id } });
        if (!entity) {
            throw new common_1.NotFoundException('El registro que busca no se encuentra');
        }
        return entity;
    }
    async update(id, updateDto) {
        let entity = await this.repository.findOne({ where: { id } });
        if (!entity) {
            throw new common_1.NotFoundException('El registro que intenta actualizar no se encuentra');
        }
        entity = { ...entity, ...updateDto };
        return this.repository.save(entity);
    }
    async remove(id) {
        const entity = await this.repository.findOne({ where: { id } });
        if (!entity) {
            throw new common_1.NotFoundException('El registro que intenta eliminar no se encuentra');
        }
        await this.repository.softDelete(id);
        return;
    }
    async validateDuplicatedField(field, value, id, translationFile) {
        let params = {
            [field]: value,
        };
        if (id) {
            params.id = (0, typeorm_1.Not)(id);
        }
        const duplicatedField = await this.repository.exists({ where: params });
        if (duplicatedField) {
            const fieldName = translationFile ? (0, fields_translation_1.fieldsTranslation)(translationFile, field) : field;
            throw new common_1.BadRequestException(`El valor del campo '${fieldName}' ya se encuentra en uso`);
        }
    }
};
exports.AbstractService = AbstractService;
exports.AbstractService = AbstractService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(abstract_entity_1.AbstractEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AbstractService);
//# sourceMappingURL=abstract.service.js.map