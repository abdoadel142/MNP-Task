import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDonorDto } from './Dto/createDonor.dto';
import { Donor } from './entities/donor.entity';

@Injectable()
export class DonorService {
  constructor(
    @InjectRepository(Donor)
    private donorRepository: Repository<Donor>,
  ) {}
  getHello(): string {

    return "hello Donor";

  }

  async create(createDonorDto: CreateDonorDto) {
    try {
      const newDonor: Donor = this.donorRepository.create(
        createDonorDto,
      );
      await this.donorRepository.save(newDonor);
      return newDonor;
    } catch (error) {
      return 'failed to find';
    }
  }


}
