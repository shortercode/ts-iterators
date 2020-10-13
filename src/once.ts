export function once<T> (value: T): Iterable<T> {
	return [value];
}