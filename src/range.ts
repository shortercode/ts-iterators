import type { SizedIterator } from './types/SizedIterator';

export function range(min: number, max: number): SizedIterator<number> {
	if (!(Number.isInteger(min) && Number.isInteger(max))) {
		throw new Error('Expected inputs to be integers');
	}
	if (min > max) {
		throw new Error('Minimum value cannot exceed Maximum');
	}
	let i = min;
	return {
		next (): IteratorResult<number> {
			const value = i;
			i += 1;
			if (i <= max) {
				return {
					value: value
				};
			}
			else {
				return {
					value: i,
					done: true
				};
			}
		},
		length () {
			return max - i; 
		},
		is_empty () {
			return i >= max;
		},
		[Symbol.iterator] () {
			return this;
		}
	};
}