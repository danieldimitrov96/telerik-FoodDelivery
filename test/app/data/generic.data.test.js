/* eslint no-unused-expressions: 0 */
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
        it('should be Data instance ', () => {
            expect(data instanceof Data)
                .to.equal(true, 'Should be instance of class Data');
        });
    });

    describe('Test getAll() method', () => {
        it('should return array deeply equal of Models array', async () => {
            const expectedModelsArr = [1, 2, 3, 4];
            sinon.stub(FakeModel, 'findAll')
                .returns(expectedModelsArr);

            const actualModelsArr = await data.getAll();

            expect(actualModelsArr).deep.equal(expectedModelsArr);
        });

        it('should return empty array deeply equal of FakeModels array',
            async () => {
                const expectedModelsArr = [];
                sinon.stub(FakeModel, 'findAll')
                    .returns([]);

                const actualModelsArr = await data.getAll();

                expect(actualModelsArr).deep.equal(expectedModelsArr);
                expect(actualModelsArr).to.be.empty;
            });
    });

    describe('Test getById(id) method', () => {
        it('with valid Id expect object with Id property', async () => {
            const id = 3;
            const expectedObject = {
                id,
            };
            sinon.stub(FakeModel, 'findById')
                .returns(expectedObject);

            const actualObject = await data.getById(id);

            expect(actualObject).to.exist;
            expect(actualObject.id).deep.equal(id);
        });

        it('with invalid Id expect return null', async () => {
            const id = 3;
            sinon.stub(FakeModel, 'findById')
                .returns(null);

            const actualObject = await data.getById(id);

            expect(actualObject).to.be.null;
        });
    });

    describe('Test create(obj) method', () => {
        it('should throw when invalid object passed', async () => {
            FakeModel.create = (obj) => {
                throw new Error;
            };
            const actualReturn = await FakeModel.create;

            expect(actualReturn).to.throw();
        });

        it('should NOT throw when valid object passed', async () => {
            const obj1 = {};
            const actualReturn = await data.create(obj1);

            expect(actualReturn).to.not.throw;
        });

        it('should return object when valid object passed', async () => {
            const obj1 = {};
            const resultObj = {};
            sinon.stub(FakeModel, 'create')
                .returns(resultObj);

           await data.create(obj1);

           expect(resultObj).to.not.null;
        });
    });
});
