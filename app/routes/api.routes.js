/* globals __dirname __filename */

const fs = require('fs');
const path = require('path');

const init = (app, data) => {
    app.get('/api/foods', async (req, res) => {

        // const model = [{
        //     username: 'pesho',
        //     password: 'pesho',
        // }];

        res.send(model);
    });
};
module.exports = {
    init,
};