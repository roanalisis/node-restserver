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
			"package": "portel",
			"path": "portel/portel.js",
			"file": "portel.js",
			"module": "portel",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/portel.git",
			"test": "portel-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Transform non-object entity to object entity.
	@end-module-documentation

	@include:
		{
			"blon": "blon",
			"fno": "fno",
			"glyo": "glyo",
			"ndfo": "ndfo",
			"nol": "nol",
			"numo": "numo",
			"objo": "objo",
			"protype": "protype",
			"stro": "stro"
		}
	@end-include
*/

const blon = require( "blon" );
const fno = require( "fno" );
const glyo = require( "glyo" );
const ndfo = require( "ndfo" );
const nol = require( "nol" );
const numo = require( "numo" );
const objo = require( "objo" );
const protype = require( "protype" );
const stro = require( "stro" );

const portel = function portel( entity ){
	/*;
		@meta-configuration:
			{
				"entity:required": "*"
			}
		@end-meta-configuration
	*/

	switch( protype( entity ).type ){
		case BOOLEAN:
			return blon( entity );

		case FUNCTION:
			return fno( entity );

		case NUMBER:
			return numo( entity );

		case OBJECT:
			if( entity === null ){
				return nol( entity );
			}

			return objo( entity );

		case STRING:
			return stro( entity );

		case SYMBOL:
			return glyo( entity );

		case UNDEFINED:
			return ndfo( entity );

		default:
			throw new Error( "cannot transform to object type" );
	}
};

module.exports = portel;
