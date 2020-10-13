export function findIndex<I> (iterable: Iterable<I>, fn: (element: I) => unknown): number {
	let i = 0;
	for (const elem of iterable) {
		if (fn(elem)) {
			return i;
		}
		i += 1;
	}
	return -1;
}