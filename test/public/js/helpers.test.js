/* eslint no-unused-expressions: 0 */
const {
    expect,
} = require('chai');

const {
    helpers,
} = require('../../../public/js/helpers');

describe('Test helpers object', () => {
    let fakeHelpers = null;

    beforeEach(() => {
        fakeHelpers = helpers;
    });

    describe('Property test', () => {
        it('should have property bootboxMsg', () => {
            const expectedProp = 'bootboxMsg';
            expect(fakeHelpers).to.have.property(expectedProp);
        });
    });
});
