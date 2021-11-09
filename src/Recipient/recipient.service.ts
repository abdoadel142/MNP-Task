import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecipientDto } from './Dto/createRecipient.dto';
import { Recipient } from './entities/recipient.entity';

@Injectable()
export class RecipientService {
  constructor(
    @InjectRepository(Recipient)
    private recipientRepository: Repository<Recipient>,
  ) {}
  getHello(): string {

    return "hello world";

  }

  async create(createRecipientDto: CreateRecipientDto) {
    try {
      const newRecipient: Recipient = this.recipientRepository.create(
        createRecipientDto,
      );
      await this.recipientRepository.save(newRecipient);
      return newRecipient;
    } catch (error) {
      
        }
  }
}
