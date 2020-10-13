export function includes<I> (iterable: Iterable<I>, value: I): boolean {
	for (const elem of iterable) {
		if (elem === value) {
			return true;
		}
	}
	return false;
}