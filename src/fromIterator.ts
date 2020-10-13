export function fromIterator<T> (iterator: Iterator<T>): Iterable<T> {
	return {
		[Symbol.iterator] () {
			return iterator;
		}
	};
}