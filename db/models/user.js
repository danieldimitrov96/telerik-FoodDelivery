/* eslint new-cap: [, { "capIsNewExceptions": ["User"] }] */
'use strict';
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING(20),
            unique: true,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(20),
            unique: true,
            allowNull: false,
        },
        adress: {
            type: DataTypes.STRING(20),
        },
        email: {
            type: DataTypes.STRING(20),
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        hooks: {
            beforeSave: async (user, options) => {
                user.password = await bcrypt.hash(user.password, 5);
                return user;
            },
        },
    });

    User.prototype.comparePassword = async function(passwordAttempt) {
        const isMatch = await bcrypt.compare(passwordAttempt, this.password);
        return isMatch;
    };
    return User;
};
