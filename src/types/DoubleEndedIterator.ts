export interface DoubleEndedIterator<T> extends Iterator<T> {
	next_back (): IteratorResult<T>
}