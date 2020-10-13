import { range } from './range';

test('basic range', () => {
	expect([...range(0, 5)]).toEqual([0, 1, 2, 3, 4]);
});
test('empty range', () => {
	expect(range(0, 0).is_empty()).toBe(true);
});
test('size', () => {
	expect(range(0, 5).length()).toBe(5);
});