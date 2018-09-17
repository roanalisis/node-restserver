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
			"package": "numo",
			"path": "numo/digit.module.js",
			"file": "digit.module.js",
			"module": "numo",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/numo.git",
			"test": "numo-test.js",
			"global": false,
			"internal": true,
			"class": true
		}
	@end-submodule-configuration

	@submodule-documentation:
		Digit class wrapper.
	@end-submodule-documentation

	@include:
		{
			"ehm": "ehm"
		}
	@end-include
*/

const Meta = require( "ehm" )( );

const NUMBER_NAME = "Number";
const NUMBER_TYPE = "number";

const SERIALIZE_NUMBER_TAG_PATTERN = /^\[number Number(?:\:(.+?))?\]$/;

class Digit extends Meta {
	static [ Symbol.hasInstance ]( instance ){
		return (
			typeof instance == NUMBER_TYPE
			|| instance instanceof Number
			|| typeof instance == "function" && instance.name === NUMBER_NAME
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

		return SERIALIZE_NUMBER_TAG_PATTERN.test( tag );
	}

	constructor( entity ){
		super( entity, NUMBER_NAME );
	}

	check( entity ){
		return (
			typeof entity == NUMBER_TYPE
			|| entity instanceof Number
		);
	}

	get [ Meta.BOOLEAN ]( ){
		return !isNaN( this.valueOf( ) );
	}

	get [ Meta.STRING ]( ){
		return `${ this.valueOf( ) }`;
	}

	get [ Meta.NUMBER ]( ){
		return this.valueOf( );
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

module.exports = Digit;
