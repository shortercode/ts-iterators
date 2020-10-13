export function* chunk<I> (iterable: Iterable<I>, test: (a: I, b: I, i: number) => boolean): Iterable<I[]> {
	let buffer: I[] = [];
	let previous: I | null = null;
	let i = 0;
	for (const item of iterable) {
		if (buffer.length > 0 && previous !== null && !test(previous, item, i)) {
			const result = buffer;
			buffer = [];
			previous = null;
			yield result;
		}
		i += 1;
		buffer.push(item);
		previous = item;
	}
	if (buffer.length > 0) { 
		yield buffer;
	}
}