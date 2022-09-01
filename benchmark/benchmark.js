/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var randu = require( '@stdlib/random-base-randu' );
var isArrayArray = require( '@stdlib/assert-is-array-array' );
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var strides2offset = require( '@stdlib/ndarray-base-strides2offset' );
var numel = require( '@stdlib/ndarray-base-numel' );
var pkg = require( './../package.json' ).name;
var ndarray2array = require( './../lib' );


// MAIN //

bench( pkg+':order=row-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var order;
	var shape;
	var len;
	var out;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'row-major';
	len = numel( shape );
	strides = shape2strides( shape, order );
	offset = strides2offset( shape, strides );

	buffer = [];
	for ( i = 0; i < len; i++ ) {
		buffer.push( i );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		strides[ 1 ] *= ( randu() < 0.5 ) ? -1 : 1;
		out = ndarray2array( buffer, shape, strides, offset, order );
		if ( out.length !== shape[ 0 ] ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if (
		!isArrayArray( out ) ||
		!isArrayArray( out[ 0 ] )
	) {
		b.fail( 'should return an array of arrays' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':order=column-major', function benchmark( b ) {
	var strides;
	var buffer;
	var offset;
	var order;
	var shape;
	var len;
	var out;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'column-major';
	len = numel( shape );
	strides = shape2strides( shape, order );
	offset = strides2offset( shape, strides );

	buffer = [];
	for ( i = 0; i < len; i++ ) {
		buffer.push( i );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		strides[ 1 ] *= ( randu() < 0.5 ) ? -1 : 1;
		out = ndarray2array( buffer, shape, strides, offset, order );
		if ( out.length !== shape[ 0 ] ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if (
		!isArrayArray( out ) ||
		!isArrayArray( out[ 0 ] )
	) {
		b.fail( 'should return an array of arrays' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
