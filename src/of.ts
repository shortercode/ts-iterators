export function* of<I> (...elements: I[]): Iterable<I> {
	for (const elem of elements) {
		yield elem;
	}
}