import { IsEmail, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, minLength, MinLength } from "class-validator";
import { generateMessage, MessagesEnum } from "src/common/enums/messages.enum";
import { TranslationsFilesEnum } from "src/common/enums/translations-files.enum";
import { fieldsTranslation } from "src/common/helpers/fields-translation";

export class CreateUserDto {
    
    @IsString({})
    @IsNotEmpty({message: generateMessage(MessagesEnum.EMPTY_FIELD, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'name')})})
    name: string;

    @IsString({message: generateMessage(MessagesEnum.INVALID_STRING, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'address')})})
    @IsOptional()
    address?: string;

    @IsEmail({}, {message: generateMessage(MessagesEnum.INVALID_EMAIL, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'email')})})
    @IsNotEmpty({message: generateMessage(MessagesEnum.EMPTY_FIELD, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'email')})})
    email: string;

    @IsNumber({}, {message: generateMessage(MessagesEnum.INVALID_NUMBER, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'phone')})})
    @IsOptional()
    phone: string;

    @IsString({message: generateMessage(MessagesEnum.INVALID_STRING, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'password')})})
    @IsNotEmpty({message: generateMessage(MessagesEnum.EMPTY_FIELD, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'password')})})
    @MinLength(8, {message: generateMessage(MessagesEnum.MIN_LENGTH, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'password'), minLength: '8'})})
    password: string;

    @IsNumber({}, {message: generateMessage(MessagesEnum.INVALID_NUMBER, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'age')})})
    @IsOptional()
    age: number;

    @IsNumber({}, {message: generateMessage(MessagesEnum.INVALID_NUMBER, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'documentNumber')})})
    @IsOptional()
    documentNumber: number;

    @IsNumber({}, {message: generateMessage(MessagesEnum.INVALID_FIELD, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'documentType')})})
    @IsOptional()
    documentType: number;

    @IsNumber({}, {message: generateMessage(MessagesEnum.INVALID_FIELD, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'roleId')})})
    @IsOptional()
    roleId: number;
}
