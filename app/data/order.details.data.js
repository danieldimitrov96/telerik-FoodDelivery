const Data = require('./generic.data');

const {
    Order, 
    OrderDetails,
} = require('../../db/models');

class orderDetailsData extends Data {
    constructor() {
        super(OrderDetails)
    }

    findByOrderId(orderId) {
        return this.Model.findAll({
            where: {
                OrderId: orderId,
            }
        });
    }
}

module.exports = orderDetailsData;