export function first<I> (iterable: Iterable<I>): I | null {
	for (const value of iterable) {
		return value;
	}
	return null;
}