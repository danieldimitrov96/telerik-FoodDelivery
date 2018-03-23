'use strict';
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
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    }, {});
    User.associate = function (models) {

    };
    return User;
};