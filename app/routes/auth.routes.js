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
        data.user.create(req.body);
        return res.redirect('/');
    });
};

module.exports = {
    init,
};