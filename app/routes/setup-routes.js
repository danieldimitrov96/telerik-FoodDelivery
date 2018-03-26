/* globals __dirname __filename */

const fs = require('fs');
const path = require('path');

const init = (app, data) => {
    app.get('/', async (req, res) => {
        const foods = await data.food.getAll();
        const categories = await data.category.getAll();

        const model = {
            username: 'My accaunt',
            isUserLogged: false,
            messages: req.flash('error'),
            foods: foods,
            categories: categories,
        };
        // console.log(model.foods[0]);

        if (req.user) {
            const orders = await data.order.findOrderByUserId(req.user.id);

            await Promise.all(
                orders.map(async (order) => {
                    const details = await data.orderDetails.findByOrderId(order.id);
                    order.details = details;
                }));

            // console.log(orders[0].UserId)
            model.orders = orders;
            // console.log(model.orders[0].details[0].Food.imgUrl);
            // console.log(model.orders);
            model.username = req.user.name.charAt(0).toUpperCase() + req.user.name.slice(1) + '\'s orders';
            model.isUserLogged = req.isAuthenticated();
        }
        res.render('home', model);
    });

    app.get('/contacts', async (req, res) => {
        const model = {
            username: 'My accaunt',
            isUserLogged: false,
            messages: req.flash('error'),
        };
        // console.log(model.messages);

        if (req.user) {
            model.username = req.user.name.charAt(0).toUpperCase() + req.user.name.slice(1) + '\'s orders';
            model.isUserLogged = req.isAuthenticated();
        }
        // console.log(model);
        res.render('contacts', model);
    });

    app.post('/feedback', async (req, res) => {

        const model = {
            username: 'My accaunt',
            isUserLogged: false,
            feedbackSent: false,
            messages: req.flash('error'),
        };

        if (req.user) {
            model.username = req.user.name.charAt(0).toUpperCase() + req.user.name.slice(1) + '\'s orders';
            model.isUserLogged = req.isAuthenticated();
        }

        if (await data.feedback.create(req.body)) {
            model.feedbackSent = true;
        }

        res.render('contacts', model);
    });


    /** dynamically load all routes */
    fs.readdirSync(__dirname)
        .filter((filename) => filename !== path.basename(__filename))
        .filter((filename) => filename !== 'index.js')
        // relative to absolute path
        .map((filename) => path.join(__dirname, filename))
        .forEach((modulePath) => {
            const route = require(modulePath);
            route.init(app, data);
        });
};

module.exports = {
    init,
};