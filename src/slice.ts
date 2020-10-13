function resolveIndexOffset (index: number, length: number): number {
	if (index < 0) {
		return Math.max(0, length - Math.floor(index));
	}
	else {
		return Math.min(length, Math.floor(index));
	}
}

export function* slice<I> (iterable: Iterable<I>, start?: number, end?: number): Iterable<I> {
	const arr = Array.from(iterable);

	const startOffset = resolveIndexOffset(start ?? 0, arr.length);
	const endOffset = resolveIndexOffset(end ?? arr.length, arr.length);

	for (let i = startOffset; i < endOffset; i++) {
		yield arr[i];
	}
}