export function last<I> (iterable: Iterable<I>): I | null {
	let previous: I | null = null;
	for (const value of iterable) {
		previous = value;
	}
	return previous;
}