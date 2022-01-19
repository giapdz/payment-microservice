import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { PaymentEntity } from './database/entity/payment.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ role: 'payment', cmd: 'create' })
  createPayment(paymentDto: PaymentEntity) {
    return this.appService.createPayment(paymentDto);
  }

  @MessagePattern({ role: 'payment', cmd: 'get-by-id' })
  getPaymentById(id: number) {
    return this.appService.getPaymentById(id);
  }
}
