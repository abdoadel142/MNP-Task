import { Module , NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonorModule } from 'src/Donor/donor.module';
import { DonorService } from 'src/Donor/donor.service';
import { Donor } from 'src/Donor/entities/donor.entity';
import { Recipient } from 'src/Recipient/entities/recipient.entity';
import { RecipientModule } from 'src/Recipient/recipient.module';
import { RecipientService } from 'src/Recipient/recipient.service';
import { Request } from './entities/request.entity';
import { SeederMiddleware } from './Middleware/request.middlewae';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';

@Module({
  imports: [TypeOrmModule.forFeature([Request,Recipient,Donor])],
  controllers: [RequestController],
  providers: [RequestService],
})

export class RequestModule  implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SeederMiddleware)
      .forRoutes('request');
  }
}

