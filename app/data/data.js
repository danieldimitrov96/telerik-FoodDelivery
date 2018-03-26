
const {
    Food,
    Category,
    Order,
    OrderDetails,
    User,
} = require('../../db/models');

const Data = require('./generic.data');
const OrderDetailsData = require('./order.details.data');
const OrderData = require('./order.data');
const UserData = require('./user.data');
// const FoodData = require('./food.data');

module.exports = {
    food: new Data(Food),
    category: new Data(Category),
    order: new OrderData(Order),
    orderDetails: new OrderDetailsData(OrderDetails),
    user: new UserData(User),
};
