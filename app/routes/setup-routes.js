/* globals __dirname __filename */

const fs = require('fs');
const path = require('path');

const init = (app, data) => {
    // test route
    app.get('/test', async (req, res) => {
        res.render('test');
        // res.send("hi");
    });

    app.get('/', async (req, res) => {
        // console.log(req.user);

        const model = {
            username: 'My accaunt',
            isUserLogged: false,
        };

        if (req.user) {
            model.username = 'Hello, ' + req.user.username;
            model.isUserLogged = true;
        }

        res.render('home', model);
    });

    app.get('/contacts', async (req, res) => {
        const model = {
            username: 'My accaunt',
            isUserLogged: false,
        };

        if (req.user) {
            model.username = 'Hello, ' + req.user.username;
            model.isUserLogged = true;
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