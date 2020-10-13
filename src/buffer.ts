import { BufferedIterator } from './types/BufferedIterator';

export function buffer<I> (iterable: Iterable<I>): BufferedIterator<I> {
	const arr = Array.from(iterable);
	let i = 0;
	return {
		next (): IteratorResult<I> {
			if (this.done()) {
				const value = arr[i];
				i += 1;
				return { value };
			}
			else {
				return {
					value: null,
					done: true
				};
			}
		},
		peek (offset = 0): I | undefined {
			const index = i + offset;
			if (index >= 0 || index < arr.length) {
				return arr[i + offset];
			}
			return undefined;
		},
		back () {
			if (i > 0) {
				i--;
			}
		},
		consume (): I | undefined {
			if (!this.done()) {
				const value = arr[i];
				i += 1;
				return value;
			}
			return undefined;
		},
		done (): boolean {
			return i >= arr.length;
		},
		offset (): number {
			return i;
		}
	};
}