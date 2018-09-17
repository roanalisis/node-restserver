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
			"package": "ndfo",
			"path": "ndfo/undefined.module.js",
			"file": "undefined.module.js",
			"module": "ndfo",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/ndfo.git",
			"test": "ndfo-test.js",
			"global": false,
			"internal": true,
			"class": true
		}
	@end-submodule-configuration

	@submodule-documentation:
		Undefined class wrapper.
	@end-submodule-documentation

	@include:
		{
			"ehm": "ehm"
		}
	@end-include
*/

const Meta = require( "ehm" )( );

const EMPTY_STRING = "";
const UNDEFINED = undefined;
const SERIALIZE_UNDEFINED_TAG = "[undefined Undefined:undefined]";
const META_SERIALIZE_UNDEFINED_TAG = Meta.create( UNDEFINED ).serialize( );

class Undefined extends Meta {
	static [ Symbol.hasInstance ]( instance ){
		return (
			typeof instance == "undefined"
			|| Meta.instanceOf( instance, this )
		);
	}

	static deserialize( data, parser, blueprint ){
		/*;
			@meta-configuration:
				{
					"data": "*",
					"parser": "function",
					"blueprint": "function"
				}
			@end-meta-configuration
		*/

		let entity = Meta.deserialize( data, parser, this );

		if( entity.isCorrupted( ) ){
			return entity.revert( );
		}

		return entity;
	}

	static isCompatible( tag ){
		return (
			tag === SERIALIZE_UNDEFINED_TAG
			|| tag === META_SERIALIZE_UNDEFINED_TAG
		);
	};

	constructor( entity ){
		super( entity, "Undefined" );
	}

	check( entity ){
		return typeof entity == "undefined";
	}

	get [ Meta.BOOLEAN ]( ){
		return false;
	}

	get [ Meta.STRING ]( ){
		return EMPTY_STRING;
	}

	get [ Meta.NUMBER ]( ){
		return NaN;
	}

	serialize( parser ){
		/*;
			@meta-configuration:
				{
					"parser": "function"
				}
			@end-meta-configuration
		*/

		return SERIALIZE_UNDEFINED_TAG;
	}

	isEqual( entity ){
		return (
			entity instanceof Undefined
			|| typeof entity == "undefined"
		);
	}
}

module.exports = Undefined;
