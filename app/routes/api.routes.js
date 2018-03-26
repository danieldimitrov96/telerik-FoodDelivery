/* globals __dirname __filename */

const fs = require('fs');
const path = require('path');

const init = (app, data) => {
    app.get('/api/foods', async (req, res) => {
        const allFoods = await data.food.getAll();
        res.send(allFoods);
    });

    app.get('/api/categories', async (req, res) => {
        const foodCategories = await data.category.getAll();
        res.send(foodCategories);
    });
};
module.exports = {
    init,
};
