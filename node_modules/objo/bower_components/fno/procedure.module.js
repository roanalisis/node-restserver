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
			"package": "fno",
			"path": "fno/procedure.module.js",
			"file": "procedure.module.js",
			"module": "fno",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/fno.git",
			"test": "fno-test.js",
			"global": false,
			"internal": true,
			"class": true
		}
	@end-submodule-configuration

	@submodule-documentation:
		Procedure class wrapper.
	@end-submodule-documentation

	@include:
		{
			"ehm": "ehm"
		}
	@end-include
*/

const Meta = require( "ehm" )( );

const FUNCTION_NAME = "Function";
const FUNCTION_TYPE = "function";

const SERIALIZE_FUNCTION_TAG_PATTERN = /^\[function Function(?:\:(.+?))?\]$/;

class Procedure extends Meta {
	static [ Symbol.hasInstance ]( instance ){
		return (
			typeof instance == FUNCTION_TYPE
			|| instance instanceof Function
			|| typeof instance == FUNCTION_TYPE && instance.name === FUNCTION_NAME
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

		return SERIALIZE_FUNCTION_TAG_PATTERN.test( tag );
	}

	constructor( entity ){
		super( entity, FUNCTION_NAME );
	}

	check( entity ){
		return (
			typeof entity == FUNCTION_TYPE
			|| entity instanceof Function
		);
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

	isEqual( procedure ){
		if(
			procedure instanceof Function
			|| typeof procedure == FUNCTION_TYPE
		){
			return this.toString( ) == procedure.toString( );
		}

		return false;
	}
}

module.exports = Procedure;
