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
			"package": "blon",
			"path": "blon/blon.js",
			"file": "blon.js",
			"module": "blon",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/blon.git",
			"test": "blon-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Boolean object class wrapper.
	@end-module-documentation

	@include:
		{
			"ehm": "ehm",
			"harden": "harden"
		}
	@end-include
*/

const harden = require( "harden" );

const Meta = require( "ehm" )( );

//: @server:
const State = require( "./state.js" );
//: @end-server



const blon = function blon( entity ){
	/*;
		@meta-configuration:
			{
				"entity:required": "boolean"
			}
		@end-meta-configuration
	*/

	if( typeof entity != "boolean" ){
		throw new Error( "invalid boolean entity" );
	}

	return Meta.create( State, entity );
};

harden( "State", State, blon );
harden( "State", State, Meta );

module.exports = blon;
