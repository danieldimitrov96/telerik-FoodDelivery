/* globals __dirname __filename */

const fs = require('fs');
const path = require('path');

const init = (app, data) => {
    app.get('/api/foods', async (req, res) => {
        const allFoods = await data.food.getAll();
        res.send(allFoods);
    });
};
module.exports = {
    init,
};