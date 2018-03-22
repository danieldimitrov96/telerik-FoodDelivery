
const {
    Food,
    Category,
    Order,
    OrderDetails,
    User
} = require('../../db/models');

const Data = require('./generic.data');
const orderDetailsData = require('./order.details.data');
const orderData = require('./order.data');
const FoodData = require('./food.data');

module.exports = {
    food: new  Data(Food),
    category: new Data(Category),
    order: new Data(Order),
    orderDetails: new orderDetailsData(),
    user: new Data(User),
};