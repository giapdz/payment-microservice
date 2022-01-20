import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database/database.module';
import { PaymentsModule } from './modules/payments/payments.module';
@Module({
  imports: [DatabaseModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
