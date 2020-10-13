export function reverse<I> (iterable: Iterable<I>): Iterable<I> {
	const arr = Array.from(iterable);
	return arr.reverse();
}