import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PaymentRepository } from './database/entity/payment.repository';
import { PaymentEntity } from './database/entity/payment.entity';
@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([PaymentEntity, PaymentRepository]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
