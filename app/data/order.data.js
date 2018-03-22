const Data = require('./generic.data');

const {
    Order, 
    OrderDetails,
} = require('../../db/models');

class orderData extends Data {
    constructor() {
        super(Order, [OrderDetails])
    }

    _isObjectValid(obj) {
        return !!obj;
    }
}

module.exports = orderData;