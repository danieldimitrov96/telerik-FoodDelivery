/* eslint new-cap: [, { "capIsNewExceptions": ["Category"] }] */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
    },
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};
