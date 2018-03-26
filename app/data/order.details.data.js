const Data = require('./generic.data');

class OrderDetailsData extends Data {
    constructor(OrderDetails) {
        super(OrderDetails);
    }

    findByOrderId(orderId) {
        return this.Model.findAll({
            where: {
                OrderId: orderId,
            },
        });
    }
}

module.exports = OrderDetailsData;
