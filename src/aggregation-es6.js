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

/*  ==== ECMAScript 6 variant ====  */

var aggregation = (base, ...mixins) => {

    /*  create aggregation class  */
    let aggregate = class __Aggregate extends base {
        constructor (...args) {
            /*  call base class constructor  */
            super(...args)

            /*  call mixin's initializer  */
            mixins.forEach((mixin) => {
                if (typeof mixin.prototype.initializer === "function")
                    mixin.prototype.initializer.apply(this, args)
            })
        }
    };

    /*  copy properties  */
    let copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
            if (prop.match(/^(?:initializer|constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                return
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
        })
    }

    /*  copy all properties of all mixins into aggregation class  */
    mixins.forEach((mixin) => {
        copyProps(aggregate.prototype, mixin.prototype)
        copyProps(aggregate, mixin)
    })

    return aggregate
}

module.exports = aggregation

