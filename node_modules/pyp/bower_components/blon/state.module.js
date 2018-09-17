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
			"package": "blon",
			"path": "blon/state.module.js",
			"file": "state.module.js",
			"module": "blon",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/blon.git",
			"test": "blon-test.js",
			"global": false,
			"internal": true,
			"class": true
		}
	@end-submodule-configuration

	@submodule-documentation:
		State class wrapper.
	@end-submodule-documentation

	@include:
		{
			"ehm": "ehm"
		}
	@end-include
*/

const Meta = require( "ehm" )( );

const BOOLEAN_TYPE = "boolean";
const BOOLEAN_NAME ="Boolean";

const SERIALIZE_TRUE_TAG = "[boolean Boolean:true]";
const SERIALIZE_FALSE_TAG = "[boolean Boolean:false]";
const META_SERIALIZE_TRUE_TAG = Meta.create( true ).serialize( );
const META_SERIALIZE_FALSE_TAG = Meta.create( false ).serialize( );

class State extends Meta {
	static [ Symbol.hasInstance ]( instance ){
		return (
			typeof instance == BOOLEAN_TYPE
			|| instance instanceof Boolean
			|| typeof instance == "function" && instance.name === BOOLEAN_NAME
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

		return (
			tag == SERIALIZE_TRUE_TAG
			|| tag == SERIALIZE_FALSE_TAG
			|| tag == META_SERIALIZE_TRUE_TAG
			|| tag == META_SERIALIZE_FALSE_TAG
		);
	}

	constructor( entity ){
		super( entity, BOOLEAN_NAME );
	}

	check( entity ){
		return (
			typeof entity == BOOLEAN_TYPE
			|| entity instanceof Boolean
		);
	}

	get [ Meta.BOOLEAN ]( ){
		return this.valueOf( );
	}

	get [ Meta.STRING ]( ){
		return `${ this.valueOf( ) }`;
	}

	get [ Meta.NUMBER ]( ){
		if( this.valueOf( ) === true ){
			return Infinity;
		}

		if( this.valueOf( ) === false ){
			return NaN;
		}

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

		if( this.valueOf( ) === true ){
			return SERIALIZE_TRUE_TAG;
		}

		if( this.valueOf( ) === false ){
			return SERIALIZE_FALSE_TAG;
		}

		return SERIALIZE_FALSE_TAG;
	}
}

module.exports = State;
