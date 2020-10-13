export function join<I> (iterable: Iterable<I>, seperator?: string): string {
	const arr = Array.from(iterable);
	return arr.join(seperator);
}