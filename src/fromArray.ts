import { DoubleEndedIterator } from './types/DoubleEndedIterator';
import { SizedIterator } from './types/SizedIterator';

export function fromArray<T> (array: T[]): DoubleEndedIterator<T> & SizedIterator<T> {
	let i = 0;
	let ii = Math.max(0, array.length - 1);
	return {
		next (): IteratorResult<T> {
			if (ii === i) {
				return { value: undefined, done: true };
			}
			else {
				const value = array[i];
				i += 1;
				return { value };
			}
		},
		next_back (): IteratorResult<T> {
			if (ii === i) {
				return { value: undefined, done: true };
			}
			else {
				const value = array[ii];
				ii -= 1;
				return { value };
			}
		},
		is_empty () {
			return ii === i;
		},
		length () {
			return ii - i;
		},
		[Symbol.iterator] () {
			return this;
		}
	};
}