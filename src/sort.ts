export function sort<I> (iterable: Iterable<I>, fn: (a: I, b: I) => number): Iterable<I> {
	const arr = Array.from(iterable);
	return arr.sort(fn);
}