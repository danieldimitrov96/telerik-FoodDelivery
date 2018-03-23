'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderDetails = sequelize.define('OrderDetails', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  OrderDetails.associate = function(models) {
    const {
        Order,
        Food,
    } = models;

    OrderDetails.belongsTo(Order, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: 'CASCADE',
      });

      OrderDetails.belongsTo(Food, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: 'CASCADE',
      });
  };
  return OrderDetails;
};
