const {
    expect,
} = require('chai');
const sinon = require('sinon');

const OrderData = require('../../../app/data/order.data');

describe('Test class OrderData extends Data', () => {
    let orderData = null;
    let FakeOrderModel = null;

    beforeEach(() => {
        FakeOrderModel = {
            findAll: (id) => {},
        };
        orderData = new OrderData(FakeOrderModel);
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

    describe('Test findOrderByUserId() method', () => {
        it("should return object when valid username passed", async () => {
            const validUserId = 2;
            const expectedOrderArr = ['Kufteta', 5];
            sinon.stub(FakeOrderModel, 'findAll')
                .returns(expectedOrderArr);
            const actualResult = await orderData.findOrderByUserId(validUserId);
            expect(actualResult).deep.equal(expectedOrderArr);
        });

        it('should return null when invalid username passed ', async () => {
            const invalidUserId = 34;
            const expectedOrderArr = null;
            sinon.stub(FakeOrderModel, 'findAll')
                .returns(expectedOrderArr);
            const actualResult = await orderData.findOrderByUserId(invalidUserId);
            expect(actualResult).deep.equal(expectedOrderArr);
        });
    });
});