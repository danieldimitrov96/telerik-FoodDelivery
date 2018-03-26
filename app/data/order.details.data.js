const Data = require('./generic.data');

class OrderDetailsData extends Data {
    constructor(model, includes) {
        super(model, includes);
    }

    findByOrderId(orderId) {
        return this.Model.findAll({
            where: {
                OrderId: orderId,
            },
            include: this.includes,
        });
    }
}

module.exports = OrderDetailsData;