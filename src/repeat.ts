export function* repeat<I>(value: I, n: number): Iterable<I> {
	for (let i = 0; i < n; i++) {
		yield value;
	}
}