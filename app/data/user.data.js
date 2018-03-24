const Data = require('./generic.data');

const {
    User,
} = require('../../db/models');

class UserData extends Data {
    constructor() {
        super(User);
    }

    findByUsername(username) {
        return this.Model.findOne({
            where: {
                name: username,
            },
        });
    }

    findByPhone(phone) {
        return this.Model.findOne({
            where: {
                phone: phone,
            },
        });
    }
}

module.exports = UserData;
