import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { PaymentEntity } from './entities/payment.entity';
import { PaymentRepository } from './payment.repository';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(PaymentEntity)
    private readonly paymentsRepository: PaymentRepository,
  ) {}
  async createPayment(payment: CreatePaymentDto): Promise<PaymentEntity> {
    return await this.paymentsRepository.save(payment);
  }
  async getPaymentById(id: number): Promise<PaymentEntity> {
    return await this.paymentsRepository.findOne(id);
  }
}
