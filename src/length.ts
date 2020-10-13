export function length<I> (iterable: Iterable<I>): number {
	let length = 0;
	const iter = iterable[Symbol.iterator]();
	while (!iter.next().done) {
		length += 1;
	}
	return length;
}