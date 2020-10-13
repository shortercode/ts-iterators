export function* flat<I> (iterable: Iterable<Iterable<I>>): Iterable<I> {
	for (const iter of iterable) {
		yield* iter;
	}
}