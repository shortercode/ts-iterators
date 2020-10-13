export function* filter<I> (iterable: Iterable<I>, fn: (element: I) => unknown): Iterable<I> {
	for (const elem of iterable) {
		if (fn(elem)) {
			yield elem;
		}
	}
}