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
			"package": "raze",
			"path": "raze/raze.js",
			"file": "raze.js",
			"module": "raze",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/raze.git",
			"test": "raze-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Convert entity to Array instance.

		This will always return a new array.
	@end-module-documentation
*/

const ARGUMENTS_PATTERN = /^\[object Arguments\]$/;

const raze = function raze( entity ){
	/*;
		@meta-configuration:
			{
				"entity:required": "*"
			}
		@end-meta-configuration
	*/

	/*;
		@note:
			If entity is falsy, return empty array.
		@end-note
	*/
	if(
		( typeof entity == "undefined" ) ||
		( typeof entity == "string" && entity.length == 0 ) ||
		( typeof entity == "object" && entity == null ) ||
		( typeof entity == "number" && isNaN( entity ) )
	){
		return [ ];
	}

	/*;
		@note:
			All arrays, array-like, iterable, are object (with rare exception*)

			Non-objects take up the first position of the array.

			* Functions with Symbol.iterable might be an exception but chances
				of this being implemented is rare considering no practical use cases
				as of the moment.
		@end-note
	*/
	if( typeof entity != "object" ){
		return [ entity ];
	}

	try{
		let array = Array.from( entity );

		/*;
			@note:
				If the array result is empty, then check if it is an argument entity,
					else return the entity as the first position in the object because
					the object is not absorbed because the object is not array-like or
					iterable.
			@end-note
		*/
		if( array.length === 0 ){
			if( ARGUMENTS_PATTERN.test( `${ entity }` ) ){
				return array;
			}

			if( Array.isArray( entity ) ){
				return array;
			}

			return [ entity ];
		}

		return array;

	}catch( error ){
		return [ ];
	}
};

module.exports = raze;
