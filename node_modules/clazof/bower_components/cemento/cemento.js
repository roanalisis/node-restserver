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
			"package": "cemento",
			"path": "cemento/cemento.js",
			"file": "cemento.js",
			"module": "cemento",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/cemento.git",
			"test": "cemento-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Harden properties of entity.

		This will replace enumerable properties with non-enumerable.

		This will freeze the object.
	@end-module-documentation

	@include:
		{
			"harden": "harden",
			"kount": "kount",
		}
	@end-include
*/

const harden = require( "harden" );
const kount = require( "kount" );

const cemento = function cemento( entity, context ){
	/*;
		@meta-configuration:
			{
				"entity:required": "object",
				"context": "object"
			}
		@end-meta-configuration
	*/

	if( typeof entity != "object" || !entity || kount( entity ) == 0 ){
		throw new Error( "invalid entity" );
	}

	let data = entity;
	context = context || entity;

	entity = harden.bind( context );

	Object.keys( data ).forEach( ( property ) => {
		let value = data[ property ];

		try{ delete data[ property ]; }catch( error ){ }

		entity( property, value );
	} );

	try{
		return Object.freeze( context );

	}catch( error ){
		throw new Error( `cannot freeze context, ${ error.stack }` );
	}
};

module.exports = cemento;
