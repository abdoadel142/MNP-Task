import { Body, Controller, Get, Post, Put, Req, Param, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Donor } from 'src/Donor/entities/donor.entity';
import { AuthGuard } from './auth.guard';
import { Organization } from './Decorateros/request.decorator';
import { RequestDto } from './Dto/request.dto';
import { RequestService } from './request.service';
@ApiTags("Request")
@UseGuards(AuthGuard)
@Controller("request")
export class RequestController {
  constructor(private readonly requestService: RequestService) {}


  @Get()
  getAllRequest(@Organization() organization){
    return this.requestService.getAllRequest(organization);
  }

  @Get(':id')
  getRequest(@Param('id') id: string, @Organization() organization){
    return this.requestService.getRequest(+id, organization);
  }

  @Post()
  portRequest(@Body() requestDto :RequestDto, @Organization() organization){
    return this.requestService.portRequest(requestDto, organization);
  }

  @Put(':id')
  acceptRequest(@Param('id') id: string, @Organization() organization){
    return this.requestService.acceptRequest(+id, organization);
  }

  @Put(':id')
  rejectRequest(@Param('id') id: string, @Organization() organization){
    return this.requestService.rejectRequest(+id, organization);
  }
}