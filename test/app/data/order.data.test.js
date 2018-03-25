const {
    expect,
} = require('chai');
const sinon = require('sinon');

const OrderData = require('../../../app/data/order.data');

describe('Test class OrderData extends Data', () => {
    let orderData = null;
    let FakeOrderModel = null;

    beforeEach(() => {
        // FakeOrderDetailsModel = {
        //     findAll: (id) => {},
        // };
        orderData = new OrderData();
    });

    describe('Instance test', () => {
        it("should be OrderData instance ", () => {
            expect(orderData instanceof OrderData).to.equal(true, "Should be instance of OrderData");
        });
    });

    describe('Test _isObjectValid() method', () => {
        it("should return true when passed object is NOT null", () => {
            const obj = {};
            const actualResult = orderData._isObjectValid(obj);
            expect(actualResult).to.be.true;
        });

        it("should return false when passed object is null", () => {
            const obj = null;
            const actualResult = orderData._isObjectValid(obj);
            expect(actualResult).to.be.false;
        });
    });
});
