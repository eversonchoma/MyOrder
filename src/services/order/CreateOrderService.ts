import Order from '@models/Order';
import OrdersRepository from '@repositories/OrdersRepository';

interface Request {
    id: string;
    area: string[];
    date: Date;
}

class CreateOrderService {
    private ordersRepository: OrdersRepository;

    constructor(ordersRepository: OrdersRepository){
        this.ordersRepository = ordersRepository;
    }

    public execute({id, area, date}: Request): Order {

        const existingId = this.ordersRepository.findById(id);

        if (existingId){
            throw Error('Já existe um pedido com esse número cadastrado.');
        }

        const order = this.ordersRepository.create({
            id,
            area,
            date,
        });

        return order;
    }
}

export default CreateOrderService;