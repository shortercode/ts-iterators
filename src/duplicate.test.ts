import { duplicate } from './duplicate';

test('produces 2 independant copies', () => {
	const [a, b] = duplicate([4, 8, 2]);
	expect([...a]).toEqual([4, 8, 2]);
	expect([...b]).toEqual([4, 8, 2]);
});