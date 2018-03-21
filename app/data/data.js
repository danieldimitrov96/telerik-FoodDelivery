
const {
    Food,
    Category,
    Order,
    OrderDetails,
    User
} = require('../../db/models');

const Data = require('./generic.data');
// const SuperheroesData = require('./superheroes.data');

module.exports = {
    food: new  Data(Food),
    category: new Data(Category),
    order: new Data(Order),
    orderDetails: new Data(OrderDetails),
    user: new Data(User),
};