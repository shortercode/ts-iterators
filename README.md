![Test](https://github.com/shortercode/ts-iterators/workflows/Test/badge.svg)
# ts-iterators

Ever been frustrated that you can't sort a `Set`, or get the first 10 elements in a `Map`? Well now you can! TS iterators offers a comprehensive collection of functions that operate on any `Iterable` values, and return `Iterable`s in turn. This includes all the common JS `Array` methods; such as `map`, `sort`, `reduce` and `slice`! Some additional ones inspired by Rust, and a few new ones.

## Why Iterators?

JS iterators are a very powerful. On a simple level they provide a standardised interface for accessing the element of any type of collections. At a more complex level iterators *pull* their values from their source, one element at a time. So they do not need to copy the entire contents of the collection. Even more clever is that the source doesn't need to be a collection, it could be a *generator* which creates a new value each time it pulled upon. This lazy nature means that if you only need to process part of a list, you only have to do the work for those values! Saving processing time and memory.

The hardest part of dealing with iterators in JS is that all the clever helpers for dealing with collections are methods on Arrays. While it's trivial to convert an iterator into an array you lose out on many of the advantages of using an iterator, making it is very wasteful. Hence the creation of this collection. Whereever possible everything is done without collecting up the entries of an iterator, and just works on an element by element basis. Outputs are also iterable values, allowing for easy composition, and of course everything is nicely typed to make it easy to use.

## Example 

Here is a simple example of composing a source (`range`), two operators (`filter` and `map`) and a consumer (`join`).
```typescript
import { range, filter, map, join } from 'ts-iterators';

function isEven (value: number): boolean {
	return (v % 2) === 0;
}

let values: Iterable<number> = range(1, 10);
let even: Iterable<number> = filter(values, isEven);
let inverse: Iterable<string> = map(even, (v: number) => `${v} = ${1 / v}`)

console.log(join(inverse, '\n'))
```

## Common gotcha

```typescript
import { map } from 'ts-iterators'
map([1, 2, 3], console.log);
```

At first glance the above code looks perfectly correct. However, it doesn't log anything. Why is that? The answer is that `map` is an operator, not a consumer. Hence it does not consume it's source when used but rather creates a new source that _can_ be consumed, which in turn consumes it's source. An easy way to consume an iterator is by using the spread operator like so.

```typescript
import { map } from 'ts-iterators'
const incremented = map([1, 2, 3], v => v + 1);
console.log(...incremented); // 2, 3, 4
```

It's not uncommon to use `Array.map` to iterate over a map and then not use the new array it creates, mainly because it's more succinct than `Array.forEach`. But in the case of iterators the difference is a bit more stark, as the function isn't called *unless you use the return value*. You can just use forEach instead though:

```typescript
import { forEach } from 'ts-iterators'
forEach([1, 2, 3], console.log);
// 1
// 2
// 3
```

## Sources
A source creates a new iterable value based on a set of parameters.

- `range`
- `entries`
- `fromArray`
- `fromIterator`
- `infinity`
- `keys`
- `of`
- `range`
- `repeat`

## Operators
An operator takes 1 or more iterable values, performs an *operation* on them and emits 1 or more new iterable values containing the output.

- `buffer`
- `chunk`
- `concat`
- `duplicate`
- `fill`
- `filter`
- `flat`
- `flatMap`
- `map`
- `reverse`
- `skip`
- `slice`
- `sort`
- `split`
- `unzip`
- `zip`

## Consumers
A consumer takes 1 or more iterable values, consumes their values and emits some form of output.

- `compare`
- `every`
- `find`
- `findIndex`
- `first`
- `forEach`
- `includes`
- `indexOf`
- `join`
- `last`
- `lastIndexOf`
- `length`
- `reduce`
- `reduceRight`
- `some`
