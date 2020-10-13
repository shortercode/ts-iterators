export function lastIndexOf<I> (iterable: Iterable<I>, value: I): number {
	const arr = Array.from(iterable);
	return arr.lastIndexOf(value);
}