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

	it('should return undefined when an invalid path is passed', () => {
		const obj = {
			a: {
				b: 'c'
			}
		};
		const result = getProperty(obj, '.');

		expect(result).to.be.undefined;
	});

	it('should return undefined when no path is passed', () => {
		const obj = {
			a: {
				b: 'c'
			}
		};

		const result = getProperty(obj, '');

		expect(result).to.be.undefined;
	});

	it('should return undefined when no object is passed', () => {
		const result = getProperty();

		expect(result).to.be.undefined;
	});

	describe('when being configured', () => {
		it('should be able to use an alternate delimiter', () => {
			const obj = {
				a: {
					b: 1
				}
			};
			const result = getProperty(obj, 'a-b', {
				delimiter: '-'
			});

			expect(result).to.equal(1);
		});
	});
});
