const expect = require('chai').expect;
const getProperty = require('../src/get-property');

describe('get-property', () => {
	it('should return the expected top-level value', () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3
		};
		const result = getProperty(obj, 'a');

		expect(result).to.equal(1);
	});

	it('should return a nested value', () => {
		const obj = {
			a: {
				b: 1,
				c: 2
			}
		};
		const result = getProperty(obj, 'a.b');

		expect(result).to.equal(1);
	});

	it('should return a deeply nested value', () => {
		const obj = {
			a: {
				b: {
					c: {
						d: {
							e: 3,
							f: 'g'
						}
					},
					h: 'i'
				}
			}
		};
		const result = getProperty(obj, 'a.b.c.d');

		expect(result).to.deep.equal({
			e: 3,
			f: 'g'
		});
	});

	it('should return undefined when a property in the object does not exist', () => {
		const obj = {
			a: {
				b: 'c'
			}
		};

		const result = getProperty(obj, 'a.d');

		expect(result).to.be.undefined;
	});
});
