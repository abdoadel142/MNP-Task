import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {  NextFunction } from 'express';
import { LessThan, MoreThan, Repository } from 'typeorm';
import { Request } from '../entities/request.entity';

@Injectable()
export class SeederMiddleware implements NestMiddleware {
   
 constructor(   @InjectRepository(Request)
 private requestRepository: Repository<Request>){}

     async logger(next: NextFunction) {
         const entities = await this.requestRepository.find({ where: { 
            createdDate:  LessThan(Date.now()) },})
            if(entities){
                await this.requestRepository.remove(entities) 
            }
        next();
      };
  use(next: NextFunction) {
    next();
  }
}
