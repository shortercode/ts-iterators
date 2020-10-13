export function* fill<I, O> (iterable: Iterable<I>, value: O): Iterable<O> {
	const iter = iterable[Symbol.iterator]();
	while (!iter.next().done) {
		yield value;
	}
}