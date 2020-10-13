export function every<I> (iterable: Iterable<I>, fn: (element: I) => unknown): boolean {
	for (const elem of iterable) {
		if (!fn(elem)) {
			return false;
		}
	}
	return true;
}