import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Controller()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @MessagePattern({ role: 'payment', cmd: 'create' })
  createPayment(paymentDto: CreatePaymentDto) {
    return this.paymentsService.createPayment(paymentDto);
  }

  @MessagePattern({ role: 'payment', cmd: 'get-by-id' })
  getPaymentById(id: number) {
    return this.paymentsService.getPaymentById(id);
  }

  // @MessagePattern('createPayment')
  // create(@Payload() createPaymentDto: CreatePaymentDto) {
  //   return this.paymentsService.create(createPaymentDto);
  // }

  // @MessagePattern('findAllPayments')
  // findAll() {
  //   return this.paymentsService.findAll();
  // }

  // @MessagePattern('findOnePayment')
  // findOne(@Payload() id: number) {
  //   return this.paymentsService.findOne(id);
  // }

  // @MessagePattern('updatePayment')
  // update(@Payload() updatePaymentDto: UpdatePaymentDto) {
  //   return this.paymentsService.update(updatePaymentDto.id, updatePaymentDto);
  // }

  // @MessagePattern('removePayment')
  // remove(@Payload() id: number) {
  //   return this.paymentsService.remove(id);
  // }
}
