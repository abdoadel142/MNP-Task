import { Body, Controller, Get, Post,Delete, Req, Request, UseGuards} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRecipientDto } from './Dto/createRecipient.dto';
import { RecipientService } from './recipient.service';
@ApiTags("recipient")
@Controller("recipient")
export class RecipientController {
  constructor(private readonly recipientService: RecipientService) {}

  @Get()
  getHello(): string {
    return this.recipientService.getHello();
  }

  @Post()
  createRecipient(@Body() createRecipientDto :CreateRecipientDto){
    return this.recipientService.create(createRecipientDto);
  }
}