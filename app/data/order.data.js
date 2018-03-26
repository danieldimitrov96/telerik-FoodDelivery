const Data = require('./generic.data');

class OrderData extends Data {
    constructor(Order) {
        super(Order);
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

module.exports = OrderData;
