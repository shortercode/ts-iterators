export function indexOf<I> (iterable: Iterable<I>, value: I): number {
	let i = 0;
	for (const elem of iterable) {
		if (elem === value) {
			return i;
		}
		i += 1;
	}
	return -1;
}