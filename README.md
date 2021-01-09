
Aggregation
===========

Aggregation of Base Class and Mixin Classes

<p/>
<img src="https://nodei.co/npm/aggregation.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/aggregation.png" alt=""/>

About
-----

Aggregation is a very small JavaScript library for Node.js environments,
providing just a single function, for use in ECMAScript 5/6 class
inheritance based on mixins. It aggregates a base class and one or
more mixin classes into an aggregate class, which then is usually
subsequently used as the base class for another class.

Installation
------------

```shell
$ npm install aggregation
```

Usage
-----

#### ECMAScript 6

```js
var aggregation = require("aggregation/es6")

class Colored {
    initializer ()     { this._color = "white" }
    get color ()       { return this._color }
    set color (v)      { this._color = v }
}

class ZCoord {
    initializer ()     { this._z = 0 }
    get z ()           { return this._z }
    set z (v)          { this._z = v }
}

class Shape {
    constructor (x, y) { this._x = x; this._y = y }
    get x ()           { return this._x }
    set x (v)          { this._x = v }
    get y ()           { return this._y }
    set y (v)          { this._y = v }
}

class Rectangle extends aggregation(Shape, Colored, ZCoord) {}

var rect = new Rectangle(7, 42)
rect.z     = 1000
rect.color = "red"
```

#### ECMAScript 5

```js
var aggregation = require("aggregation/es5")

var Colored = function () {}
Colored.prototype = {
    initializer: function ()  { this._color = "white" },
    getColor:    function ()  { return this._color },
    setColor:    function (v) { this._color = v }
}

var ZCoord = function () {}
ZCoord.prototype = {
    initializer: function ()  { this._z = 0 },
    getZ:        function ()  { return this._z },
    setZ:        function (v) { this._z = v }
}

var Shape = function (x, y) {
    this._x = x
    this._y = y
}
Shape.prototype = {
    getX: function ()  { return this._x },
    setX: function (v) { this._x = v },
    getY: function ()  { return this._y },
    setY: function (v) { this._y = v }
}

var _Combined = aggregation(Shape, Colored, ZCoord)
var Rectangle = function (x, y) {
    _Combined.call(this, x, y)
}
Rectangle.prototype = Object.create(_Combined.prototype)
Rectangle.prototype.constructor = Rectangle

var rect = new Rectangle(7, 42)
rect.setZ(1000)
rect.setColor("red")
```

License
-------

Copyright (c) 2015-2021 Dr. Ralf S. Engelschall (http://engelschall.com/)

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

