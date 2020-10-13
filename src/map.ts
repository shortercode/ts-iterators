export function* map<I, O> (iterable: Iterable<I>, fn: (element: I) => O): Iterable<O> {
	for (const elem of iterable) {
		yield fn(elem);
	}
}