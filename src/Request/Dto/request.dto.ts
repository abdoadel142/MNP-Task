import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsPhoneNumber } from "class-validator";
import { Operator } from "src/Utiles/operator.utiles";

export class RequestDto{

    @ApiProperty()
    @IsNotEmpty()
    @IsPhoneNumber()
    mobileNumber: string;

    @ApiProperty()
    @IsEnum(Operator)
    donor: string;

    @ApiProperty()
    @IsEnum(Operator)
    recipient: string;

    @ApiProperty()
    status: string="pending";



    
}