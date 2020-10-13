export function* entries<I> (iterable: Iterable<I>): Iterable<[number, I]> {
	let i = 0;
	for (const elem of iterable) {
		yield [i, elem];
		i += 1;
	}
}