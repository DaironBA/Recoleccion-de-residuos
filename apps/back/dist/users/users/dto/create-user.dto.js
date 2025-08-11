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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const messages_enum_1 = require("../../../common/enums/messages.enum");
const translations_files_enum_1 = require("../../../common/enums/translations-files.enum");
const fields_translation_1 = require("../../../common/helpers/fields-translation");
class CreateUserDto {
    name;
    address;
    email;
    phone;
    password;
    age;
    totalPoints;
    documentNumber;
    documentType;
    roleId;
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsString)({}),
    (0, class_validator_1.IsNotEmpty)({ message: (0, messages_enum_1.generateMessage)(messages_enum_1.MessagesEnum.EMPTY_FIELD, { field: (0, fields_translation_1.fieldsTranslation)(translations_files_enum_1.TranslationsFilesEnum.USER_FIELDS, 'name') }) }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: (0, messages_enum_1.generateMessage)(messages_enum_1.MessagesEnum.INVALID_STRING, { field: (0, fields_translation_1.fieldsTranslation)(translations_files_enum_1.TranslationsFilesEnum.USER_FIELDS, 'address') }) }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: (0, messages_enum_1.generateMessage)(messages_enum_1.MessagesEnum.INVALID_EMAIL, { field: (0, fields_translation_1.fieldsTranslation)(translations_files_enum_1.TranslationsFilesEnum.USER_FIELDS, 'email') }) }),
    (0, class_validator_1.IsNotEmpty)({ message: (0, messages_enum_1.generateMessage)(messages_enum_1.MessagesEnum.EMPTY_FIELD, { field: (0, fields_translation_1.fieldsTranslation)(translations_files_enum_1.TranslationsFilesEnum.USER_FIELDS, 'email') }) }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: (0, messages_enum_1.generateMessage)(messages_enum_1.MessagesEnum.INVALID_NUMBER, { field: (0, fields_translation_1.fieldsTranslation)(translations_files_enum_1.TranslationsFilesEnum.USER_FIELDS, 'phone') }) }),
    (0, class_validator_1.IsNotEmpty)({ message: (0, messages_enum_1.generateMessage)(messages_enum_1.MessagesEnum.EMPTY_FIELD, { field: (0, fields_translation_1.fieldsTranslation)(translations_files_enum_1.TranslationsFilesEnum.USER_FIELDS, 'phone') }) }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: (0, messages_enum_1.generateMessage)(messages_enum_1.MessagesEnum.INVALID_STRING, { field: (0, fields_translation_1.fieldsTranslation)(translations_files_enum_1.TranslationsFilesEnum.USER_FIELDS, 'password') }) }),
    (0, class_validator_1.IsNotEmpty)({ message: (0, messages_enum_1.generateMessage)(messages_enum_1.MessagesEnum.EMPTY_FIELD, { field: (0, fields_translation_1.fieldsTranslation)(translations_files_enum_1.TranslationsFilesEnum.USER_FIELDS, 'password') }) }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: (0, messages_enum_1.generateMessage)(messages_enum_1.MessagesEnum.INVALID_NUMBER, { field: (0, fields_translation_1.fieldsTranslation)(translations_files_enum_1.TranslationsFilesEnum.USER_FIELDS, 'age') }) }),
    (0, class_validator_1.IsNotEmpty)({ message: (0, messages_enum_1.generateMessage)(messages_enum_1.MessagesEnum.EMPTY_FIELD, { field: (0, fields_translation_1.fieldsTranslation)(translations_files_enum_1.TranslationsFilesEnum.USER_FIELDS, 'age') }) }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: (0, messages_enum_1.generateMessage)(messages_enum_1.MessagesEnum.INVALID_NUMBER, { field: (0, fields_translation_1.fieldsTranslation)(translations_files_enum_1.TranslationsFilesEnum.USER_FIELDS, 'totalPoints') }) }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "totalPoints", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: (0, messages_enum_1.generateMessage)(messages_enum_1.MessagesEnum.INVALID_NUMBER, { field: (0, fields_translation_1.fieldsTranslation)(translations_files_enum_1.TranslationsFilesEnum.USER_FIELDS, 'documentNumber') }) }),
    (0, class_validator_1.IsNotEmpty)({ message: (0, messages_enum_1.generateMessage)(messages_enum_1.MessagesEnum.EMPTY_FIELD, { field: (0, fields_translation_1.fieldsTranslation)(translations_files_enum_1.TranslationsFilesEnum.USER_FIELDS, 'documentNumber') }) }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "documentNumber", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: (0, messages_enum_1.generateMessage)(messages_enum_1.MessagesEnum.INVALID_FIELD, { field: (0, fields_translation_1.fieldsTranslation)(translations_files_enum_1.TranslationsFilesEnum.USER_FIELDS, 'documentType') }) }),
    (0, class_validator_1.IsNotEmpty)({ message: (0, messages_enum_1.generateMessage)(messages_enum_1.MessagesEnum.EMPTY_FIELD, { field: (0, fields_translation_1.fieldsTranslation)(translations_files_enum_1.TranslationsFilesEnum.USER_FIELDS, 'documentType') }) }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "documentType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: (0, messages_enum_1.generateMessage)(messages_enum_1.MessagesEnum.INVALID_FIELD, { field: (0, fields_translation_1.fieldsTranslation)(translations_files_enum_1.TranslationsFilesEnum.USER_FIELDS, 'roleId') }) }),
    (0, class_validator_1.IsNotEmpty)({ message: (0, messages_enum_1.generateMessage)(messages_enum_1.MessagesEnum.EMPTY_FIELD, { field: (0, fields_translation_1.fieldsTranslation)(translations_files_enum_1.TranslationsFilesEnum.USER_FIELDS, 'roleId') }) }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "roleId", void 0);
//# sourceMappingURL=create-user.dto.js.map