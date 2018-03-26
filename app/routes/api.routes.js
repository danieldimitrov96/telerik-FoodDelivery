/* globals __dirname __filename */

const fs = require('fs');
const path = require('path');

const init = (app, data) => {
    app.get('/api/foods', async (req, res) => {
        const allFoods = await data.food.getAll();
        res.send(allFoods);
    });


    app.get('/user', async (req, res) => {

        const test = await data.order.findByOrderId(1);

        const model = {
            test: test,
        };
        res.send(model);
        
        // console.log(model.foods[0]);
        // console.log(req.user);
        // if (req.user) {
        //     model.isUserLogged = req.isAuthenticated();
        //     res.send(model);

        // } else {
        //     res.redirect('/');
        // }
    });




};
module.exports = {
    init,
};