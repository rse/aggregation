/*
**  Aggregation -- Aggregation of Base Class and Mixin Classes
**  Copyright (c) 2015-2021 Dr. Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/* global require: false */
/* jshint -W030: false */

var expect = require("chai").expect

var aggregation = require("../src/aggregation-es5.js")

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

expect(rect.getX()).to.be.equal(7)
expect(rect.getY()).to.be.equal(42)
expect(rect.getZ()).to.be.equal(1000)
expect(rect.getColor()).to.be.equal("red")

console.log("OK")

