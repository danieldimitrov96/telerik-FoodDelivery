const {
    expect,
} = require('chai');
const sinon = require('sinon');

const {
    init,
} = require('../../../app/config/express');

describe('Test init() method of app/config/express.js', () => {
    it('should throw when invalid app passed', () => {
        const invalidApp = {};
        const targetFunction = () => {
            init(invalidApp);
        };

        expect(targetFunction).to.throw('Invalid app');
    });

    it('should NOT throw when valid app passed', () => {
        const validApp = {
            use: () => {},
            set: () => {},
        };
        const targetFunction = () => {
            init(validApp);
        };;

        expect(targetFunction).to.not.throw;
    });
});