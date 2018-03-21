'use strict';
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {

    }, {});
    Order.associate = function (models) {
        const {
            User
        } = models;

        Order.belongsTo(User, {
            foreignKey: {
                allowNull: false,
            },
            onDelete: 'CASCADE',
        });
    };
    
    return Order;
};