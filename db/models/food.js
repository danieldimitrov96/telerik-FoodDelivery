/* eslint new-cap: [, { "capIsNewExceptions": ["Food"] }] */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
    name: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
    },
    weight: {
        type: DataTypes.FLOAT,
    },
    imgUrl: {
        type: DataTypes.STRING(50),
    },
  }, {});
  Food.associate = function(models) {
    const {
        Category,
    } = models;

    Food.belongsTo(Category, {
        foreignKey: {
            allowNull: false,
        },
        onDelete: 'CASCADE',
    });
  };
  return Food;
};
