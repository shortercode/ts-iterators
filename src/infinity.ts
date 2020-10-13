export function* infinity(): Iterable<number> {
	let i = 0;
	while(true) {
		yield i;
		i += 1;
	}
}