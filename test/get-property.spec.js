const expect = require('chai').expect;
const getProperty = require('../src/get-property');

describe('test', () => {
	it('should equal 10', () => {
		expect(getProperty).to.equal(10);
	});
});
