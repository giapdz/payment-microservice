import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { PaymentEntity } from './entities/payment.entity';
import { PaymentRepository } from './payment.repository';
@Module({
  imports: [TypeOrmModule.forFeature([PaymentEntity, PaymentRepository])],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
