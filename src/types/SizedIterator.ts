export interface SizedIterator<T> extends IterableIterator<T> {
	length (): number;
	is_empty (): boolean;
}