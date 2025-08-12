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
    @IsNotEmpty({message: generateMessage(MessagesEnum.EMPTY_FIELD, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'phone')})})
    phone: string;

    @IsString({message: generateMessage(MessagesEnum.INVALID_STRING, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'password')})})
    @IsNotEmpty({message: generateMessage(MessagesEnum.EMPTY_FIELD, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'password')})})
    @MinLength(8, {message: generateMessage(MessagesEnum.MIN_LENGTH, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'password'), minLength: '8'})})
    password: string;

    @IsNumber({}, {message: generateMessage(MessagesEnum.INVALID_NUMBER, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'age')})})
    @IsNotEmpty({message: generateMessage(MessagesEnum.EMPTY_FIELD, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'age')})})
    age: number;

    @IsNumber({}, {message: generateMessage(MessagesEnum.INVALID_NUMBER, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'totalPoints')})})
    @IsOptional()
    totalPoints: number;

    @IsNumber({}, {message: generateMessage(MessagesEnum.INVALID_NUMBER, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'documentNumber')})})
    @IsNotEmpty({message: generateMessage(MessagesEnum.EMPTY_FIELD, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'documentNumber')})})
    documentNumber: number;

    @IsNumber({}, {message: generateMessage(MessagesEnum.INVALID_FIELD, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'documentType')})})
    @IsNotEmpty({message: generateMessage(MessagesEnum.EMPTY_FIELD, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'documentType')})})
    documentType: number;

    @IsNumber({}, {message: generateMessage(MessagesEnum.INVALID_FIELD, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'roleId')})})
    @IsNotEmpty({message: generateMessage(MessagesEnum.EMPTY_FIELD, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'roleId')})})
    roleId: number;
}
