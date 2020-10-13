export function some<I> (iterable: Iterable<I>, fn: (element: I) => unknown): boolean {
	for (const elem of iterable) {
		if (fn(elem)) {
			return true;
		}
	}
	return false;
}