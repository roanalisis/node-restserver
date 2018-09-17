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
			"package": "glyph",
			"path": "glyph/glyph.module.js",
			"file": "glyph.module.js",
			"module": "glyph",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/glyph.git",
			"test": "glyph-test.js",
			"global": false,
			"internal": true,
			"class": true
		}
	@end-submodule-configuration

	@submodule-documentation:
		Glyph class wrapper for Symbol.
	@end-submodule-documentation

	@include:
		{
			"ehm": "ehm"
		}
	@end-include
*/

const Meta = require( "ehm" )( );

const SYMBOL_NAME = "Symbol";
const SYMBOL_TYPE = "symbol";

const SERIALIZE_SYMBOL_TAG_PATTERN = /^\[symbol Symbol(?:\:(.+?))?\]$/;

class Glyph extends Meta {
	static [ Symbol.hasInstance ]( instance ){
		/*;
			@meta-configuration:
				{
					"instance:required": "*"
				}
			@end-meta-configuration
		*/

		return (
			typeof instance == SYMBOL_TYPE
			|| instance === Symbol
			|| typeof instance == "function" && instance.name === SYMBOL_NAME
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
		/*;
			@meta-configuration:
				{
					"tag": "string"
				}
			@end-meta-configuration
		*/

		if( typeof tag != "string" ){
			return false;
		}

		return SERIALIZE_SYMBOL_TAG_PATTERN.test( tag );
	}

	constructor( entity ){
		/*;
			@meta-configuration:
				{
					"entity:required": "symbol"
				}
			@end-meta-configuration
		*/

		super( entity, SYMBOL_NAME );
	}

	check( entity ){
		return typeof entity == SYMBOL_TYPE;
	}

	get [ Meta.BOOLEAN ]( ){
		return true;
	}

	get [ Meta.STRING ]( ){
		return this.valueOf( ).toString( );
	}

	get [ Meta.NUMBER ]( ){
		return NaN;
	}

	serialize( ){
		return this.tag( this.stringify( ) );
	}

	isEqual( symbol ){
		if(
			symbol instanceof Glyph
			|| typeof symbol == SYMBOL_TYPE
		){
			return this.toString( ) == symbol.toString( );
		}

		return false;
	}
}

module.exports = Glyph;
