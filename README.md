<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# ndarray2array

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Convert an ndarray buffer to a generic array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-base-to-array
```

</section>

<section class="usage">

## Usage

```javascript
var ndarray2array = require( '@stdlib/ndarray-base-to-array' );
```

#### ndarray2array( buffer, shape, strides, offset, order )

Converts an ndarray buffer to a generic array (which may include nested arrays).

```javascript
var buffer = [ 1, 2, 3, 4 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

var arr = ndarray2array( buffer, shape, strides, offset, order );
// returns [ [ 1, 2 ], [ 3, 4 ] ]
```

The `order` parameter specifies whether an array is `row-major` (C-style) or `column-major` (Fortran-style).

```javascript
var buffer = [ 1, 2, 3, 4 ];
var shape = [ 2, 2 ];
var order = 'column-major';
var strides = [ 1, 2 ];
var offset = 0;

var arr = ndarray2array( buffer, shape, strides, offset, order );
// returns [ [ 1, 3 ], [ 2, 4 ] ]
```

The `offset` parameter specifies the location of the first indexed element based on the `strides` array.

```javascript
var buffer = [ 1, 2, 3, 4 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ -2, -1 ];
var offset = 3;

var arr = ndarray2array( buffer, shape, strides, offset, order );
// returns [ [ 4, 3 ], [ 2, 1 ] ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var strides2offset = require( '@stdlib/ndarray-base-strides2offset' );
var dicreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var ndarray2array = require( '@stdlib/ndarray-base-to-array' );

// Create a data buffer:
var buffer = [];
var i;
for ( i = 0; i < 27; i++ ) {
    buffer.push( i );
}

// Specify array meta data:
var shape = [ 3, 3, 3 ];
var order = 'column-major';
var ndims = shape.length;

// Compute array meta data:
var strides = shape2strides( shape, order );
var offset = strides2offset( shape, strides );

// Print array information:
console.log( '' );
console.log( 'Dims: %s', shape.join( 'x' ) );

// Random flip strides and convert an ndarray to a nested array...
var arr;
var j;
for ( i = 0; i < 20; i++ ) {
    j = dicreteUniform( 0, ndims-1 );
    strides[ j ] *= -1;
    offset = strides2offset( shape, strides );

    console.log( '' );
    console.log( 'Strides: %s', strides.join( ',' ) );
    console.log( 'Offset: %d', offset );

    arr = ndarray2array( buffer, shape, strides, offset, order );
    console.log( JSON.stringify( arr ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-to-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-to-array

[test-image]: https://github.com/stdlib-js/ndarray-base-to-array/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/ndarray-base-to-array/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-to-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-to-array?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-to-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-to-array/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-to-array/main/LICENSE

</section>

<!-- /.links -->