/* globals __dirname */

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const flash = require('connect-flash');

// dependency injection
// duck typing
const init = (app) => {
    // defensive programming
    if (typeof app.use !== 'function' ||
        typeof app.set !== 'function') {
        throw new Error('Invalid app');
    }

    // decorator design pattern
    app.use(bodyParser.urlencoded({
        extended: true,
    }));

    app.use(bodyParser.json());

    // decorator
    app.use('/static', express.static(path.join(__dirname, '../../public')));

    // decorator
    app.use(morgan('combined'));

    app.use(flash());

    app.set('view engine', 'pug');

    app.set('views', path.join(__dirname, '../../views'));
};

module.exports = {
    init,
};
