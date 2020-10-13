export interface BufferedIterator<I> extends Iterator<I> {
	peek (offset?: number): I | undefined;
	back (): void;
	done (): boolean;
	consume (): I | undefined;
	offset (): number;
}