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
			"package": "protype",
			"path": "protype/protype.js",
			"file": "protype.js",
			"module": "protype",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/protype.git",
			"test": "protype-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Determine type of property.

		Passing multiple type will do try to match any one of it.

		Passing appended type will do negated evaluation.
			It should not pass all type given.
	@end-module-documentation

	@include:
		{
			"cemento": "cemento",
			"harden": "harden"
		}
	@end-include
*/

const cemento = require( "cemento" );
const harden = require( "harden" );

harden( "STRING", "string" );
harden( "NUMBER", "number" );
harden( "BOOLEAN", "boolean" );
harden( "FUNCTION", "function" );
harden( "OBJECT", "object" );
harden( "UNDEFINED", "undefined" );
harden( "SYMBOL", "symbol" );

const TYPE_LIST = [
	STRING,
	NUMBER,
	BOOLEAN,
	FUNCTION,
	OBJECT,
	UNDEFINED,
	SYMBOL
];

/*;
	@note:
		This will let us determine if we can match using AND condition.

		Since a value cannot be of both type, this will be used for reversed negated evaluation.
	@end-note
*/
const STRICT_TYPE_PATTERN = new RegExp( `^(${ TYPE_LIST.join( "|" ) }){2,}$` );
const TYPE_PATTERN = new RegExp( `(${ TYPE_LIST.join( "|" ) })(?!.*\\1)`, "g" );

const protype = function protype( property, type ){
	/*;
		@meta-configuration:
			{
				"property:required": "*",
				"type": [
					"string",
					STRING,
					NUMBER,
					BOOLEAN,
					FUNCTION,
					OBJECT,
					UNDEFINED,
					SYMBOL,
					"...",
					Array
				]
			}
		@end-meta-configuration
	*/

	if(
		type != ""
		&& typeof type == "string"
		&& STRICT_TYPE_PATTERN.test( type )
	){
		type = type.match( TYPE_PATTERN ) || [ ];

		if( type.length > 1 ){
			/*;
				@note:
					This is a reversed negated feature.
				@end-note
			*/
			return !type.every( ( type ) => ( typeof property != type ) );

		}else{
			return false;
		}
	}

	if(
		arguments.length > 1
		&& type !== STRING
		&& type !== NUMBER
		&& type !== BOOLEAN
		&& type !== FUNCTION
		&& type !== OBJECT
		&& type !== UNDEFINED
		&& type !== SYMBOL
	){
		return false;
	}

	if( type ){
		if( arguments.length == 2 ){
			if( typeof type != "string" ){
				return false;
			}

			return typeof property == type;
		}

		return (
			( Array.from( arguments )
				.splice( 1 ).join( "" )
				.replace( /\[|\]|\s+|\,/g, "" )
				.match( TYPE_PATTERN ) || [ ] )
				.some( ( type ) => ( typeof property == type ) )
		);

	}else{
		return cemento( {
			"STRING": ( typeof property == STRING ),
			"NUMBER": ( typeof property == NUMBER ),
			"BOOLEAN": ( typeof property == BOOLEAN ),
			"FUNCTION": ( typeof property == FUNCTION ),
			"OBJECT": ( typeof property == OBJECT ),
			"UNDEFINED": ( typeof property == UNDEFINED ),
			"SYMBOL": ( typeof property == SYMBOL ),
			"type": ( typeof property )
		} );
	}
};

module.exports = protype;
