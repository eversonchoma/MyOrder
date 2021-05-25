class Order{
    id: string;

    area: string[];

    date: Date;

    constructor({id, area, date}: Order) {
        this.id = id;
        this.area = area;
        this.date = date;
    }
}

export default Order;