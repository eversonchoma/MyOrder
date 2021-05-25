import Order from '../../models/Order';
import OrdersRepository from '../../repositories/OrdersRepository';

class DeleteOrderByIdService {
    private ordersRepository: OrdersRepository;

    constructor(ordersRepository: OrdersRepository) {
        this.ordersRepository = ordersRepository;
    }

    public execute(id: string ) {
        const orders = this.ordersRepository.delete(id);
        return orders;
    }
}

export default DeleteOrderByIdService;