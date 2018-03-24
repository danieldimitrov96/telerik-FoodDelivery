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
        // console.log(phoneDBuser)

        if (userDB === null && phoneDBuser === null) {
            await data.user.create(req.body);

            // console.log('auto login--------------');
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