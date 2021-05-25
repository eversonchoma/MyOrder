import Order from '../models/Order';

interface CreateOrderDTO{
    id: string;
    area: string[];
    date: Date;
}

class OrdersRepository {
    private orders: Order[];

    constructor() {
        this.orders =[];
    }

    public all(): Order[] {
        return this.orders;
    }

    public findById(id: string): Order | null{
        
        const existingId = this.orders.find(order => order.id === id);

        return existingId || null;
    }

    public create({id, area, date}: CreateOrderDTO): Order{
        const order = new Order({id, area, date});

        this.orders.push(order);

        return order;
    }

    public delete(id: string): Order[]{
        for( var i = 0; i < this.orders.length; i++){ 
            if ( this.orders[i].id === id)
                this.orders.splice(i, 1);
        }

        return this.orders;
    }

    public update({id, area, date}: CreateOrderDTO): Order{
        
        const order = this.orders.find(order => order.id === id);
        order.area = area;
        order.date = date;
        
        return order;
    }
}

export default OrdersRepository;