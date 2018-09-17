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
			"package": "sxty4",
			"path": "sxty4/base64.module.js",
			"file": "base64.module.js",
			"module": "sxty4",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/sxty4.git",
			"test": "test.module.js",
			"global": false,
			"internal": true,
			"class": true
		}
	@end-submodule-configuration

	@submodule-documentation:
		Base64 class
	@end-submodule-documentation

	@include:
		{
			"bse": "bse",
			"harden": "harden"
		}
	@end-include
*/

const harden = require( "harden" );

const Base = require( "bse" )( );

const BASE = 64;
const EMPTY_STRING = "";

class Base64 extends Base {
	constructor( data ){
		super( data, BASE );
	}

	encode( done ){
		/*;
			@meta-configuration:
				{
					"done": "function"
				}
			@end-meta-configuration
		*/

		this.setEncodeMode( );

		let data = this.getData( );

		let result = EMPTY_STRING;

		try{
			//: @server:
			result = encodeURIComponent( new Buffer( data ).toString( "base64" ) );
			//: @end-server

			

			if( typeof done == "function" ){
				done.call( this, null, result );

				return this;

			}else{
				return result;
			}

		}catch( error ){
			error = new Error( `cannot encode to base64, ${ data }, ${ error.stack }` );

			this.setError( error );

			if( typeof done == "function" ){
				done.call( this, error, EMPTY_STRING );

				return this;

			}else{
				return EMPTY_STRING;
			}

		}finally{
			this.setResult( result );

			done = undefined;
		}
	}

	decode( done ){
		/*;
			@meta-configuration:
				{
					"done": "function"
				}
			@end-meta-configuration
		*/

		this.setDecodeMode( );

		let data = this.getData( );

		let result = EMPTY_STRING;

		try{
			//: @server:
			result = new Buffer( decodeURIComponent( data ), "base64" ).toString( "utf8" );
			//: @end-server

			

			if( typeof done == "function" ){
				done.call( this, null, result );

				return this;

			}else{
				return result;
			}

		}catch( error ){
			error = new Error( `cannot decode from base64, ${ data }, ${ error.stack }` );

			this.setError( error );

			if( typeof done == "function" ){
				done.call( this, error, EMPTY_STRING );

				return this;

			}else{
				return EMPTY_STRING;
			}

		}finally{
			this.setResult( result );
		}
	}
}

harden( "Base64", Base64, Base );

module.exports = Base64;
