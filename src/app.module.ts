import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './Database/database.module';
import { DonorModule } from './Donor/donor.module';
import { RecipientModule } from './Recipient/recipient.module';
import { RequestModule } from './Request/request.module';
@Module({
  imports: [
    DatabaseModule,
    DonorModule,
    RecipientModule,
    RequestModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
