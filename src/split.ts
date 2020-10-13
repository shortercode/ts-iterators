export function* split<I, A, B> (iterable: Iterable<I>, fn_a: (element: I) => A, fn_b: (element: I) => B): Iterable<[A, B]> {
	for (const elem of iterable) {
		yield [fn_a(elem),fn_b(elem)];
	}
}