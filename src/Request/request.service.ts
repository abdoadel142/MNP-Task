import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Donor } from 'src/Donor/entities/donor.entity';
import { Recipient } from 'src/Recipient/entities/recipient.entity';
import { HttpExceptionFilter } from 'src/Utiles/http.exception.filters';
import { Repository } from 'typeorm';
import { RequestDto } from './Dto/request.dto';
import { Request } from './entities/request.entity';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request)
    private requestRepository: Repository<Request>,
    @InjectRepository(Donor)
    private donorRepository: Repository<Donor>,
    @InjectRepository(Recipient)
    private recipientRepository: Repository<Recipient>
  ) {}


  async getRequest(id:number, organization:string ){
    try{
      const foundRequest = await this.requestRepository.findOne(id); 
      return foundRequest;
    }catch(error){
      throw new HttpExceptionFilter();
    }
  }

  async getAllRequest(organization:string ){
    try{
      const donor = await this.donorRepository.findOne({operator:organization});
      const recipient = await this.recipientRepository.findOne({operator:organization});

      if (donor|| recipient){
        const foundRequests = await this.requestRepository.find({ where:[
          {donor:donor},
          {recipient: recipient}
      ], }); 
      return foundRequests;
      }
      const foundRequests = await this.requestRepository.find({
        status:"accepted"
      }); 
      return foundRequests;
    }catch(error){
      throw new HttpExceptionFilter();

    }
  }

  async portRequest(requestDto:RequestDto, organization:string){
    try{
      const donor = await this.donorRepository.findOne({operator:organization});
      const recipient = await this.recipientRepository.findOne({operator:requestDto.recipient});
  
      const foundRequest = await this.requestRepository.findOne({mobile_number:requestDto.mobileNumber});
      if(!foundRequest){
        const newRequest: Request = this.requestRepository.create(
          {recipient:recipient,donor:donor,mobile_number:requestDto.mobileNumber}
        );
        await this.requestRepository.save(newRequest);
        return newRequest; 
      }
      return false;
    }catch(error){
      throw new HttpExceptionFilter()
    }
  }

  async acceptRequest(id: number, organization: string){
    try{
      const donor = await this.donorRepository.findOne({operator:organization});
      let foundRequest = await this.requestRepository.findOne({id:id, donor:donor});
      if(foundRequest){
        await this.requestRepository.update(id, {status:"accepted"});
        return "request accepted successfully";
      }
      throw new HttpExceptionFilter();
    }catch(error){
      throw new HttpExceptionFilter();
    }
  }

  async rejectRequest(id: number, organization: string){
    try{
      const donor = await this.donorRepository.findOne({operator:organization});
      let foundRequest = await this.requestRepository.findOne({id:id, donor:donor});
      if(foundRequest){
        await this.requestRepository.delete(id);
        return "request rejected successfully";
      }
      throw new HttpExceptionFilter();
    }catch(error){
      throw new HttpExceptionFilter();
    }
  }
}
