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
			"package": "stro",
			"path": "stro/sequence.module.js",
			"file": "sequence.module.js",
			"module": "stro",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/stro.git",
			"test": "stro-test.js",
			"global": false,
			"internal": true,
			"class": true
		}
	@end-submodule-configuration

	@submodule-documentation:
		Sequence class wrapper.
	@end-submodule-documentation

	@include:
		{
			"ehm": "ehm"
		}
	@end-include
*/

const Meta = require( "ehm" )( );

const STRING_NAME = "String";
const STRING_TYPE = "string";

const SERIALIZE_STRING_TAG_PATTERN = /^\[string String(?:\:(.+?))?\]$/;

class Sequence extends Meta {
	static [ Symbol.hasInstance ]( instance ){
		return (
			typeof instance == STRING_TYPE
			|| instance instanceof String
			|| typeof instance == "function" && instance.name === STRING_NAME
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

		return SERIALIZE_STRING_TAG_PATTERN.test( tag );
	}

	constructor( entity ){
		super( entity, STRING_NAME );
	}

	check( entity ){
		return (
			typeof entity == STRING_TYPE
			|| entity instanceof String
		);
	}

	get [ Meta.BOOLEAN ]( ){
		if( this.valueOf( ).length > 0 ){
			return true;
		}

		return false;
	}

	get [ Meta.STRING ]( ){
		return this.valueOf( );
	}

	get [ Meta.NUMBER ]( ){
		return this.valueOf( ).length;
	}

	serialize( parser ){
		/*;
			@meta-configuration:
				{
					"parser": "function"
				}
			@end-meta-configuration
		*/

		return Meta.create( this.valueOf( ) ).serialize( parser );
	}
}

module.exports = Sequence;
