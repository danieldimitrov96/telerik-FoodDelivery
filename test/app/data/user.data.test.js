const {
    expect,
} = require('chai');
const sinon = require('sinon');

const UserData = require('../../../app/data/user.data');

describe('Test class UserData extends Data', () => {
    let fakeUser = null;
    let FakeUserModel = null;

    beforeEach(() => {
        FakeUserModel = {
            findOne: (obj) => {},
        };
        fakeUser = new UserData(FakeUserModel);
    });

    describe('Instance test', () => {
        it("should be UserData instance ", () => {
            expect(fakeUser instanceof UserData).to.equal(true, "Should be instance of UserData");
        });
    });

    describe('Test findByUsername() method', () => {
        it("should return object when valid username passed", async () => {
            const validUsername = 'Jeko';
            const expectedUserObj = {
                name: 'Jeko',
                phone: '88213',
            };
            sinon.stub(FakeUserModel, 'findOne')
                .returns(expectedUserObj);
            const actualResult = await fakeUser.findByUsername(validUsername);
            expect(actualResult).deep.equal(expectedUserObj);
        });

        it('should return null when invalid username passed ', async () => {
            const invalidUsername = 'NonJeko';
            const expectedUserObj = null;
            sinon.stub(FakeUserModel, 'findOne')
                .returns(expectedUserObj);
            const actualResult = await fakeUser.findByUsername(invalidUsername);
            expect(actualResult).deep.equal(expectedUserObj);
        });
    });

    describe('Test findByPhone() method', () => {
        it("should return object when valid phone number passed", async () => {
            const validPhone = '88213';
            const expectedUserObj = {
                name: 'Jeko',
                phone: '88213',
            };
            sinon.stub(FakeUserModel, 'findOne')
                .returns(expectedUserObj);
            const actualResult = await fakeUser.findByUsername(validPhone);
            expect(actualResult).deep.equal(expectedUserObj);
        });

        it('should return null when invalid phone number passed ', async () => {
            const invalidPhone = '6546';
            const expectedUserObj = null;
            sinon.stub(FakeUserModel, 'findOne')
                .returns(expectedUserObj);
            const actualResult = await fakeUser.findByPhone(invalidPhone);
            expect(actualResult).to.be.null;
        });
    });
});
