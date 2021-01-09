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

import aggregation from "../src/aggregation-es6.js"
import { expect }  from "chai"

(function(){
    "use strict"

    var Colored = class Colored {
        initializer ()     { this._color = "white" }
        get color ()       { return this._color }
        set color (v)      { this._color = v }
    }

    var ZCoord = class ZCoord {
        initializer ()     { this._z = 0 }
        get z ()           { return this._z }
        set z (v)          { this._z = v }
    }

    var Shape = class Shape {
        constructor (x, y) { this._x = x; this._y = y }
        get x ()           { return this._x }
        set x (v)          { this._x = v }
        get y ()           { return this._y }
        set y (v)          { this._y = v }
    }

    var Rectangle = class Rectangle extends aggregation(Shape, Colored, ZCoord) {}

    var rect = new Rectangle(7, 42)
    rect.z     = 1000
    rect.color = "red"

    expect(rect.x).to.be.equal(7)
    expect(rect.y).to.be.equal(42)
    expect(rect.z).to.be.equal(1000)
    expect(rect.color).to.be.equal("red")

    console.log("OK")
})()

