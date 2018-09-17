"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "doubt",
			"path": "doubt/doubt.js",
			"file": "doubt.js",
			"module": "doubt",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/doubt.git",
			"test": "doubt-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Checks entity if array, arguments, iterable or array-like.
	@end-module-documentation

	@include:
		{
			"cemento": "cemento",
			"falzy": "falzy",
			"harden": "harden",
			"stringe": "stringe",
			"truly": "truly"
		}
	@end-include
*/

const cemento = require( "cemento" );
const falzy = require( "falzy" );
const harden = require( "harden" );
const stringe = require( "stringe" );
const truly = require( "truly" );

harden( "ARRAY", "array" );
harden( "ARGUMENTS", "arguments" );
harden( "ARRAY_LIKE", "array-like" );
harden( "AS_ARRAY", "as-array" );
harden( "ITERABLE", "iterable" );

const ARGUMENTS_PATTERN = /^\[object Arguments\]$/;

const doubt = function doubt( array, condition ){
	/*;
		@meta-configuration:
			{
				"array:required": [
					"[*]",
					Array,
					"Arguments"
				],
				"condition": [
					"string",
					ARRAY,
					ARGUMENTS,
					ARRAY_LIKE,
					AS_ARRAY,
					ITERABLE
				]
			}
		@end-meta-configuration
	*/

	if( arguments.length == 2 ){
		if(
			falzy( array ) ||
			typeof array == "string" ||
			typeof array == "number" ||
			typeof array == "boolean" ||
			typeof array == "symbol"
		){
			return false;
		}

		if(
			condition !== ARRAY &&
			condition !== AS_ARRAY &&
			condition !== ARGUMENTS &&
			condition !== ARRAY_LIKE &&
			condition !== ITERABLE
		){
			throw new Error( "invalid condition" );
		}

		if( condition == ARRAY ){
			return Array.isArray( array );

		}else if( condition == AS_ARRAY ){
			return (
				doubt( array, ARRAY ) ||
				doubt( array, ARGUMENTS ) ||
				doubt( array, ARRAY_LIKE ) ||
				doubt( array, ITERABLE )
			);

		}else if( condition == ARGUMENTS ){
			return (
				typeof array == "object" &&
				/*;
					@note:
						Do not change this, this should always use stringe!
						Or else other modules will break.
					@end-note
				*/
				ARGUMENTS_PATTERN.test( stringe( array ) )
			);

		}else if( condition == ARRAY_LIKE ){
			return ( typeof array.length == "number" );

		}else if( condition == ITERABLE ){
			return truly( array[ Symbol.iterator ] );

		}else{
			return false;
		}

	}else if( arguments.length == 1 ){
		if(
			falzy( array ) ||
			typeof array == "string" ||
			typeof array == "number" ||
			typeof array == "boolean" ||
			typeof array == "symbol"
		){
			return cemento( {
				"ARRAY": false,
				"AS_ARRAY": false,
				"ARGUMENTS": false,
				"ARRAY_LIKE": false,
				"ITERABLE": false
			} );
		}

		return cemento( {
			"ARRAY": doubt( array, ARRAY ),
			"AS_ARRAY": doubt( array, AS_ARRAY ),
			"ARGUMENTS": doubt( array, ARGUMENTS ),
			"ARRAY_LIKE": doubt( array, ARRAY_LIKE ),
			"ITERABLE": doubt( array, ITERABLE )
		} );

	}else{
		throw new Error( "invalid parameter" );
	}
};

module.exports = doubt;
