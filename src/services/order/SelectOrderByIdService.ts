import Order from '../../models/Order';
import OrdersRepository from '../../repositories/OrdersRepository';

class SelectOrderByIdService {
    private ordersRepository: OrdersRepository;

    constructor(ordersRepository: OrdersRepository) {
        this.ordersRepository = ordersRepository;
    }

    public execute(id: string ): Order | null {

        const order = this.ordersRepository.findById(id);
        
        return order || null;
    }
}

export default SelectOrderByIdService;