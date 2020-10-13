export function duplicate<I> (iterable: Iterable<I>): [Iterable<I>, Iterable<I>] {
	const arr = Array.from(iterable);
	return [
		arr[Symbol.iterator](),
		arr[Symbol.iterator]()
	];
}