export function compare<I> (a_iterable: Iterable<I>, b_iterable: Iterable<I>, comparitor: (a: I, b: I) => boolean = (a, b) => a === b): boolean {
	const a_iterator = a_iterable[Symbol.iterator]();
	const b_iterator = b_iterable[Symbol.iterator](); 
	
	let a;
	let b;

	do {
		a = a_iterator.next();
		b = b_iterator.next();

		// mismatch in length
		if (a.done !== b.done) {
			return false;
		}
		// NOTE a.done and b.done will always be the same value
		if (a.done || b.done) {
			return true;
		}
		
		if (!comparitor(a.value, b.value)) {
			return false;
		}
	}
	while (!a.done);
	
	// NOTE should be unreachable
	return true;
}