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
			"package": "harden",
			"path": "harden/harden.js",
			"file": "harden.js",
			"module": "harden",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/harden.git",
			"test": "harden-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Makes your property-value non-enumerable, non-configurable and non-writable.

		This will check if the property exists, and it will harden the value if the property exists.
	@end-module-documentation
*/

const harden = function harden( property, value, entity ){
	/*;
		@meta-configuration:
			{
				"property:required": [
					"string",
					"symbol",
					"number"
				],
				"value:required": "*",
				"entity:optional": "object"
			}
		@end-meta-configuration
	*/

	if( property === "" ||

		( typeof property != "string" && typeof property != "symbol" && typeof property != "number" ) ||

	 	( typeof property == "number" && isNaN( property ) ) )
	{
		throw new Error( "invalid property" );
	}

	if( typeof entity == "undefined" && arguments.length == 2 ){
		if( typeof this != "undefined" ){
			entity = this;

		}else if( typeof global != "undefined" ){
			entity = global;

		}else if( typeof window != "undefined" ){
			entity = window;

		}else{
			throw new Error( "cannot resolve entity as context" );
		}
	}

	/*;
		@note:
			Checking if key exists is intensive because we can define an undefined property
				and the key will still exists.
		@end-note
	*/
	if( typeof entity[ property ] != "undefined" ||

		Object.getOwnPropertyNames( entity ).some( ( key ) => ( key === property ) ) ||

		( typeof property == "symbol" &&
			Object.getOwnPropertySymbols( entity )
				.some( ( symbol ) => ( symbol === property ) ) ) )
	{
		return entity;
	}

	try{
		Object.defineProperty( entity, property, {
			"value": value,

			"configurable": false,
			"enumerable": false,
			"writable": false
		} );

	}catch( error ){
		throw new Error( `cannot harden property, ${ property }, ${ error.stack }` );
	}

	return entity;
};

module.exports = harden;
