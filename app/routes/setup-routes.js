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
            model.username = 'Hello, ' + req.user.name;
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
            model.username = 'Hello, ' + req.user.name;
            model.isUserLogged = req.isAuthenticated();
        }
        // console.log(model);
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