/* globals __dirname __filename */

const fs = require('fs');
const path = require('path');

const init = (app, data) => {
     //test route
     app.get('/test', async (req, res) => {
        res.render('test');
        // res.send("hi");
    });

    app.get('/', async (req, res) => {
        res.render('home');
    });

    app.get('/contacts', async (req, res) => {
        res.render('contacts');
    });

    app.post('/', async (req, res) => {
        //login
        //register
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
