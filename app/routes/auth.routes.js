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

    app.post('/register', async (req, res) => {

        const userDB = await data.user.findByUsername(req.body.name);
        const phoneDBuser = await data.user.findByPhone(req.body.phone);

        if (req.body.name.length < 2 || req.body.name.length > 15 ||
            req.body.phone.length < 2 || req.body.phone.length > 15 ||
            req.body.password.length < 2 || req.body.password.length > 18 ||
            !/^\d+$/.test(req.body.password)) {
            console.log('Someone is trying to add bad data to DataBase');
            res.send('try again');
        }

        if (userDB === null && phoneDBuser === null) {
            await data.user.create(req.body);

            req.login(req.body, (err) => {
                if (!err) {
                    res.redirect('/');
                } else {
                    res.redirect('/');
                }
            });
        } else if (userDB === null) {
            req.flash('error', 'Phone is already taken');
            res.redirect('/');
        } else if (phoneDBuser === null) {
            req.flash('error', 'User name is already taken');
            res.redirect('/');
        } else {
            req.flash('error', 'User name and phone are already taken');
            res.redirect('/');
        }
    });
};

module.exports = {
    init,
};