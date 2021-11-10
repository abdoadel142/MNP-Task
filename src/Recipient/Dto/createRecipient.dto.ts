import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEnum } from 'class-validator';
import { Operator } from "src/Utiles/operator.utiles";

export class CreateRecipientDto{

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(Operator)
    operator:string;

    


}