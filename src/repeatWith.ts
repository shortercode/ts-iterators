export function* repeatWith<T> (iterations: number, fn: (i: number) => T): Iterable<T> {
	for (let i = 0; i < iterations; i += 1) {
		yield fn(i);
	}
}