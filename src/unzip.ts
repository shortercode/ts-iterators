export function unzip<A, B> (iterable: Iterable<[A, B]>): [ IterableIterator<A>, IterableIterator<B> ] {
	const array = Array.from(iterable);
	let i = 0;
	let ii = 0;
	const l = Math.max(0, array.length - 1);
	return [
		{
			next (): IteratorResult<A> {
				if (i === l) {
					return { value: undefined, done: true };
				}
				else {
					const value = array[i][0];
					i += 1;
					return { value };
				}
			},
			[Symbol.iterator]() {
				return this;
			}
		},
		{
			next (): IteratorResult<B> {
				if (ii === l) {
					return { value: undefined, done: true };
				}
				else {
					const value = array[ii][1];
					ii += 1;
					return { value };
				}
			},
			[Symbol.iterator]() {
				return this;
			}
		}
	];
}