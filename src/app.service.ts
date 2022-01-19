import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentEntity } from './database/entity/payment.entity';
import { PaymentRepository } from './database/entity/payment.repository';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(PaymentEntity)
    private readonly paymentsRepository: PaymentRepository,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createPayment(payment: PaymentEntity): Promise<PaymentEntity> {
    return await this.paymentsRepository.save(payment);
  }
  async getPaymentById(id: number): Promise<PaymentEntity> {
    return await this.paymentsRepository.findOne(id);
  }
}
