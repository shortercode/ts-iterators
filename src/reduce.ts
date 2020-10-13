export function reduce<I, O>(iterable: Iterable<I>, fn: (acc: O, element: I) => O, initial: O): O {
	let accumulator = initial;
	for (const elem of iterable) {
		accumulator = fn(accumulator, elem);
	}
	return accumulator;
}