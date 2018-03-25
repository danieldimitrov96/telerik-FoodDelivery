const {
    expect,
} = require('chai');
const sinon = require('sinon');

const OrderDetailsData = require('../../../app/data/order.details.data');

describe('Test class OrderDetailsData extends Data', () => {
    let orderDetailsData = null;
    let FakeOrderDetailsModel = null;

    beforeEach(() => {
        FakeOrderDetailsModel = {
            findAll: () => {},
        };
        orderDetailsData = new OrderDetailsData(FakeOrderDetailsModel);
    });

    describe('Instance test', () => {
        it("should be OrderDetailsData instance ", () => {
            expect(orderDetailsData instanceof OrderDetailsData).to.equal(true, "Should be instance of OrderDetailsData");
        });
    });

    describe('Test findByOrderId() method', () => {
        it("should return object when valid id passed", () => {
            const validId = 5;
            sinon.stub(FakeOrderDetailsModel, 'findAll')
                .returns({});
            const actualResult = orderDetailsData.findByOrderId(validId);
            expect(actualResult).to.not.null;
        });
    });
});