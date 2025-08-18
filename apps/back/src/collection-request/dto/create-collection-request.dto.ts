import { IsBoolean, IsDate, IsEnum, IsNumber, IsString } from 'class-validator';
import { WasteStatus } from 'src/enums/wasteStatus.enum';
import { WasteType } from 'src/enums/wasteType.enum';

export class CreateCollectionRequestDto {
    @IsString()
    address: string;
    @IsNumber()
    @IsEnum(WasteType)
    wasteType: WasteType;

    @IsDate()
    date: Date;

    @IsNumber()
    @IsEnum(WasteStatus)
    status: WasteStatus;

    @IsBoolean()
    periodically: boolean;

    @IsNumber()
    userId: number;
}