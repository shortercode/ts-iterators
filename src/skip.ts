export function skip<T> (iterable: Iterable<T>, count: number): Iterable<T> {
	const iterator = iterable[Symbol.iterator]();
	for (let i = 0; i < count; i += 1) {
		iterator.next();
	}
	return {
		[Symbol.iterator] () {
			return iterator;
		}
	};
}