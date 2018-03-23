'use strict';

const Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Categories", deps: []
 * createTable "Food", deps: [Categories]
 *
 **/

const info = {
    'revision': 1,
    'name': 'created-food-and-category',
    'created': '2018-03-20T11:25:46.973Z',
    'comment': '',
};

const migrationCommands = [{
        fn: 'createTable',
        params: [
            'Categories',
            {
                'id': {
                    'type': Sequelize.INTEGER,
                    'autoIncrement': true,
                    'primaryKey': true,
                    'allowNull': false,
                },
                'name': {
                    'type': Sequelize.STRING(20),
                    'allowNull': false,
                    'unique': true,
                },
                'createdAt': {
                    'type': Sequelize.DATE,
                    'allowNull': false,
                },
                'updatedAt': {
                    'type': Sequelize.DATE,
                    'allowNull': false,
                },
            },
            {},
        ],
    },
    {
        fn: 'createTable',
        params: [
            'Food',
            {
                'id': {
                    'type': Sequelize.INTEGER,
                    'autoIncrement': true,
                    'primaryKey': true,
                    'allowNull': false,
                },
                'name': {
                    'type': Sequelize.STRING(20),
                    'allowNull': false,
                    'unique': true,
                },
                'price': {
                    'type': Sequelize.FLOAT,
                },
                'weight': {
                    'type': Sequelize.FLOAT,
                },
                'imgUrl': {
                    'type': Sequelize.STRING(50),
                },
                'createdAt': {
                    'type': Sequelize.DATE,
                    'allowNull': false,
                },
                'updatedAt': {
                    'type': Sequelize.DATE,
                    'allowNull': false,
                },
                'CategoryId': {
                    'type': Sequelize.INTEGER,
                    'onUpdate': 'CASCADE',
                    'onDelete': 'CASCADE',
                    'references': {
                        'model': 'Categories',
                        'key': 'id',
                    },
                    'allowNull': false,
                },
            },
            {},
        ],
    },
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize) {
        let index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length) {
                    const command = migrationCommands[index];
                    console.log('[#'+index+'] execute: ' + command.fn);
                    index++;
                    queryInterface[command.fn](...command.params).then(next, reject);
                } else {
resolve();
}
            }
            next();
        });
    },
    info: info,
};
