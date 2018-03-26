const Data = require('./generic.data');

class orderData extends Data {
    constructor(Order, [OrderDetails]) {
        super(Order, [OrderDetails]);
    }

    _isObjectValid(obj) {
        return !!obj;
    }

    findOrderByUserId(userId) {
        return this.Model.findAll({
            where: {
                UserId: userId,
            },
        });
    }
}

module.exports = orderData;
