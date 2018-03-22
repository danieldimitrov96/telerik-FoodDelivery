const passport = require('passport');

const init = (app, data) => {
    app.post('/login',
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/',
            failureFlash: true,
        }));

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.post('/register', (req, res) => {
        // data.users.create(req.body);
        return res.redirect('/login');
    });
};

module.exports = {
    init,
};