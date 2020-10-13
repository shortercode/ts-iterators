export function* keys<I> (iterable: Iterable<I>): Iterable<number> {
	let i = 0;
	const iter = iterable[Symbol.iterator]();
	while (!iter.next().done) {
		yield i;
		i += 1;
	}
}