const arrToString = require('./arrToString');



describe('arrToString', () => {
	test('Correct value', () => {
		expect(arrToString([1,2,3,4,5])).toEqual(['1','2','3','4','5']);
	})
	test('Incorrect value with null & undefined', () => {
		expect(arrToString([1,2,3,4,5, null, undefined])).toEqual(['1','2','3','4','5']);
	})
	test('Incorrect value empty array', () => {
		expect(arrToString([])).toEqual([]);
	})
	test('Incorrect value string', () => {
		expect(arrToString(['string'])).toEqual([]);
	})
	test('Correct value', () => {
		expect(arrToString([1,2,3,4,5])).not.toEqual([1,2,3,4,5]);
	})
})