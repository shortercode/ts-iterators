import { concat } from './concat';
 
test('joins 2 arrays', () => {
	const a = [5, 6, 7];
	const b = [2, 3, 4];
	const iter = concat(a, b);

	expect(Array.from(iter)).toEqual([5, 6, 7, 2, 3, 4]);
});