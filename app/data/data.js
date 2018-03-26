const {
    Food,
    Category,
    Order,
    OrderDetails,
    User,
    Feedback,
} = require('../../db/models');

const Data = require('./generic.data');
const OrderDetailsData = require('./order.details.data');
const OrderData = require('./order.data');
const UserData = require('./user.data');
// const FoodData = require('./food.data');

module.exports = {
    food: new Data(Food, [Category]),
    category: new Data(Category),
    order: new OrderData(Order, [User]),
    orderDetails: new OrderDetailsData(OrderDetails, [Order, Food]),
    user: new UserData(User),
    feedback: new Data(Feedback),
};