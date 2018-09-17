"use strict";

/*;
	@submodule-license:
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
	@end-submodule-license

	@submodule-configuration:
		{
			"package": "bse",
			"path": "bse/base.module.js",
			"file": "base.module.js",
			"module": "bse",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/bse.git",
			"test": "bse-test.js",
			"global": false,
			"internal": true,
			"class": true
		}
	@end-submodule-configuration

	@submodule-documentation:
		Base class construct.

		The purpose of this class is to facilitate the base conversion.
		This should not contain ways of introspection.
	@end-submodule-documentation

	@include:
		{
			"falzy": "falzy"
		}
	@end-include
*/

const falzy = require( "falzy" );

const EMPTY_STRING = "";

const ENCODE = "encode";
const DECODE = "decode";
const IDLE = "idle";

const ERROR = Symbol( "error" );
const RESULT = Symbol( "result" );
const MODE = Symbol( "mode" );
const DATA = Symbol( "data" );

class Base {
	constructor( data, base ){
		/*;
			@meta-configuration:
				{
					"data": "*",
					"base": "number"
				}
			@end-meta-configuration
		*/

		if(
			typeof base != "number"
			|| isNaN( base )
			|| !isFinite( base )
			|| base < 2
		){
			throw new Error( `invalid base, ${ base }` );
		}

		this[ DATA ] = this.parse( data );
		this[ RESULT ] = EMPTY_STRING;
		this[ MODE ] = IDLE;
		this[ ERROR ] = null;
	}

	/*;
		@method-documentation:
			Parse the data to make it compatible for conversion.
		@end-method-documentation

		@note:
			This should be overridden if possible.
		@end-note
	*/
	parse( data ){
		/*;
			@meta-configuration:
				{
					"data": "*"
				}
			@end-meta-configuration
		*/

		if( falzy( data ) ){
			data = EMPTY_STRING;
		}

		try{
			return `${ data }`;

		}catch( error ){
			this.setError( new Error( `cannot parse data, ${ error.stack }` ) );

			return data;
		}
	}

	/*;
		@method-documentation:
			Encode the data.
		@end-method-documentation

		@note:
			This should be overridden.
		@end-note
	*/
	encode( done ){
		/*;
			@meta-configuration:
				{
					"done": "function"
				}
			@end-meta-configuration
		*/

		this.setEncodeMode( );

		try{
			if( typeof done == "function" ){
				done.call( this, null, EMPTY_STRING );

				return this;

			}else{
				return EMPTY_STRING;
			}

		}finally{
			this.setResult( EMPTY_STRING );

			done = undefined;
		}
	}

	/*;
		@method-documentation:
			Decode the data.
		@end-method-documentation

		@note:
			This should be overridden.
		@end-note
	*/
	decode( done ){
		/*;
			@meta-configuration:
				{
					"done": "function"
				}
			@end-meta-configuration
		*/

		this.setDecodeMode( );

		try{
			if( typeof done == "function" ){
				done.call( this, null, EMPTY_STRING );

				return this;

			}else{
				return EMPTY_STRING;
			}

		}finally{
			this.setResult( EMPTY_STRING );

			done = undefined;
		}
	}

	clear( ){
		this[ RESULT ] = EMPTY_STRING;
		this[ ERROR ] = null;
		this[ MODE ] = IDLE;
	}

	flush( ){
		this.clear( );
		this[ DATA ] = EMPTY_STRING;
	}

	setEncodeMode( ){
		this[ MODE ] = ENCODE;

		return this;
	}

	isEncodeMode( ){
		return this[ MODE ] === ENCODE;
	}

	setDecodeMode( ){
		this[ MODE ] = DECODE;

		return this;
	}

	isDecodeMode( ){
		return this[ MODE ] === DECODE;
	}

	setIdleMode( ){
		this[ MODE ] = IDLE;

		return this;
	}

	isIdleMode( ){
		return this[ MODE ] === IDLE;
	}

	getData( ){
		return this[ DATA ];
	}

	setResult( result ){
		/*;
			@meta-configuration:
				{
					"result": "*"
				}
			@end-meta-configuration
		*/

		this[ RESULT ] = result;

		return this;
	}

	getResult( ){
		return this[ RESULT ];
	}

	setError( error ){
		/*;
			@meta-configuration:
				{
					"error": Error
				}
			@end-meta-configuration
		*/

		if( error instanceof Error ){
			this[ ERROR ] = error;
		}

		return this;
	}

	hasError( ){
		return this[ ERROR ] instanceof Error;
	}

	getError( ){
		return this[ ERROR ];
	}
}

module.exports = Base;
