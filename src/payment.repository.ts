import { EntityRepository, Repository } from 'typeorm';
import { PaymentEntity } from './payment.entity';
@EntityRepository(PaymentEntity)
export class ItemRepository extends Repository<PaymentEntity> {}
