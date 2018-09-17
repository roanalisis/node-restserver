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
			"package": "objo",
			"path": "objo/data.module.js",
			"file": "data.module.js",
			"module": "objo",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/objo.git",
			"test": "objo-test.js",
			"global": false,
			"internal": true,
			"class": true
		}
	@end-submodule-configuration

	@submodule-documentation:
		Data class wrapper.
	@end-submodule-documentation

	@include:
		{
			"blon": "blon",
			"ehm": "ehm",
			"fno": "fno",
			"glyo": "glyo",
			"ndfo": "ndfo",
			"nol": "nol",
			"numo": "numo",
			"stro": "stro",
			"sxty4": "sxty4"
		}
	@end-include
*/

const blon = require( "blon" );
const fno = require( "fno" );
const glyo = require( "glyo" );
const ndfo = require( "ndfo" );
const nol = require( "nol" );
const numo = require( "numo" );
const stro = require( "stro" );
const sxty4 = require( "sxty4" );

const Digit = numo.Digit;
const Glyph = glyo.Glyph;
const Null = nol.Null;
const Procedure = fno.Procedure;
const Sequence = stro.Sequence;
const State = blon.State;
const Undefined = ndfo.Undefined;

const Meta = require( "ehm" )( );

const OBJECT_NAME = "Object";
const OBJECT_TYPE = "object";
const OBJECT_DATA_URL_PREFIX = "data:text/object;base64,";

const SERIALIZE_OBJECT_TAG_PATTERN = /^\[object Object(?:\:(.+?))?\]$/;

class Data extends Meta {
	static [ Symbol.hasInstance ]( instance ){
		return (
			typeof instance == OBJECT_TYPE
			|| instance instanceof Object
			|| typeof instance == "function" && instance.name === OBJECT_NAME
			|| Meta.instanceOf( instance, this )
		);
	}

	static parser( data ){
		/*;
			@meta-configuration:
				{
					"data:required": "string"
				}
			@end-meta-configuration
		*/

		if( data instanceof Array ){
			let list = data.reverse( );
			let index = list.length;
			while( index-- ){
				data[ index ] = Data.parser( data[ index ] );
			}

			return data;

		}else if( typeof data == "string" ){
			return Data.parser( Meta.deserialize( data ).valueOf( ) );

		}else if(
			typeof data == "object"
			&& "type" in data && typeof data.type == "string"
			&& "name" in data && typeof data.name == "string"
			&& "value" in data && typeof data.value == "string"
			&& data.format == Meta.DATA_URL_TAG
			&& Meta.TAG_PATTERN.test( data.value )
		){
			switch( data.type ){
				case "boolean":
					return State.deserialize( data.value ).valueOf( );

				case "function":
					return Procedure.deserialize( data.value ).valueOf( );

				case "number":
					return Digit.deserialize( data.value ).valueOf( );

				case "object":
					if( data.name == Null.name ){
						return Null.deserialize( data.value ).valueOf( );
					}

					return Data.deserialize( data.value ).valueOf( );

				case "string":
					return Sequence.deserialize( data.value ).valueOf( );

				case "symbol":
					return Glyph.deserialize( data.value ).valueOf( );

				case "undefined":
					return Undefined.deserialize( data.value ).valueOf( );
			}

		}else if( typeof data == "object" ){
			let key = Object.keys( data ).reverse( );
			let index = key.length;
			while( index-- ){
				let property = key[ index ];
				data[ property ] = Data.parser( data[ property ] );
			}

			return data;
		}

		throw new Error( `cannot parse data, ${ error }` );
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

		var [ data, parser, defer, blueprint ] = Meta.__deserializeDefer__( arguments, this, Data.parser );

		let entity = Meta.deserialize( data, parser, blueprint );

		if( entity.isCorrupted( ) ){
			entity = Meta.deserialize( data, defer, blueprint );
		}

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

		return SERIALIZE_OBJECT_TAG_PATTERN.test( tag );
	}

	constructor( entity ){
		/*;
			@meta-configuration:
				{
					"entity:required": [
						"object",
						Object
					]
				}
			@end-meta-configuration
		*/

		super( entity, OBJECT_NAME );
	}

	check( entity ){
		/*;
			@meta-configuration:
				{
					"entity:required": [
						"object",
						Object
					]
				}
			@end-meta-configuration
		*/

		return (
			typeof entity == "object"
			|| entity instanceof Object
		);
	}

	get [ Meta.OBJECT ]( ){
		return this.__toObject__( this.valueOf( ) );
	}

	__toObject__( object ){
		/*;
			@meta-configuration:
				"object:required": [
					"object",
					Object
				]
			@end-meta-configuration
		*/

		if( object instanceof Array ){
			let array = Array.from( object ).reverse( );

			let index = array.length;
			while( index-- ){
				let element = array[ index ];

				let type = typeof element;

				switch( type ){
					case "boolean":
						array[ index ] = blon( element ).toObject( );
						break;

					case "function":
						array[ index ] = fno( element ).toObject( );
						break;

					case "number":
						array[ index ] = numo( element ).toObject( );
						break;

					case "object":
						if( element === null ){
							array[ index ] = nol( element ).toObject( );

						}else{
							array[ index ] = Meta.create( Data, element ).toObject( );
						}

						break;

					case "string":
						array[ index ] = stro( element ).toObject( );
						break;

					case "symbol":
						array[ index ] = glyo( element ).toObject( );
						break;

					case "undefined":
						array[ index ] = ndfo( element ).toObject( );
						break;
				}
			}

			return array;

		}else{
			let data = { };
			let property = Object.keys( object ).sort( ).reverse( );

			let index = property.length;
			while( index-- ){
				let key = property[ index ];

				let value = object[ key ];

				let type = typeof value;

				switch( type ){
					case "boolean":
						data[ key ] = blon( value ).toObject( );
						break;

					case "function":
						data[ key ] = fno( value ).toObject( );
						break;

					case "number":
						data[ key ] = numo( value ).toObject( );
						break;

					case "object":
						if( value === null ){
							data[ key ] = nol( value ).toObject( );

						}else{
							data[ key ] = Meta.create( Data, value ).toObject( );
						}

						break;

					case "string":
						data[ key ] = stro( value ).toObject( );
						break;

					case "symbol":
						data[ key ] = glyo( value ).toObject( );
						break;

					case "undefined":
						data[ key ] = ndfo( value ).toObject( );
						break;
				}
			}

			return data;
		}
	}

	get [ Meta.BOOLEAN ]( ){
		return this.toNumber( ) > 0;
	}

	get [ Meta.STRING ]( ){
		return JSON.stringify( this );
	}

	get [ Meta.NUMBER ]( ){
		return Object.keys( this.valueOf( ) ).length;
	}

	stringify( ){
		return JSON.stringify( this, function replacer( key, value ){
			return Meta.create( value ).serialize( );
		} );
	}

	serialize( interpreter ){
		/*;
			@meta-configuration:
				{
					"interpreter": "function"
				}
			@end-meta-configuration
		*/

		return this.stringify( ).replace( /\"/g, "" );
	}

	isEqual( entity ){
		if( typeof entity != "object" ){
			return false;
		}

		return this.serialize( ) === Data.create( entity ).serialize( );
	}
}

module.exports = Data;
