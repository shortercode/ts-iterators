export function find<I> (iterable: Iterable<I>, fn: (element: I) => unknown): I | null {
	for (const elem of iterable) {
		if (fn(elem)) {
			return elem;
		}
	}
	return null;
}