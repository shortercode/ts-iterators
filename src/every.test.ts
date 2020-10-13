import { every } from './every';

test('passes when all pass test', () => {
	const result = every([1, 2, 3], v => v > 0);
	expect(result).toBe(true);
});
test('fails when first fails test', () => {
	const result = every([1, 2, 3], v => v > 1);
	expect(result).toBe(false);
});
test('fails when last fails test', () => {
	const result = every([1, 2, 3, 4, 5, 6, 7], v => v < 7);
	expect(result).toBe(false);
});