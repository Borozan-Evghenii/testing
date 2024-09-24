const delay = require('./delay');



describe('delay', () => {
	test('should return delay', async () => {
		const result  =  await delay(() => 5+5 , 1000);
		expect(result).toBe(10);
	})
})