- peekable
	creates an iterator where the next value can be "peeked" without consuming
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
- partition
	splits the iterator into 2 iterators based on a test