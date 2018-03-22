const {
    expect,
} = require('chai');
const sinon = require('sinon');

const Data = require('../../../app/data/generic.data');

describe('Test class Data of generic.data.js', () => {
    let data = null;
    let FakeModel = null;

    beforeEach(() => {
        FakeModel = {
            findAll: () => {},
            findById: (id) => {},
            create: (obj) => {},
        };
        data = new Data(FakeModel);
    });

    describe('Instance test', () => {
        it("It should be Data instance ", () => {
            expect(data instanceof Data).to.equal(true, "Should be instance of class Data");
        });
    });

    describe('Test getAll() method', () => {
        it('It should return array deeply equal of Models array', async () => {
            const expectedModelsArr = [1, 2, 3, 4];
            sinon.stub(FakeModel, 'findAll')
                .returns(expectedModelsArr);

            const actualModelsArr = await data.getAll();

            expect(actualModelsArr).deep.equal(expectedModelsArr);
        });

        it('It should return empty array deeply equal of FakeModels array', async () => {
            const expectedModelsArr = [];
            sinon.stub(FakeModel, 'findAll')
                .returns([]);

            const actualModelsArr = await data.getAll();

            expect(actualModelsArr).deep.equal(expectedModelsArr);
            expect(actualModelsArr).to.be.empty;
        });
    });

    describe('Test getById(id) method', () => {
        it('With valid Id expect object with Id property', async () => {
            const id = 3;
            const expectedObject = {
                id
            }
            sinon.stub(FakeModel, 'findById')
                .returns(expectedObject);

            const actualObject = await data.getById(id);

            expect(actualObject).to.exist;
            expect(actualObject.id).deep.equal(id);
        });

        it('With invalid Id expect return null', async () => {
            const id = 3;
            sinon.stub(FakeModel, 'findById')
                .returns(null);

            const actualObject = await data.getById(id);

            expect(actualObject).to.be.null;
        });
    });
});