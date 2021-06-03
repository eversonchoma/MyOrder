import Order from '@models/Order';
import OrdersRepository from '@repositories/OrdersRepository';

class SelectAllOrdersService {
    private ordersRepository: OrdersRepository;

    constructor(ordersRepository: OrdersRepository) {
        this.ordersRepository = ordersRepository;
    }

    public execute(): Order[] {

        const orders = this.ordersRepository.all();

        return orders || null;
    }
}

export default SelectAllOrdersService;