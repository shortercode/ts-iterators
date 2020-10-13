export function forEach<I> (iterable: Iterable<I>, fn: (element: I, index: number, iterable: Iterable<I>) => void): void {
	let i = 0;
	for (const elem of iterable) {
		fn(elem, i, iterable);
		i += 1;
	}
}