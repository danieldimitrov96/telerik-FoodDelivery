/* eslint new-cap: [, { "capIsNewExceptions": ["Feedback"] }] */
'use strict';
module.exports = (sequelize, DataTypes) => {
    const Feedback = sequelize.define('Feedback', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        subject: {
            type: DataTypes.STRING(50),
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        text: {
            type: DataTypes.TEXT(),
            allowNull: false,
        },
    }, {});
    return Feedback;
};
