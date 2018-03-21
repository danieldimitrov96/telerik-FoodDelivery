'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Orders", deps: [Users]
 * createTable "OrderDetails", deps: [Orders, Food]
 *
 **/

var info = {
    "revision": 3,
    "name": "created-orders-and-order-details",
    "created": "2018-03-21T10:06:11.000Z",
    "comment": ""
};

var migrationCommands = [
    {
        fn: "createTable",
        params: [
            "Orders",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Users",
                        "key": "id"
                    },
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "OrderDetails",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "quantity": {
                    "type": Sequelize.INTEGER,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "OrderId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Orders",
                        "key": "id"
                    },
                    "allowNull": false
                },
                "FoodId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Food",
                        "key": "id"
                    },
                    "allowNull": false
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
