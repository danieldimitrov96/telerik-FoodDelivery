const Data = require('./generic.data');

class UserData extends Data {
    constructor(User) {
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
