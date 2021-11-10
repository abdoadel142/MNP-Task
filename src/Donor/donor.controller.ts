import { Body, Controller, Get, Post,Delete, Req, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DonorService } from './donor.service';
import { CreateDonorDto } from './Dto/createDonor.dto';
@ApiTags("donor")
@Controller("donor")
export class DonorController {
  constructor(private readonly donorService: DonorService) {}

  @Get()
  getHello(): string {
    return this.donorService.getHello();
  }

  @Post()
  createDonor(@Body() createDonorDto :CreateDonorDto){
    return this.donorService.create(createDonorDto);
  }
  

}


