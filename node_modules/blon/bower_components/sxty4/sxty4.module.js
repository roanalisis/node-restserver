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
			"package": "sxty4",
			"path": "sxty4/sxty4.js",
			"file": "sxty4.js",
			"module": "sxty4",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/sxty4.git",
			"test": "test.module.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Base 64 string encoding and decoding with url safety.
	@end-module-documentation

	@include:
		{
			"falzy": "falzy",
			"harden": "harden"
		}
	@end-include
*/

const falzy = require( "falzy" );
const harden = require( "harden" );

//: @server:
const Base64 = require( "./base64.js" );
//: @end-server

//: @client:
const Base64 = require( "./base64.support.js" );
//: @end-client

const sxty4 = function sxty4( data ){
	/*;
		@meta-configuration:
			{
				"data:required": "string"
			}
		@end-meta-configuration
	*/

	if( falzy( data ) || typeof data != "string" ){
		throw new Error( "invalid data" );
	}

	return ( new Base64( data ) );
};

harden( "Base64", Base64, sxty4 );

module.exports = sxty4;
