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
        const actualResult = init;

        expect(actualResult).to.throw();
    });

    it('should NOT throw when valid app passed', () => {
        const validApp = {
            use: ()=> {},
            set: ()=> {},
        };
        const actualResult = init;

        expect(actualResult).to.not.throw;
    });
});