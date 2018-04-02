/* eslint no-unused-expressions: 0 */
const {
    expect,
} = require('chai');
// const sinon = require('sinon');

const {
    basket,
} = require('../../../public/js/basket');

describe('Test basket object', () => {
    let fakeBasket = null;

    beforeEach(() => {
        fakeBasket = basket;
    });

    describe('Property test', () => {
        it('should have property updateBasket', () => {
            const expectedProp = 'updateBasket';
            expect(fakeBasket).to.have.property(expectedProp);
        });

        it('should have property addFoodToBasket', () => {
            const expectedProp = 'addFoodToBasket';
            expect(fakeBasket).to.have.property(expectedProp);
        });
    });
});
