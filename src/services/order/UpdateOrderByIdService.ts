import Order from '@models/Order';
import OrdersRepository from '@repositories/OrdersRepository';

interface Request {
    id: string;
    area: string[];
    date: Date;
}

class UpdateOrderByIdService {
    private ordersRepository: OrdersRepository;

    constructor(ordersRepository: OrdersRepository) {
        this.ordersRepository = ordersRepository;
    }

    public execute({id, area, date}: Request): Order | null{

        const updatedOrder = this.ordersRepository.update({id, area, date});
        
        return updatedOrder || null;
    }
}

export default UpdateOrderByIdService;