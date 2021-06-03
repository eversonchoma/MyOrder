import {Router} from 'express';
import {format, parseISO} from 'date-fns';
import OrdersRepository from '@repositories/OrdersRepository';
import OrderService from '@services/order';

const ordersRouter = Router();

const ordersRepository = new OrdersRepository();

ordersRouter.get('/', (request, response) => {
    const selectAllOrders = new OrderService.SelectAllOrdersService(ordersRepository);
    
    const orders = selectAllOrders.execute();

    if (orders.length == 0) {
        return response.status(404).json({message: 'Sem pedidos.'});
    }

    return response.json(orders);
});

ordersRouter.get('/:id', (request, response) => {
    const { id } = request.params;

    const selectOrderById = new OrderService.SelectOrderByIdService(ordersRepository);
    const order = selectOrderById.execute(id as string);

    if (order == null) {
        return response.status(404).json({message: 'Pedido não encontrado.'});
    }
    return response.json(order);
});

ordersRouter.post('/', (request, response) => {
    try {
        const { id, area, date  } = request.body;

        // usar esse formato de data apenas para qdo for exibir a data no frontend.
        //const parsedDate = format(new Date(parseISO(date)), 'dd/MM/yyyy');
        const parsedDate = parseISO(date);

        const createOrder = new OrderService.CreateOrderService(ordersRepository);

        const order = createOrder.execute({id, area, date: parsedDate});
        
        return response.json(order);

    } catch (err) {
        return response.status(400).json({error: err.message});
    }
});

ordersRouter.put('/:id', (request, response) => {
    try{
        const { id } = request.params;
        const { area, date } = request.body;

        const updateOrderByIdService = new OrderService.UpdateOrderByIdService(ordersRepository);
        const order = updateOrderByIdService.execute({id, area, date});

        return response.json(order);

    } catch (err) {
        return response.status(400).json({error: err.message});
    }
});

ordersRouter.delete('/:id', (request, response) => {
    try {
        const { id } = request.params;

        const deleteOrderByIdService = new OrderService.DeleteOrderByIdService(ordersRepository);
        const orders = deleteOrderByIdService.execute(id);

        if (orders.length == 0) {
            return response.status(200).json({message: 'Deleção concluída, e agora estamos sem pedidos.'});
        }

        return response.json(orders);

    } catch (err) {
        return response.status(400).json({error: err.message});
    }
});

export default ordersRouter;