const Data = require('./generic.data');

class OrderData extends Data {
    constructor(model, includes) {
        super(model, includes);
    }

    _isObjectValid(obj) {
        return !!obj;
    }

    findOrderByUserId(userId) {
        return this.Model.findAll({
            where: {
                UserId: userId,
            },
            include: this.includes,
        });
    }
}

module.exports = OrderData;