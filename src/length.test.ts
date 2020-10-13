import { length } from './length';

test('zero length string', () => {
	expect(length('')).toBe(0);
});
test('sparse array', () => {
	expect(length(Array(5))).toBe(5);
});
test('simple string', () => {
	expect(length('Hello world')).toBe(11);
});
test('complex string', () => {
	expect(length('👩‍❤️‍👩')).toBe(6);
});