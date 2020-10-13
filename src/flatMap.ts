export function* flatMap<I, O> (iterable: Iterable<I>, fn: (element: I) => Iterable<O>): Iterable<O> {
	for (const elem of iterable) {
		yield* fn(elem);
	}
}