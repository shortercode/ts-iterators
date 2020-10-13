export function* zip<A, B> (a: Iterable<A>, b: Iterable<B>): Iterable<[A, B]> {
	const iter_a = a[Symbol.iterator]();
	const iter_b = b[Symbol.iterator]();
	while (true) {
		const result_a = iter_a.next();
		const result_b = iter_b.next();
		if (result_a.done || result_b.done) {
			break; 
		}
		yield [ result_a.value, result_b.value ];
	}
}