import { entries } from './entries';

test('', () => {
	const itr = entries([4, 5, 6]);
	expect([...itr]).toEqual([
		[0, 4],
		[1, 5],
		[2, 6]
	]);
});