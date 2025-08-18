import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNumber, IsOptional } from 'class-validator';
import { generateMessage, MessagesEnum } from 'src/common/enums/messages.enum';
import { fieldsTranslation } from 'src/common/helpers/fields-translation';
import { TranslationsFilesEnum } from 'src/common/enums/translations-files.enum';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    
    @IsNumber({}, {message: generateMessage(MessagesEnum.INVALID_NUMBER, {field: fieldsTranslation(TranslationsFilesEnum.USER_FIELDS, 'totalPoints')})})
    @IsOptional()
    totalPoints: number;

}
