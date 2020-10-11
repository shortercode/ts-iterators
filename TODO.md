- empty
	Creates an iterator with no elements
- repeat_with
	Calls a fn `n` times and return the values as a result
- once
	Creates an iterator with 1 value
- once_with
	Calls a fn once and returns that value as an iterator
- peekable
	creates an iterator where the next value can be "peeked" with consuming
- step
	similar to range but with a given stride
- take
	returns an iterator containing the first `n` values of an iterator
- take_while
	similar to take but using a fn to test the first entries
- nth 
	returns the `n`th value of an iterator
- map_while
	a combination of map and filter, based on the optional return value
- inspect
	calls a fn with the value while passing it through unmodified
- partition
	splits the iterator into 2 iterators based on a test