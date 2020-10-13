import { fill } from './fill';

test('', () => {
	const result = fill([2, 6, 1, 7, 3], 'hi');
	expect([...result]).toEqual(['hi', 'hi', 'hi', 'hi', 'hi']);
});