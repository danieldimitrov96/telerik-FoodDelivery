const config = require('../config');

const cookieParser = require('cookie-parser');
const session = require('express-session');

const passport = require('passport');
const {
    Strategy,
} = require('passport-local');

// const users = [{
//     username: 'pesho',
//     password: 'pesho',
// }];

const init = (app, data) => {
    passport.use(new Strategy(async (name, password, done) => {
        const user = await data.user.findByUsername(name);
       const isPassMatch = await user.comparePassword(password);
        if (!user || !isPassMatch) {
            return done(null, false, {
                message: 'Incorrect username or password.',
            });
        }
        // User with such username and password exists
        return done(null, user);
    }));

    // User to string
    passport.serializeUser((user, done) => {
        done(null, user.name);
    });

    // string to User
    passport.deserializeUser(async (name, done) => {
        // const user = await data.users.findByUsername(username);
        const user = await data.user.findByUsername(name);

        if (!user) {
            return done(new Error('invalid used'));
        }

        return done(null, user);
    });

    app.use(cookieParser());

    app.use(session({
        secret: config.secret,
    }));

    app.use(passport.initialize());
    app.use(passport.session());
};

module.exports = {
    init,
};
