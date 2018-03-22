'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "password" to table "Users"
 * addColumn "email" to table "Users"
 *
 **/

var info = {
    "revision": 4,
    "name": "user-table-was-changed",
    "created": "2018-03-22T11:07:17.318Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "Users",
            "password",
            {
                "type": Sequelize.STRING(20),
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "Users",
            "email",
            {
                "type": Sequelize.STRING(20),
                "allowNull": false,
                "unique": true
            }
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
