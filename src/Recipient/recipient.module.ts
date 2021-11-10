import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipient } from './entities/recipient.entity';
import { RecipientController } from './recipient.controller';
import { RecipientService } from './recipient.service';

@Module({
  imports: [TypeOrmModule.forFeature([Recipient])],
  controllers: [RecipientController],
  providers: [RecipientService],
})
export class RecipientModule {}
