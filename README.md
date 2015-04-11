
Aggregation
===========

Class &amp; Mixin Aggregation Utility Function

<p/>
<img src="https://nodei.co/npm/aggregation.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/aggregation.png" alt=""/>

About
-----

Aggregation is a very small JavaScript library, providing ...

Installation
------------

#### Node environments (with NPM package manager):

```shell
$ npm install aggregation
```

#### Browser environments (with Bower package manager):

```shell
$ bower install aggregation
```

Usage
-----

### Main Operations

- `new OSet(): OSet`: [O(1)]<br/>
  Create a new empty set instance.

- `OSet#length(): Number`: [O(1)]<br/>
  Get number of items in the set.

- `OSet#has(key: String): Boolean`: [O(1)]<br/>
  Check whether item exists under `key`.

- `OSet#get(key: String): Object`: [O(1)]<br/>
  Get value of item under `key`.
  If no object exists under `key` the value `undefined` is returned.

- `OSet#set(key: String, val: Object, toFront?: Boolean): OSet`: [O(1)]<br/>
  Set value of item under `key`. If there is already an item stored
  under `key`, replace its value. Else insert as a new item into the set
  (by default to the end of the list of elements,
   or, if `toFront` is `true`, to the start of the list of elements).

- `OSet#del(key: String): OSet`: [O(1)]<br/>
  Delete item under `key`.
  If no object exists under `key` an exception is thrown.

### Convenience Operations

- `OSet#clear(): OSet`: [O(n)]<br/>
  Delete all items under `key`.

- `OSet#keys(): String[]`: [O(n)]<br/>
  Get the list of keys of all items in the set, in insertion order.

- `OSet#values(): Object[]`: [O(n)]<br/>
  Get the list of values of all items in the set, in insertion order.

- `OSet#find(predicate: (val: Object, key: String, order: Number) =&gt; Boolean, ctx: Object): Object[]`: [O(n)]<br/>
  Iterate over all items in the set, in insertion order, and call
  the `predicate` function for each object. The function receives the
  item value, the item key and the iteration order (starting from
  zero and steadily increasing). If `predicate` returns `true`
  the item is placed into the result array of items.

- `OSet#each(iterator: (val: Object, key: String, order: Number) =&gt; Void, ctx: Object): Object`: [O(n)]<br/>
  Iterate over all items in the set, in insertion order, and call
  the `iterator` function for each object. The function receives the
  item value, the item key and the iteration order (starting from
  zero and steadily increasing). The function returns the passed `ctx` object.

- `OSet#merge(other: OSet): OSet`: [O(n)]<br/>
  Merge all items of `other` into the set.
  The merged items are removed from `other`.

- `OSet#union(other: OSet): OSet`: [O(n)]<br/>
  Return a new set created through the union of the target set and the
  `other` set. Both the target and the `other` set are not modified.

- `OSet#intersection(other: OSet): OSet`: [O(n)]<br/>
  Return a new set created through the intersection of the target set and the
  `other` set. Both the target and the `other` set are not modified.

- `OSet#difference(other: OSet): OSet`: [O(n)]<br/>
  Return a new set created through the difference/complement of the target set and the
  `other` set. Both the target and the `other` set are not modified.

Implementation Notice
---------------------

Although OSet is written in ECMAScript 6, it is transpiled to ECMAScript
5 and this way runs in really all(!) current (as of 2015) JavaScript
environments, of course.

Internally, OSet is based on a managing all objects in a ring of
double-linked buckets. This way it can achieve the O(1) time complexity
in all its main operations.

License
-------

Copyright (c) 2015 Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

