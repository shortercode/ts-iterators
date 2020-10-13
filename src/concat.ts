export function* concat<A, B> (iterable_a: Iterable<A>, iterable_b: Iterable<B>): Iterable<A|B> {
	for (const elem of iterable_a) {
		yield elem;
	}
	for (const elem of iterable_b) {
		yield elem;
	}
}