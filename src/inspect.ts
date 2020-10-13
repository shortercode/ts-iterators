export function *inspect<T> (input: Iterable<T>, fn: (element: T) => void): Iterable<T> {
	for (const elem of input) {
		fn(elem);
		yield elem;
	}
}