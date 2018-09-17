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
              			"package": "ehm",
              			"path": "ehm/meta.module.js",
              			"file": "meta.module.js",
              			"module": "ehm",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/ehm.git",
              			"test": "ehm-test.js",
              			"global": false,
              			"internal": true,
              			"class": true
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Meta class construct.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"harden": "harden",
              			"sxty4": "sxty4"
              		}
              	@end-include
              */var _toStringTag = require("babel-runtime/core-js/symbol/to-string-tag");var _toStringTag2 = _interopRequireDefault(_toStringTag);var _stringify = require("babel-runtime/core-js/json/stringify");var _stringify2 = _interopRequireDefault(_stringify);var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _toPrimitive = require("babel-runtime/core-js/symbol/to-primitive");var _toPrimitive2 = _interopRequireDefault(_toPrimitive);var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _freeze = require("babel-runtime/core-js/object/freeze");var _freeze2 = _interopRequireDefault(_freeze);var _from = require("babel-runtime/core-js/array/from");var _from2 = _interopRequireDefault(_from);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var harden = require("harden");
var sxty4 = require("sxty4");

var NAME = (0, _symbol2.default)("name");
var ENTITY = (0, _symbol2.default)("entity");
var TYPE = (0, _symbol2.default)("type");

var ERROR = (0, _symbol2.default)("error");

var OBJECT = (0, _symbol2.default)("object");
var BOOLEAN = (0, _symbol2.default)("boolean");
var STRING = (0, _symbol2.default)("string");
var NUMBER = (0, _symbol2.default)("number");
var VALUE = (0, _symbol2.default)("value");

var GARBAGE = (0, _symbol2.default)("garbage");
var CORRUPTED = (0, _symbol2.default)("corrupted");
var TAGGED = (0, _symbol2.default)("tagged");

var ARGUMENTS_PATTERN = /^\[object Arguments\]$/;
var CLASS_NAME_PATTERN = /^[A-Z][a-zA-Z0-9]+$/;
var DATA_URL_PATTERN = /^data\:[a-z][\-a-z0-9]+\/([a-z][\-a-z0-9]+)(?:\;base64)?\,/;
var EVAL_USAGE_PATTERN = /\beval\(.*?\)|\beval\b/gm;
var FUNCTION_CLASS_USAGE_PATTERN = /\bFunction\(.*?\)|\bFunction\b/gm;
var FLOAT_NUMBER_PATTERN = /\./;
var SYMBOL_PATTERN = /^Symbol\((.*?)\)$/;
var TAG_PATTERN = /^\[([a-zA-Z][\-a-zA-Z0-9]+)\s+[A-Z][a-zA-Z0-9]+(?:\:(.+?))?\]$/;

var DATA_URL_TAG = "data-url-tag";
var DEFAULT_FORMAT = DATA_URL_TAG;
var DEFAULT_DATA_URL_PREFIX = "data:text/@type;base64,";
var EMPTY_STRING = "";var

Meta = function () {(0, _createClass3.default)(Meta, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			/*;
             	@meta-configuration:
             		{
             			"instance:required": "*"
             		}
             	@end-meta-configuration
             */

			return this.instanceOf(instance, this);
		} }, { key: "instanceOf", value: function instanceOf(

		instance, blueprint) {
			/*;
                        	@meta-configuration:
                        		{
                        			"instance:required": "*",
                        			"blueprint": "function"
                        		}
                        	@end-meta-configuration
                        */

			if (
			typeof instance == "function" &&
			typeof blueprint == "function" &&
			instance.name === blueprint.name ||

			(typeof instance === "undefined" ? "undefined" : (0, _typeof3.default)(instance)) == "object" &&
			instance != null &&
			typeof blueprint == "function" &&
			instance.constructor.name === blueprint.name)
			{
				return true;
			}

			/*;
     	@note:
     		Possibility of instance being garbage.
     			Do not remove this. This is a special procedure.
     	@end-note
     */

			if (instance === GARBAGE) {
				return false;
			}

			if (typeof blueprint != "function") {
				blueprint = this;
			}

			try {
				return new blueprint(GARBAGE).
				__initialize__(instance, blueprint.name).
				instanceOf(blueprint.name);

			} catch (error) {
				return false;
			}
		} }, { key: "create", value: function create(

		blueprint, entity, state) {
			/*;
                             	@meta-configuration:
                             		{
                             			"blueprint:required": "function",
                             			"entity": "*",
                             			"state": Array
                             		}
                             	@end-meta-configuration
                             */

			if (arguments.length == 0) {
				blueprint = this;
				entity = undefined;
				state = [];
			}

			if (arguments.length == 1) {
				blueprint = this;
				entity = arguments[0];
				state = [];
			}

			if (arguments.length == 2) {
				blueprint = arguments[0];
				entity = arguments[1];
				state = [];
			}

			if (typeof blueprint != "function") {
				blueprint = this;
			}

			if ((typeof state === "undefined" ? "undefined" : (0, _typeof3.default)(state)) == "object") {
				state = (0, _from2.default)(state);

			} else {
				state = [];
			}

			/*;
     	@note:
     		If we are going to throw an error here, possibility of infinite recursion.
     			We can push an error instead.
     	@end-note
     */

			if (!(blueprint instanceof this)) {
				state.push(new Error("incompatible blueprint, " + blueprint.name));

				blueprint = this;
			}

			try {
				var data = new blueprint(entity);

				if (TAG_PATTERN.test(data.stringify())) {
					state.push(TAGGED);
				}

				var index = state.length;
				while (index--) {
					var status = state[index];

					if (status instanceof Error) {
						data.setError(status);

					} else {
						harden(status, status, data);
					}
				}

				return (0, _freeze2.default)(data);

			} catch (error) {
				state.push(new Error("cannot wrap data, " + error.stack));

				return Meta.create(this, entity, state);
			}
		}

		/*;
    	@static-method-documentation:
    		Default generic deserialization parser.
    	@end-static-method-documentation
    */ }, { key: "parser", value: function parser(
		data) {
			/*;
         	@meta-configuration:
         		{
         			"data:required": "string"
         		}
         	@end-meta-configuration
         */

			if (typeof data != "string") {
				throw new Error("cannot parse data, " + data);
			}

			try {
				var token = data.match(TAG_PATTERN) || [];
				var type = token[1] || "undefined";
				var value = token[2] || EMPTY_STRING;

				if (value == EMPTY_STRING) {
					value = data;
				}

				/*;
      	@note:
      		If the value is a data url format, try to decode it.
      			Ensure that we have the correct type.
      	@end-note
      */

				if (DATA_URL_PATTERN.test(value)) {
					type = (value.match(DATA_URL_PATTERN) || [])[1] || type;
					value = value.replace(DEFAULT_DATA_URL_PREFIX.replace("@type", type), EMPTY_STRING);
					value = sxty4(value).decode();
				}

				switch (type) {
					case "boolean":
						if (value.toLowerCase() == "true") {
							return true;
						}

						if (value.toLowerCase() == "false") {
							return false;
						}

						throw new Error("cannot parse boolean, " + value);

					case "function":
						try {
							if (EVAL_USAGE_PATTERN.test(value)) {
								throw new Error("cannot parse function, contains eval, potential security issue");
							}

							if (FUNCTION_CLASS_USAGE_PATTERN.test(value)) {
								throw new Error("cannot parse function, contains function class, potential security issue");
							}

							var method = new Function("return " + value)();

							if (typeof method != "function") {
								return function () {throw new Error("no operation done, " + value);};
							}

							return method;

						} catch (error) {
							throw new Error("cannot parse function, " + value + ", " + error.stack);
						}

					case "number":
						try {
							if (value == "Infinity") {
								return Infinity;
							}

							if (value == "NaN") {
								return NaN;
							}

							if (FLOAT_NUMBER_PATTERN.test(value)) {
								return parseFloat(value);
							}

							if (!FLOAT_NUMBER_PATTERN.test(value)) {
								return parseInt(value);
							}

							throw new Error("cannot parse number, " + value);

						} catch (error) {
							throw new Error("cannot parse number, " + value + ", " + error.stack);
						}

					case "object":
						if (value == "null") {
							return null;
						}

						try {
							value = JSON.parse(value);

							/*;
                                  	This is the specification for the basic
                                  		meta object structure.
                                  */
							if (
							"type" in value && typeof value.type == "string" &&
							"name" in value && typeof value.name == "string" &&
							"value" in value && typeof value.value == "string" &&
							"format" in value && typeof value.format == "string" &&
							value.format == DATA_URL_TAG &&
							TAG_PATTERN.test(value.value))
							{
								return Meta.deserialize(value.value).valueOf();
							}

							return value;

						} catch (error) {
							return new Error("cannot parse object, " + value + ", " + error.stack);
						}

					case "string":
						return value;

					case "symbol":
						var symbol = ((value.match(SYMBOL_PATTERN) || [])[1] || EMPTY_STRING).trim();

						if (symbol == EMPTY_STRING) {
							throw new Error("cannot parse symbol, " + value);
						}

						return (0, _symbol2.default)(symbol);

					case "undefined":
						return undefined;}


			} catch (error) {
				throw new Error("cannot parse data, " + data + ", " + error.stack);
			}

			throw new Error("cannot parse data, " + data);
		}

		/*;
    	@static-method-documentation:
    		Generic meta data deserialization.
    	@end-static-method-documentation
    */ }, { key: "deserialize", value: function deserialize(
		data, parser, blueprint) {
			/*;
                            	@meta-configuration:
                            		{
                            			"data": "*",
                            			"parser": "function",
                            			"blueprint": "function"
                            		}
                            	@end-meta-configuration
                            */var _Meta$__deserializeDe =

			Meta.__deserializeDefer__(arguments, this, Meta.parser),_Meta$__deserializeDe2 = (0, _slicedToArray3.default)(_Meta$__deserializeDe, 4),data = _Meta$__deserializeDe2[0],parser = _Meta$__deserializeDe2[1],defer = _Meta$__deserializeDe2[2],blueprint = _Meta$__deserializeDe2[3];

			try {
				return Meta.create(blueprint, parser(data));

			} catch (error) {
				return Meta.create(blueprint, defer(data), [CORRUPTED, error]);
			}
		} }, { key: "__deserializeDefer__", value: function __deserializeDefer__(

		parameter, blueprint, parser) {
			/*;
                                 	@meta-configuration:
                                 		{
                                 			"parameter:required": Arguments,
                                 			"blueprint:required": "function",
                                 			"parser:required": "function"
                                 		}
                                 	@end-meta-configuration
                                 */

			if (!ARGUMENTS_PATTERN.test(parameter)) {
				throw new Error("invalid parameter");
			}

			if (typeof blueprint != "function") {
				throw new Error("invalid blueprint");
			}

			if (typeof parser != "function") {
				throw new Error("invalid parser");
			}

			var argument = parameter;

			try {
				parameter = (0, _from2.default)(parameter);

			} catch (error) {
				throw new Error("cannot process parameter, " + error.stack);
			}

			if (argument.length == 2) {
				parameter = [argument[0], undefined, argument[1]];
			}

			blueprint = parameter.slice(1).
			filter(function (parameter) {
				return (
					typeof parameter == "function" &&
					"name" in parameter &&
					typeof parameter.name == "string" &&
					parameter.name != EMPTY_STRING &&
					CLASS_NAME_PATTERN.test(parameter.name));

			}).
			concat(blueprint)[0];

			var defer = parser;

			parser = parameter.slice(1).
			filter(function (parameter) {
				return (
					typeof parameter == "function" && (

					!("name" in parameter) ||
					typeof parameter.name != "string" ||
					parameter.name == EMPTY_STRING ||
					parameter.name == "anonymous" ||
					parameter.name == "parser"));


			}).
			concat(defer)[0];

			return [parameter[0], parser, defer, blueprint];
		}

		/*;
    	@static-method-documentation:
    		Checks if the tag is compatible.
    	@end-static-method-documentation
    		@note:
    		Override for specific compatibility checking.
    	@end-note
    */ }, { key: "isCompatible", value: function isCompatible(

		tag) {
			/*;
        	@meta-configuration:
        		{
        			"tag": "string"
        		}
        	@end-meta-configuration
        */

			if (typeof tag != "string") {
				return false;
			}

			return TAG_PATTERN.test(tag);
		} }]);

	function Meta(entity, name) {(0, _classCallCheck3.default)(this, Meta);
		/*;
                                                                         	@meta-configuration:
                                                                         		{
                                                                         			"entity:required": "*",
                                                                         			"name:required": "string"
                                                                         		}
                                                                         	@end-meta-configuration
                                                                         */

		this.__initialize__(entity, name);
	}

	/*;
   	@method-documentation:
   		This is an internal initialization procedure.
   
   	@end-method-documentation
   */(0, _createClass3.default)(Meta, [{ key: "__initialize__", value: function __initialize__(

		entity, name) {
			/*;
                 	@meta-configuration:
                 		{
                 			"entity:required": "*",
                 			"name:required": "string"
                 		}
                 	@end-meta-configuration
                 */

			if (!this.check(entity)) {
				throw new Error("invalid entity");
			}

			var type = typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity);

			name = name || type.replace(/^./, function (match) {return match.toUpperCase();});

			if (typeof name != "string") {
				throw new Error("invalid name");
			}

			this[TYPE] = type;
			this[NAME] = name;
			this[ENTITY] = entity;

			this[ERROR] = [];

			return this;
		}

		/*;
    	@method-documentation:
    		For generic checking of entity this is always true,
    			and this should be overridden.
    	@end-method-documentation
    */ }, { key: "check", value: function check(
		entity) {
			return true;
		}

		/*;
    	@method-documentation:
    		This will only support three types; string, number, boolean.
    			These types are serializable.
    	@end-method-documentation
    		@note:
    		Do not override this.
    	@end-note
    */ }, { key: _toPrimitive2.default, value: function value(


		type) {
			/*;
         	@meta-configuration:
         		{
         			"type:required": "string",
         		}
         	@end-meta-configuration
         */

			switch (type) {
				case "string":
					return this.toString();

				case "number":
					return this.toNumber();

				default:
					return this.toBoolean();}

		}

		/*
    	@note:
    		These methods should be overridden.
    	@end-note
    */ }, { key: "tag",

















































		/*;
                        	@method-documentation:
                        		Return a string tag format,
                        				[type Name:value]
                        			The value is optional.
                        	@end-method-documentation
                        */value: function tag(


		value) {
			/*;
          	@meta-configuration:
          		{
          			"value": "string"
          		}
          	@end-meta-configuration
          */

			if (typeof value != "string") {
				value = EMPTY_STRING;
			}

			if (value != EMPTY_STRING) {
				value = ":" + value;
			}

			return ("[" + this.getType() + " " + this.getName() + ":@value]").replace(":@value", value);
		}

		/*;
    	@method-documentation:
    		Returns the object conversion of this data.
    			This will be used on JSON.stringify method.
    	@end-method-documentation
    */ }, { key: "toJSON", value: function toJSON()

		{
			return this[OBJECT];
		}

		/*;
    	@method-documentation:
    		Returns the object conversion of this data.
    	@end-method-documentation
    */ }, { key: "toObject", value: function toObject()
		{
			return this[OBJECT];
		}

		/*;
    	@method-documentation:
    		Returns the boolean conversion of this data.
    	@end-method-documentation
    		@note:
    		As much as possible, do not override this method.
    	@end-note
    */ }, { key: "toBoolean", value: function toBoolean()

		{
			return this[BOOLEAN];
		}

		/*;
    	@method-documentation:
    		Returns the string conversion of this data.
    	@end-method-documentation
    		@note:
    		As much as possible, do not override this method.
    	@end-note
    */ }, { key: "toString", value: function toString()

		{
			return this[STRING];
		}

		/*;
    	@method-documentation:
    		Returns the numerical conversion of this data.
    	@end-method-documentation
    		@note:
    		As much as possible, do not override this method.
    	@end-note
    */ }, { key: "toNumber", value: function toNumber()

		{
			return this[NUMBER];
		}

		/*;
    	@method-documentation:
    		Returns the original value.
    	@end-method-documentation
    		@note:
    		As much as possible, do not override this method.
    	@end-note
    */ }, { key: "valueOf", value: function valueOf()

		{
			return this[VALUE];
		} }, { key: "typeOf", value: function typeOf(

		type) {
			/*;
         	@meta-configuration:
         		{
         			"type:required": "string"
         		}
         	@end-meta-configuration
         */

			if (typeof type == "string") {
				return (0, _typeof3.default)(this.valueOf()) == type;
			}

			return false;
		}

		/*
    	@note:
    		Some cases that instanceOf needs to be overridden.
    	@end-note
    */ }, { key: "instanceOf", value: function instanceOf(
		blueprint) {
			/*;
              	@meta-configuration:
              		{
              			"blueprint:required": [
              				"function",
              				"string"
              			]
              		}
              	@end-meta-configuration
              */

			var entity = this.valueOf();

			if (typeof blueprint == "function") {
				return (
					this instanceof blueprint ||
					entity instanceof blueprint ||
					typeof blueprint.name == "string" && this.instanceOf(blueprint.name));

			}

			if (typeof blueprint == "string") {
				if (this.typeOf(blueprint.toLowerCase())) {
					return true;
				}

				if (entity === null || typeof entity == "undefined") {
					return false;
				}

				if (typeof entity == "function" && entity.name === blueprint) {
					return true;
				}

				do {
					if (
					typeof entity == "function" &&
					entity.name === blueprint ||

					typeof entity.constructor == "function" &&
					entity.constructor.name === blueprint)
					{
						return true;
					}
				} while (entity = (0, _getPrototypeOf2.default)(entity));

				/*;
                                                              	@note:
                                                              		If you removed the condition, this may cause unwanted behavior.
                                                              	@end-note
                                                              */
				if (this.constructor.name != blueprint) {
					var _entity = this;

					do {
						if (
						typeof _entity == "function" &&
						_entity.name === blueprint ||

						typeof _entity.constructor == "function" &&
						_entity.constructor.name === blueprint)
						{
							return true;
						}
					} while (_entity = (0, _getPrototypeOf2.default)(_entity));
				}

				return false;
			}

			return false;
		}

		/*;
    	@note:
    		This is the generic stringify function,
    			for complex entity you need to override this.
    	@end-note
    */ }, { key: "stringify", value: function stringify()
		{
			try {
				if (this.getType() == "object") {
					return (0, _stringify2.default)(this.valueOf());
				}

				return EMPTY_STRING + this.valueOf();

			} catch (error) {
				try {
					return this.valueOf().toString();

				} catch (error) {
					return this.toString();
				}
			}
		}

		/*;
    	@method-documentation:
    		This will call the static deserialization procedure of the constructor.
    	@end-method-documentation
    */ }, { key: "deserialize", value: function deserialize(
		data, parser, blueprint) {
			/*;
                            	@meta-configuration:
                            		{
                            			"data": "*",
                            			"parser": "function",
                            			"blueprint": "function"
                            		}
                            	@end-meta-configuration
                            */

			var procedure = Meta.deserialize;

			if (
			typeof this.constructor == "function" &&
			typeof this.constructor.deserialize == "function" &&
			this.constructor.deserialize.name === "deserialize")
			{
				procedure = this.constructor.deserialize;
			}

			if (arguments.length == 2) {
				return procedure(this.valueOf(), arguments[0], arguments[1]);

			} else {
				return procedure(data, parser, blueprint);
			}
		}

		/*;
    	@static-method-documentation:
    		Default generic serialization interpreter.
    	@end-static-method-documentation
    */ }, { key: "serialize",














		/*;
                              	@method-documentation:
                              		Returns a tag format with value.
                              		The value must be a data URL format.
                              			The interpreter function will accept a context parameter.
                              			By default this will serialize the entity using plain/text base64 data URL format.
                              			The interpreter must return a serialize format of the data to be placed on the tag.
                              	@end-method-documentation
                              */value: function serialize(



		interpreter) {
			/*;
                	@meta-configuration:
                		{
                			"interpreter": "function"
                		}
                	@end-meta-configuration
                */

			var defer = Meta.interpreter;

			if (typeof interpreter != "function") {
				interpreter = defer;
			}

			try {
				return this.tag(interpreter(this));

			} catch (error) {
				return this.tag(defer(this));
			}
		}

		/*;
    	@method-documentation:
    		Strict value equality.
    	@end-method-documentation
    		@note:
    		Override for deep checking.
    	@end-note
    */ }, { key: "isEqual", value: function isEqual(

		entity) {
			/*;
           	@meta-configuration:
           		{
           			"entity:required": "*"
           		}
           	@end-meta-configuration
           */

			if (entity instanceof Meta) {
				return this.valueOf() === entity.valueOf();
			}

			return this.valueOf() === entity;
		}

		/*;
    	@method-documentation:
    		When the deserialization fails, or if there is error, this method returns true.
    	@end-method-documentation
    */ }, { key: "isCorrupted", value: function isCorrupted()
		{
			return (
				this[CORRUPTED] === CORRUPTED ||
				this.hasError());

		} }, { key: "isTagged", value: function isTagged()

		{
			return (
				this[TAGGED] === TAGGED ||
				TAG_PATTERN.test(this.stringify()));

		}

		/*;
    	@method-documentation:
    		If the entity is not a tag format then it's raw.
    	@end-method-documentation
    */ }, { key: "isRaw", value: function isRaw()
		{
			return !this.isTagged();
		} }, { key: "setError", value: function setError(

		error) {
			if (error instanceof Error) {
				this.pushError(error);
			}

			return this;
		} }, { key: "pushError", value: function pushError(

		error) {
			if (error instanceof Error) {
				this[ERROR].push(error);
			}

			return this;
		} }, { key: "getError", value: function getError()

		{
			return this[ERROR].reverse()[0];
		} }, { key: "hasError", value: function hasError()

		{
			return this[ERROR].length > 0;
		} }, { key: "transferError", value: function transferError(

		container) {
			/*;
              	@meta-configuration:
              		{
              			"container": Array
              		}
              	@end-meta-configuration
              */

			if (container instanceof Array) {
				var list = this[ERROR].reverse();
				var index = list.length;
				while (index--) {container.push(list[index]);}
			}

			return this;
		}

		/*;
    	@method-documentation:
    		Returns the clone of this data.
    	@end-method-documentation
    */ }, { key: "clone", value: function clone(
		state) {
			/*;
          	@meta-configuration:
          		{
          			"state": Array
          		}
          	@end-meta-configuration
          */

			return Meta.create(this.constructor, this.valueOf(), state);
		}

		/*;
    	@method-documentation:
    		Returns the Meta instance of this data.
    	@end-method-documentation
    */ }, { key: "native", value: function native(
		state) {
			/*;
          	@meta-configuration:
          		{
          			"state": Array
          		}
          	@end-meta-configuration
          */

			return Meta.create(Meta, this.valueOf(), state);
		}

		/*;
    	@method-documentation:
    		Reverts to the Meta instance of this data,
    			passing the incurred state from previous.
    	@end-method-documentation
    */ }, { key: "revert", value: function revert()
		{
			var state = [];

			if (this.isCorrupted()) {
				state.push(CORRUPTED);
			}

			if (this.hasError()) {
				this.transferError(state);
			}

			return this.native(state);
		} }, { key: "getType", value: function getType()

		{
			return this[TYPE];
		} }, { key: "getName", value: function getName()

		{
			return this[NAME];
		} }, { key: _toStringTag2.default, get: function get() {return this.getName();} /*;
                                                                                  	@method-documentation:
                                                                                  		Generally, this will return the basic object meta specification.
                                                                                  			The format property dictates how the value must be interpreted.
                                                                                  	@end-method-documentation
                                                                                  		@note:
                                                                                  		For special values that needs specific conversion to object type,
                                                                                  			this method needs to be overridden.
                                                                                  	@end-note
                                                                                  */ }, { key: OBJECT, get: function get() {return (0, _freeze2.default)({ "type": this.getType(), "name": this.getName(), "value": this.serialize(), "format": DATA_URL_TAG });} }, { key: BOOLEAN, get: function get() {return true;} }, { key: STRING, get: function get() {return Object.prototype.toString.call(this.valueOf());} }, { key: NUMBER, get: function get() {return Infinity;} /*;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                	@get-method-documentation:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                		Returns the original value.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                			As much as possible do not override this.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                	@end-get-method-documentation
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */ }, { key: VALUE, get: function get() {return this[ENTITY];} }], [{ key: "interpreter", value: function interpreter(self) {/*;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             	@meta-configuration:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             		{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             			"self": Meta
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             		}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             	@end-meta-configuration
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */var value = sxty4(self.stringify()).encode();return "" + DEFAULT_DATA_URL_PREFIX.replace("@type", self.getType()) + value;} }]);return Meta;}();harden("NAME", NAME, Meta);harden("ENTITY", ENTITY, Meta);harden("TYPE", TYPE, Meta);harden("OBJECT", OBJECT, Meta);harden("BOOLEAN", BOOLEAN, Meta);harden("STRING", STRING, Meta);harden("NUMBER", NUMBER, Meta);harden("VALUE", VALUE, Meta);harden("GARBAGE", GARBAGE, Meta);harden("CORRUPTED", CORRUPTED, Meta);harden("TAGGED", TAGGED, Meta);harden("TAG_PATTERN", TAG_PATTERN, Meta);harden("DATA_URL_TAG", DATA_URL_TAG, Meta);
module.exports = Meta;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwic3h0eTQiLCJOQU1FIiwiRU5USVRZIiwiVFlQRSIsIkVSUk9SIiwiT0JKRUNUIiwiQk9PTEVBTiIsIlNUUklORyIsIk5VTUJFUiIsIlZBTFVFIiwiR0FSQkFHRSIsIkNPUlJVUFRFRCIsIlRBR0dFRCIsIkFSR1VNRU5UU19QQVRURVJOIiwiQ0xBU1NfTkFNRV9QQVRURVJOIiwiREFUQV9VUkxfUEFUVEVSTiIsIkVWQUxfVVNBR0VfUEFUVEVSTiIsIkZVTkNUSU9OX0NMQVNTX1VTQUdFX1BBVFRFUk4iLCJGTE9BVF9OVU1CRVJfUEFUVEVSTiIsIlNZTUJPTF9QQVRURVJOIiwiVEFHX1BBVFRFUk4iLCJEQVRBX1VSTF9UQUciLCJERUZBVUxUX0ZPUk1BVCIsIkRFRkFVTFRfREFUQV9VUkxfUFJFRklYIiwiRU1QVFlfU1RSSU5HIiwiTWV0YSIsImluc3RhbmNlIiwiaW5zdGFuY2VPZiIsImJsdWVwcmludCIsIm5hbWUiLCJjb25zdHJ1Y3RvciIsIl9faW5pdGlhbGl6ZV9fIiwiZXJyb3IiLCJlbnRpdHkiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInB1c2giLCJFcnJvciIsImRhdGEiLCJ0ZXN0Iiwic3RyaW5naWZ5IiwiaW5kZXgiLCJzdGF0dXMiLCJzZXRFcnJvciIsInN0YWNrIiwiY3JlYXRlIiwidG9rZW4iLCJtYXRjaCIsInR5cGUiLCJ2YWx1ZSIsInJlcGxhY2UiLCJkZWNvZGUiLCJ0b0xvd2VyQ2FzZSIsIm1ldGhvZCIsIkZ1bmN0aW9uIiwiSW5maW5pdHkiLCJOYU4iLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJKU09OIiwicGFyc2UiLCJmb3JtYXQiLCJkZXNlcmlhbGl6ZSIsInZhbHVlT2YiLCJzeW1ib2wiLCJ0cmltIiwicGFyc2VyIiwiX19kZXNlcmlhbGl6ZURlZmVyX18iLCJkZWZlciIsInBhcmFtZXRlciIsImFyZ3VtZW50Iiwic2xpY2UiLCJmaWx0ZXIiLCJjb25jYXQiLCJ0YWciLCJjaGVjayIsInRvVXBwZXJDYXNlIiwidG9TdHJpbmciLCJ0b051bWJlciIsInRvQm9vbGVhbiIsImdldFR5cGUiLCJnZXROYW1lIiwidHlwZU9mIiwicHJvY2VkdXJlIiwiaW50ZXJwcmV0ZXIiLCJoYXNFcnJvciIsImlzVGFnZ2VkIiwicHVzaEVycm9yIiwicmV2ZXJzZSIsImNvbnRhaW5lciIsIkFycmF5IiwibGlzdCIsImlzQ29ycnVwdGVkIiwidHJhbnNmZXJFcnJvciIsIm5hdGl2ZSIsInNlcmlhbGl6ZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCJzZWxmIiwiZW5jb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNRSxPQUFPLHNCQUFRLE1BQVIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsT0FBTyxzQkFBUSxNQUFSLENBQWI7O0FBRUEsSUFBTUMsUUFBUSxzQkFBUSxPQUFSLENBQWQ7O0FBRUEsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxVQUFVLHNCQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsUUFBUSxzQkFBUSxPQUFSLENBQWQ7O0FBRUEsSUFBTUMsVUFBVSxzQkFBUSxTQUFSLENBQWhCO0FBQ0EsSUFBTUMsWUFBWSxzQkFBUSxXQUFSLENBQWxCO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7O0FBRUEsSUFBTUMsb0JBQW9CLHdCQUExQjtBQUNBLElBQU1D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Q0EsQyx3REFxUW1CbUcsSSxFQUFNLENBQ3pCOzs7Ozs7K2tCQVFBLElBQUlsRCxRQUFRbkQsTUFBT3FHLEtBQUszRCxTQUFMLEVBQVAsRUFBMkI0RCxNQUEzQixFQUFaLENBRUEsWUFBVy9FLHdCQUF3QjZCLE9BQXhCLENBQWlDLE9BQWpDLEVBQTBDaUQsS0FBS25CLE9BQUwsRUFBMUMsQ0FBWCxHQUEyRS9CLEtBQTNFLENBQ0EsQyxxQkFtTUZyRCxPQUFRLE1BQVIsRUFBZ0JHLElBQWhCLEVBQXNCd0IsSUFBdEIsRUFDQTNCLE9BQVEsUUFBUixFQUFrQkksTUFBbEIsRUFBMEJ1QixJQUExQixFQUNBM0IsT0FBUSxNQUFSLEVBQWdCSyxJQUFoQixFQUFzQnNCLElBQXRCLEVBRUEzQixPQUFRLFFBQVIsRUFBa0JPLE1BQWxCLEVBQTBCb0IsSUFBMUIsRUFDQTNCLE9BQVEsU0FBUixFQUFtQlEsT0FBbkIsRUFBNEJtQixJQUE1QixFQUNBM0IsT0FBUSxRQUFSLEVBQWtCUyxNQUFsQixFQUEwQmtCLElBQTFCLEVBQ0EzQixPQUFRLFFBQVIsRUFBa0JVLE1BQWxCLEVBQTBCaUIsSUFBMUIsRUFDQTNCLE9BQVEsT0FBUixFQUFpQlcsS0FBakIsRUFBd0JnQixJQUF4QixFQUVBM0IsT0FBUSxTQUFSLEVBQW1CWSxPQUFuQixFQUE0QmUsSUFBNUIsRUFDQTNCLE9BQVEsV0FBUixFQUFxQmEsU0FBckIsRUFBZ0NjLElBQWhDLEVBQ0EzQixPQUFRLFFBQVIsRUFBa0JjLE1BQWxCLEVBQTBCYSxJQUExQixFQUVBM0IsT0FBUSxhQUFSLEVBQXVCc0IsV0FBdkIsRUFBb0NLLElBQXBDLEVBRUEzQixPQUFRLGNBQVIsRUFBd0J1QixZQUF4QixFQUFzQ0ksSUFBdEM7QUFFQThFLE9BQU9DLE9BQVAsR0FBaUIvRSxJQUFqQiIsImZpbGUiOiJtZXRhLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVobVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWhtL21ldGEubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJtZXRhLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlaG1cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2VobS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVobS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRNZXRhIGNsYXNzIGNvbnN0cnVjdC5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcInN4dHk0XCI6IFwic3h0eTRcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBzeHR5NCA9IHJlcXVpcmUoIFwic3h0eTRcIiApO1xuXG5jb25zdCBOQU1FID0gU3ltYm9sKCBcIm5hbWVcIiApO1xuY29uc3QgRU5USVRZID0gU3ltYm9sKCBcImVudGl0eVwiICk7XG5jb25zdCBUWVBFID0gU3ltYm9sKCBcInR5cGVcIiApO1xuXG5jb25zdCBFUlJPUiA9IFN5bWJvbCggXCJlcnJvclwiICk7XG5cbmNvbnN0IE9CSkVDVCA9IFN5bWJvbCggXCJvYmplY3RcIiApO1xuY29uc3QgQk9PTEVBTiA9IFN5bWJvbCggXCJib29sZWFuXCIgKTtcbmNvbnN0IFNUUklORyA9IFN5bWJvbCggXCJzdHJpbmdcIiApO1xuY29uc3QgTlVNQkVSID0gU3ltYm9sKCBcIm51bWJlclwiICk7XG5jb25zdCBWQUxVRSA9IFN5bWJvbCggXCJ2YWx1ZVwiICk7XG5cbmNvbnN0IEdBUkJBR0UgPSBTeW1ib2woIFwiZ2FyYmFnZVwiICk7XG5jb25zdCBDT1JSVVBURUQgPSBTeW1ib2woIFwiY29ycnVwdGVkXCIgKTtcbmNvbnN0IFRBR0dFRCA9IFN5bWJvbCggXCJ0YWdnZWRcIiApO1xuXG5jb25zdCBBUkdVTUVOVFNfUEFUVEVSTiA9IC9eXFxbb2JqZWN0IEFyZ3VtZW50c1xcXSQvO1xuY29uc3QgQ0xBU1NfTkFNRV9QQVRURVJOID0gL15bQS1aXVthLXpBLVowLTldKyQvO1xuY29uc3QgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YVxcOlthLXpdW1xcLWEtejAtOV0rXFwvKFthLXpdW1xcLWEtejAtOV0rKSg/OlxcO2Jhc2U2NCk/XFwsLztcbmNvbnN0IEVWQUxfVVNBR0VfUEFUVEVSTiA9IC9cXGJldmFsXFwoLio/XFwpfFxcYmV2YWxcXGIvZ207XG5jb25zdCBGVU5DVElPTl9DTEFTU19VU0FHRV9QQVRURVJOID0gL1xcYkZ1bmN0aW9uXFwoLio/XFwpfFxcYkZ1bmN0aW9uXFxiL2dtO1xuY29uc3QgRkxPQVRfTlVNQkVSX1BBVFRFUk4gPSAvXFwuLztcbmNvbnN0IFNZTUJPTF9QQVRURVJOID0gL15TeW1ib2xcXCgoLio/KVxcKSQvO1xuY29uc3QgVEFHX1BBVFRFUk4gPSAvXlxcWyhbYS16QS1aXVtcXC1hLXpBLVowLTldKylcXHMrW0EtWl1bYS16QS1aMC05XSsoPzpcXDooLis/KSk/XFxdJC87XG5cbmNvbnN0IERBVEFfVVJMX1RBRyA9IFwiZGF0YS11cmwtdGFnXCI7XG5jb25zdCBERUZBVUxUX0ZPUk1BVCA9IERBVEFfVVJMX1RBRztcbmNvbnN0IERFRkFVTFRfREFUQV9VUkxfUFJFRklYID0gXCJkYXRhOnRleHQvQHR5cGU7YmFzZTY0LFwiO1xuY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcblxuY2xhc3MgTWV0YSB7XG5cdHN0YXRpYyBbIFN5bWJvbC5oYXNJbnN0YW5jZSBdKCBpbnN0YW5jZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaW5zdGFuY2U6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2VPZiggaW5zdGFuY2UsIHRoaXMgKTtcblx0fVxuXG5cdHN0YXRpYyBpbnN0YW5jZU9mKCBpbnN0YW5jZSwgYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpbnN0YW5jZTpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XHRcImJsdWVwcmludFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIChcblx0XHRcdHR5cGVvZiBpbnN0YW5jZSA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdCYmIHR5cGVvZiBibHVlcHJpbnQgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQmJiBpbnN0YW5jZS5uYW1lID09PSBibHVlcHJpbnQubmFtZVxuXHRcdCkgfHwgKFxuXHRcdFx0dHlwZW9mIGluc3RhbmNlID09IFwib2JqZWN0XCJcblx0XHRcdCYmIGluc3RhbmNlICE9IG51bGxcblx0XHRcdCYmIHR5cGVvZiBibHVlcHJpbnQgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQmJiBpbnN0YW5jZS5jb25zdHJ1Y3Rvci5uYW1lID09PSBibHVlcHJpbnQubmFtZVxuXHRcdCkgKXtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdFBvc3NpYmlsaXR5IG9mIGluc3RhbmNlIGJlaW5nIGdhcmJhZ2UuXG5cblx0XHRcdFx0RG8gbm90IHJlbW92ZSB0aGlzLiBUaGlzIGlzIGEgc3BlY2lhbCBwcm9jZWR1cmUuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCBpbnN0YW5jZSA9PT0gR0FSQkFHRSApe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHR9XG5cblx0XHR0cnl7XG5cdFx0XHRyZXR1cm4gKCBuZXcgYmx1ZXByaW50KCBHQVJCQUdFICkgKVxuXHRcdFx0XHQuX19pbml0aWFsaXplX18oIGluc3RhbmNlLCBibHVlcHJpbnQubmFtZSApXG5cdFx0XHRcdC5pbnN0YW5jZU9mKCBibHVlcHJpbnQubmFtZSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBjcmVhdGUoIGJsdWVwcmludCwgZW50aXR5LCBzdGF0ZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiYmx1ZXByaW50OnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcImVudGl0eVwiOiBcIipcIixcblx0XHRcdFx0XHRcInN0YXRlXCI6IEFycmF5XG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDAgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0XHRlbnRpdHkgPSB1bmRlZmluZWQ7XG5cdFx0XHRzdGF0ZSA9IFsgXTtcblx0XHR9XG5cblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAxICl7XG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdFx0ZW50aXR5ID0gYXJndW1lbnRzWyAwIF07XG5cdFx0XHRzdGF0ZSA9IFsgXTtcblx0XHR9XG5cblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAyICl7XG5cdFx0XHRibHVlcHJpbnQgPSBhcmd1bWVudHNbIDAgXTtcblx0XHRcdGVudGl0eSA9IGFyZ3VtZW50c1sgMSBdO1xuXHRcdFx0c3RhdGUgPSBbIF07XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2Ygc3RhdGUgPT0gXCJvYmplY3RcIiApe1xuXHRcdFx0c3RhdGUgPSBBcnJheS5mcm9tKCBzdGF0ZSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRzdGF0ZSA9IFsgXTtcblx0XHR9XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRJZiB3ZSBhcmUgZ29pbmcgdG8gdGhyb3cgYW4gZXJyb3IgaGVyZSwgcG9zc2liaWxpdHkgb2YgaW5maW5pdGUgcmVjdXJzaW9uLlxuXG5cdFx0XHRcdFdlIGNhbiBwdXNoIGFuIGVycm9yIGluc3RlYWQuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCAhKCBibHVlcHJpbnQgaW5zdGFuY2VvZiB0aGlzICkgKXtcblx0XHRcdHN0YXRlLnB1c2goIG5ldyBFcnJvciggYGluY29tcGF0aWJsZSBibHVlcHJpbnQsICR7IGJsdWVwcmludC5uYW1lIH1gICkgKTtcblxuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHR9XG5cblx0XHR0cnl7XG5cdFx0XHRsZXQgZGF0YSA9IG5ldyBibHVlcHJpbnQoIGVudGl0eSApO1xuXG5cdFx0XHRpZiggVEFHX1BBVFRFUk4udGVzdCggZGF0YS5zdHJpbmdpZnkoICkgKSApe1xuXHRcdFx0XHRzdGF0ZS5wdXNoKCBUQUdHRUQgKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGluZGV4ID0gc3RhdGUubGVuZ3RoO1xuXHRcdFx0d2hpbGUoIGluZGV4LS0gKXtcblx0XHRcdFx0bGV0IHN0YXR1cyA9IHN0YXRlWyBpbmRleCBdO1xuXG5cdFx0XHRcdGlmKCBzdGF0dXMgaW5zdGFuY2VvZiBFcnJvciApe1xuXHRcdFx0XHRcdGRhdGEuc2V0RXJyb3IoIHN0YXR1cyApO1xuXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGhhcmRlbiggc3RhdHVzLCBzdGF0dXMsIGRhdGEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmZyZWV6ZSggZGF0YSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0c3RhdGUucHVzaCggbmV3IEVycm9yKCBgY2Fubm90IHdyYXAgZGF0YSwgJHsgZXJyb3Iuc3RhY2sgfWAgKSApO1xuXG5cdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHRoaXMsIGVudGl0eSwgc3RhdGUgKTtcblx0XHR9XG5cdH1cblxuXHQvKjtcblx0XHRAc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0RGVmYXVsdCBnZW5lcmljIGRlc2VyaWFsaXphdGlvbiBwYXJzZXIuXG5cdFx0QGVuZC1zdGF0aWMtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0c3RhdGljIHBhcnNlciggZGF0YSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZGF0YTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgZGF0YSAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UgZGF0YSwgJHsgZGF0YSB9YCApO1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdGxldCB0b2tlbiA9IGRhdGEubWF0Y2goIFRBR19QQVRURVJOICkgfHwgWyBdO1xuXHRcdFx0bGV0IHR5cGUgPSB0b2tlblsgMSBdIHx8IFwidW5kZWZpbmVkXCI7XG5cdFx0XHRsZXQgdmFsdWUgPSB0b2tlblsgMiBdIHx8IEVNUFRZX1NUUklORztcblxuXHRcdFx0aWYoIHZhbHVlID09IEVNUFRZX1NUUklORyApe1xuXHRcdFx0XHR2YWx1ZSA9IGRhdGE7XG5cdFx0XHR9XG5cblx0XHRcdC8qO1xuXHRcdFx0XHRAbm90ZTpcblx0XHRcdFx0XHRJZiB0aGUgdmFsdWUgaXMgYSBkYXRhIHVybCBmb3JtYXQsIHRyeSB0byBkZWNvZGUgaXQuXG5cblx0XHRcdFx0XHRFbnN1cmUgdGhhdCB3ZSBoYXZlIHRoZSBjb3JyZWN0IHR5cGUuXG5cdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0Ki9cblx0XHRcdGlmKCBEQVRBX1VSTF9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0dHlwZSA9ICggdmFsdWUubWF0Y2goIERBVEFfVVJMX1BBVFRFUk4gKSB8fCBbIF0gKVsgMSBdIHx8IHR5cGU7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUucmVwbGFjZSggREVGQVVMVF9EQVRBX1VSTF9QUkVGSVgucmVwbGFjZSggXCJAdHlwZVwiLCB0eXBlICksIEVNUFRZX1NUUklORyApO1xuXHRcdFx0XHR2YWx1ZSA9IHN4dHk0KCB2YWx1ZSApLmRlY29kZSggKTtcblx0XHRcdH1cblxuXHRcdFx0c3dpdGNoKCB0eXBlICl7XG5cdFx0XHRcdGNhc2UgXCJib29sZWFuXCI6XG5cdFx0XHRcdFx0aWYoIHZhbHVlLnRvTG93ZXJDYXNlKCApID09IFwidHJ1ZVwiICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiggdmFsdWUudG9Mb3dlckNhc2UoICkgPT0gXCJmYWxzZVwiICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIGJvb2xlYW4sICR7IHZhbHVlIH1gICk7XG5cblx0XHRcdFx0Y2FzZSBcImZ1bmN0aW9uXCI6XG5cdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0aWYoIEVWQUxfVVNBR0VfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgcGFyc2UgZnVuY3Rpb24sIGNvbnRhaW5zIGV2YWwsIHBvdGVudGlhbCBzZWN1cml0eSBpc3N1ZVwiICk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmKCBGVU5DVElPTl9DTEFTU19VU0FHRV9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBwYXJzZSBmdW5jdGlvbiwgY29udGFpbnMgZnVuY3Rpb24gY2xhc3MsIHBvdGVudGlhbCBzZWN1cml0eSBpc3N1ZVwiICk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGxldCBtZXRob2QgPSAoIG5ldyBGdW5jdGlvbiggXCJyZXR1cm4gXCIgKyB2YWx1ZSApICkoICk7XG5cblx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgbWV0aG9kICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oICl7IHRocm93IG5ldyBFcnJvciggYG5vIG9wZXJhdGlvbiBkb25lLCAkeyB2YWx1ZSB9YCApOyB9O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXR1cm4gbWV0aG9kO1xuXG5cdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIGZ1bmN0aW9uLCAkeyB2YWx1ZSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIFwibnVtYmVyXCI6XG5cdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0aWYoIHZhbHVlID09IFwiSW5maW5pdHlcIiApe1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gSW5maW5pdHk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmKCB2YWx1ZSA9PSBcIk5hTlwiICl7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBOYU47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmKCBGTE9BVF9OVU1CRVJfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBwYXJzZUZsb2F0KCB2YWx1ZSApO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiggIUZMT0FUX05VTUJFUl9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KCB2YWx1ZSApO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UgbnVtYmVyLCAkeyB2YWx1ZSB9YCApO1xuXG5cdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIG51bWJlciwgJHsgdmFsdWUgfSwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0Y2FzZSBcIm9iamVjdFwiOlxuXHRcdFx0XHRcdGlmKCB2YWx1ZSA9PSBcIm51bGxcIiApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0dmFsdWUgPSBKU09OLnBhcnNlKCB2YWx1ZSApO1xuXG5cdFx0XHRcdFx0XHQvKjtcblx0XHRcdFx0XHRcdFx0VGhpcyBpcyB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgdGhlIGJhc2ljXG5cdFx0XHRcdFx0XHRcdFx0bWV0YSBvYmplY3Qgc3RydWN0dXJlLlxuXHRcdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRcdGlmKFxuXHRcdFx0XHRcdFx0XHRcInR5cGVcIiBpbiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudHlwZSA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHRcdCYmIFwibmFtZVwiIGluIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5uYW1lID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdFx0JiYgXCJ2YWx1ZVwiIGluIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS52YWx1ZSA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHRcdCYmIFwiZm9ybWF0XCIgaW4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLmZvcm1hdCA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHRcdCYmIHZhbHVlLmZvcm1hdCA9PSBEQVRBX1VSTF9UQUdcblx0XHRcdFx0XHRcdFx0JiYgVEFHX1BBVFRFUk4udGVzdCggdmFsdWUudmFsdWUgKVxuXHRcdFx0XHRcdFx0KXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIE1ldGEuZGVzZXJpYWxpemUoIHZhbHVlLnZhbHVlICkudmFsdWVPZiggKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXG5cdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBvYmplY3QsICR7IHZhbHVlIH0sICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cblx0XHRcdFx0Y2FzZSBcInN5bWJvbFwiOlxuXHRcdFx0XHRcdGxldCBzeW1ib2wgPSAoICggdmFsdWUubWF0Y2goIFNZTUJPTF9QQVRURVJOICkgfHwgWyBdIClbIDEgXSB8fCBFTVBUWV9TVFJJTkcgKS50cmltKCApO1xuXG5cdFx0XHRcdFx0aWYoIHN5bWJvbCA9PSBFTVBUWV9TVFJJTkcgKXtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBzeW1ib2wsICR7IHZhbHVlIH1gICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIFN5bWJvbCggc3ltYm9sICk7XG5cblx0XHRcdFx0Y2FzZSBcInVuZGVmaW5lZFwiOlxuXHRcdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UgZGF0YSwgJHsgZGF0YSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdH1cblxuXHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBkYXRhLCAkeyBkYXRhIH1gICk7XG5cdH1cblxuXHQvKjtcblx0XHRAc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0R2VuZXJpYyBtZXRhIGRhdGEgZGVzZXJpYWxpemF0aW9uLlxuXHRcdEBlbmQtc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHN0YXRpYyBkZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImRhdGFcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHR2YXIgWyBkYXRhLCBwYXJzZXIsIGRlZmVyLCBibHVlcHJpbnQgXSA9IE1ldGEuX19kZXNlcmlhbGl6ZURlZmVyX18oIGFyZ3VtZW50cywgdGhpcywgTWV0YS5wYXJzZXIgKTtcblxuXHRcdHRyeXtcblx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggYmx1ZXByaW50LCBwYXJzZXIoIGRhdGEgKSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBibHVlcHJpbnQsIGRlZmVyKCBkYXRhICksIFsgQ09SUlVQVEVELCBlcnJvciBdICk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIF9fZGVzZXJpYWxpemVEZWZlcl9fKCBwYXJhbWV0ZXIsIGJsdWVwcmludCwgcGFyc2VyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXI6cmVxdWlyZWRcIjogQXJndW1lbnRzLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50OnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcInBhcnNlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoICFBUkdVTUVOVFNfUEFUVEVSTi50ZXN0KCBwYXJhbWV0ZXIgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcGFyYW1ldGVyXCIgKTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGJsdWVwcmludFwiICk7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBwYXJzZXIgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwYXJzZXJcIiApO1xuXHRcdH1cblxuXHRcdGxldCBhcmd1bWVudCA9IHBhcmFtZXRlcjtcblxuXHRcdHRyeXtcblx0XHRcdHBhcmFtZXRlciA9IEFycmF5LmZyb20oIHBhcmFtZXRlciApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHByb2Nlc3MgcGFyYW1ldGVyLCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdH1cblxuXHRcdGlmKCBhcmd1bWVudC5sZW5ndGggPT0gMiApe1xuXHRcdFx0cGFyYW1ldGVyID0gWyBhcmd1bWVudFsgMCBdLCB1bmRlZmluZWQsIGFyZ3VtZW50WyAxIF0gXTtcblx0XHR9XG5cblx0XHRibHVlcHJpbnQgPSBwYXJhbWV0ZXIuc2xpY2UoIDEgKVxuXHRcdFx0LmZpbHRlciggKCBwYXJhbWV0ZXIgKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0dHlwZW9mIHBhcmFtZXRlciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHQmJiBcIm5hbWVcIiBpbiBwYXJhbWV0ZXJcblx0XHRcdFx0XHQmJiB0eXBlb2YgcGFyYW1ldGVyLm5hbWUgPT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRcdCYmIHBhcmFtZXRlci5uYW1lICE9IEVNUFRZX1NUUklOR1xuXHRcdFx0XHRcdCYmIENMQVNTX05BTUVfUEFUVEVSTi50ZXN0KCBwYXJhbWV0ZXIubmFtZSApXG5cdFx0XHRcdCk7XG5cdFx0XHR9IClcblx0XHRcdC5jb25jYXQoIGJsdWVwcmludCApWyAwIF07XG5cblx0XHRsZXQgZGVmZXIgPSBwYXJzZXI7XG5cblx0XHRwYXJzZXIgPSBwYXJhbWV0ZXIuc2xpY2UoIDEgKVxuXHRcdFx0LmZpbHRlciggKCBwYXJhbWV0ZXIgKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0dHlwZW9mIHBhcmFtZXRlciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0XHQhKCBcIm5hbWVcIiBpbiBwYXJhbWV0ZXIgKVxuXHRcdFx0XHRcdFx0fHwgdHlwZW9mIHBhcmFtZXRlci5uYW1lICE9IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdHx8IHBhcmFtZXRlci5uYW1lID09IEVNUFRZX1NUUklOR1xuXHRcdFx0XHRcdFx0fHwgcGFyYW1ldGVyLm5hbWUgPT0gXCJhbm9ueW1vdXNcIlxuXHRcdFx0XHRcdFx0fHwgcGFyYW1ldGVyLm5hbWUgPT0gXCJwYXJzZXJcIlxuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdH0gKVxuXHRcdFx0LmNvbmNhdCggZGVmZXIgKVsgMCBdO1xuXG5cdFx0cmV0dXJuIFsgcGFyYW1ldGVyWyAwIF0sIHBhcnNlciwgZGVmZXIsIGJsdWVwcmludCBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QHN0YXRpYy1tZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdENoZWNrcyBpZiB0aGUgdGFnIGlzIGNvbXBhdGlibGUuXG5cdFx0QGVuZC1zdGF0aWMtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0T3ZlcnJpZGUgZm9yIHNwZWNpZmljIGNvbXBhdGliaWxpdHkgY2hlY2tpbmcuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHN0YXRpYyBpc0NvbXBhdGlibGUoIHRhZyApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGFnXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIHR5cGVvZiB0YWcgIT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBUQUdfUEFUVEVSTi50ZXN0KCB0YWcgKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCBlbnRpdHksIG5hbWUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XHRcIm5hbWU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHR0aGlzLl9faW5pdGlhbGl6ZV9fKCBlbnRpdHksIG5hbWUgKTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFRoaXMgaXMgYW4gaW50ZXJuYWwgaW5pdGlhbGl6YXRpb24gcHJvY2VkdXJlLlxuXG5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdF9faW5pdGlhbGl6ZV9fKCBlbnRpdHksIG5hbWUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XHRcIm5hbWU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggIXRoaXMuY2hlY2soIGVudGl0eSApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlbnRpdHlcIiApO1xuXHRcdH1cblxuXHRcdGxldCB0eXBlID0gdHlwZW9mIGVudGl0eTtcblxuXHRcdG5hbWUgPSBuYW1lIHx8IHR5cGUucmVwbGFjZSggL14uLywgKCBtYXRjaCApID0+IG1hdGNoLnRvVXBwZXJDYXNlKCApICk7XG5cblx0XHRpZiggdHlwZW9mIG5hbWUgIT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbmFtZVwiICk7XG5cdFx0fVxuXG5cdFx0dGhpc1sgVFlQRSBdID0gdHlwZTtcblx0XHR0aGlzWyBOQU1FIF0gPSBuYW1lO1xuXHRcdHRoaXNbIEVOVElUWSBdID0gZW50aXR5O1xuXG5cdFx0dGhpc1sgRVJST1IgXSA9IFsgXTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0Rm9yIGdlbmVyaWMgY2hlY2tpbmcgb2YgZW50aXR5IHRoaXMgaXMgYWx3YXlzIHRydWUsXG5cdFx0XHRcdGFuZCB0aGlzIHNob3VsZCBiZSBvdmVycmlkZGVuLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0Y2hlY2soIGVudGl0eSApe1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0VGhpcyB3aWxsIG9ubHkgc3VwcG9ydCB0aHJlZSB0eXBlczsgc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4uXG5cblx0XHRcdFRoZXNlIHR5cGVzIGFyZSBzZXJpYWxpemFibGUuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHREbyBub3Qgb3ZlcnJpZGUgdGhpcy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0WyBTeW1ib2wudG9QcmltaXRpdmUgXSggdHlwZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidHlwZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRzd2l0Y2goIHR5cGUgKXtcblx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoICk7XG5cblx0XHRcdGNhc2UgXCJudW1iZXJcIjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9OdW1iZXIoICk7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvQm9vbGVhbiggKTtcblx0XHR9XG5cdH1cblxuXHQvKlxuXHRcdEBub3RlOlxuXHRcdFx0VGhlc2UgbWV0aG9kcyBzaG91bGQgYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblxuXHRnZXQgWyBTeW1ib2wudG9TdHJpbmdUYWcgXSggKXtcblx0XHRyZXR1cm4gdGhpcy5nZXROYW1lKCApO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0R2VuZXJhbGx5LCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBiYXNpYyBvYmplY3QgbWV0YSBzcGVjaWZpY2F0aW9uLlxuXG5cdFx0XHRUaGUgZm9ybWF0IHByb3BlcnR5IGRpY3RhdGVzIGhvdyB0aGUgdmFsdWUgbXVzdCBiZSBpbnRlcnByZXRlZC5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEZvciBzcGVjaWFsIHZhbHVlcyB0aGF0IG5lZWRzIHNwZWNpZmljIGNvbnZlcnNpb24gdG8gb2JqZWN0IHR5cGUsXG5cdFx0XHRcdHRoaXMgbWV0aG9kIG5lZWRzIHRvIGJlIG92ZXJyaWRkZW4uXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGdldCBbIE9CSkVDVCBdKCApe1xuXHRcdHJldHVybiBPYmplY3QuZnJlZXplKCB7XG5cdFx0XHRcInR5cGVcIjogdGhpcy5nZXRUeXBlKCApLFxuXHRcdFx0XCJuYW1lXCI6IHRoaXMuZ2V0TmFtZSggKSxcblx0XHRcdFwidmFsdWVcIjogdGhpcy5zZXJpYWxpemUoICksXG5cdFx0XHRcImZvcm1hdFwiOiBEQVRBX1VSTF9UQUdcblx0XHR9ICk7XG5cdH1cblxuXHRnZXQgWyBCT09MRUFOIF0oICl7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRnZXQgWyBTVFJJTkcgXSggKXtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCB0aGlzLnZhbHVlT2YoICkgKTtcblx0fVxuXG5cdGdldCBbIE5VTUJFUiBdKCApe1xuXHRcdHJldHVybiBJbmZpbml0eTtcblx0fVxuXG5cdC8qO1xuXHRcdEBnZXQtbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBvcmlnaW5hbCB2YWx1ZS5cblxuXHRcdFx0QXMgbXVjaCBhcyBwb3NzaWJsZSBkbyBub3Qgb3ZlcnJpZGUgdGhpcy5cblx0XHRAZW5kLWdldC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRnZXQgWyBWQUxVRSBdKCApe1xuXHRcdHJldHVybiB0aGlzWyBFTlRJVFkgXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybiBhIHN0cmluZyB0YWcgZm9ybWF0LFxuXG5cdFx0XHRcdFt0eXBlIE5hbWU6dmFsdWVdXG5cblx0XHRcdFRoZSB2YWx1ZSBpcyBvcHRpb25hbC5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHRhZyggdmFsdWUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInZhbHVlXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIHR5cGVvZiB2YWx1ZSAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHR2YWx1ZSA9IEVNUFRZX1NUUklORztcblx0XHR9XG5cblx0XHRpZiggdmFsdWUgIT0gRU1QVFlfU1RSSU5HICl7XG5cdFx0XHR2YWx1ZSA9IGA6JHsgdmFsdWUgfWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGBbJHsgdGhpcy5nZXRUeXBlKCApIH0gJHsgdGhpcy5nZXROYW1lKCApIH06QHZhbHVlXWAucmVwbGFjZSggXCI6QHZhbHVlXCIsIHZhbHVlICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBvYmplY3QgY29udmVyc2lvbiBvZiB0aGlzIGRhdGEuXG5cblx0XHRcdFRoaXMgd2lsbCBiZSB1c2VkIG9uIEpTT04uc3RyaW5naWZ5IG1ldGhvZC5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHRvSlNPTiggKXtcblx0XHRyZXR1cm4gdGhpc1sgT0JKRUNUIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBvYmplY3QgY29udmVyc2lvbiBvZiB0aGlzIGRhdGEuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHR0b09iamVjdCggKXtcblx0XHRyZXR1cm4gdGhpc1sgT0JKRUNUIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBib29sZWFuIGNvbnZlcnNpb24gb2YgdGhpcyBkYXRhLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0QXMgbXVjaCBhcyBwb3NzaWJsZSwgZG8gbm90IG92ZXJyaWRlIHRoaXMgbWV0aG9kLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHR0b0Jvb2xlYW4oICl7XG5cdFx0cmV0dXJuIHRoaXNbIEJPT0xFQU4gXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIHN0cmluZyBjb252ZXJzaW9uIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0dG9TdHJpbmcoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFNUUklORyBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgbnVtZXJpY2FsIGNvbnZlcnNpb24gb2YgdGhpcyBkYXRhLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0QXMgbXVjaCBhcyBwb3NzaWJsZSwgZG8gbm90IG92ZXJyaWRlIHRoaXMgbWV0aG9kLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHR0b051bWJlciggKXtcblx0XHRyZXR1cm4gdGhpc1sgTlVNQkVSIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBvcmlnaW5hbCB2YWx1ZS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0dmFsdWVPZiggKXtcblx0XHRyZXR1cm4gdGhpc1sgVkFMVUUgXTtcblx0fVxuXG5cdHR5cGVPZiggdHlwZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidHlwZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgdHlwZSA9PSBcInN0cmluZ1wiICl7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHRoaXMudmFsdWVPZiggKSA9PSB0eXBlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qXG5cdFx0QG5vdGU6XG5cdFx0XHRTb21lIGNhc2VzIHRoYXQgaW5zdGFuY2VPZiBuZWVkcyB0byBiZSBvdmVycmlkZGVuLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRpbnN0YW5jZU9mKCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImJsdWVwcmludDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgZW50aXR5ID0gdGhpcy52YWx1ZU9mKCApO1xuXG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgPT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHR0aGlzIGluc3RhbmNlb2YgYmx1ZXByaW50XG5cdFx0XHRcdHx8IGVudGl0eSBpbnN0YW5jZW9mIGJsdWVwcmludFxuXHRcdFx0XHR8fCB0eXBlb2YgYmx1ZXByaW50Lm5hbWUgPT0gXCJzdHJpbmdcIiAmJiB0aGlzLmluc3RhbmNlT2YoIGJsdWVwcmludC5uYW1lIClcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgPT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0aWYoIHRoaXMudHlwZU9mKCBibHVlcHJpbnQudG9Mb3dlckNhc2UoICkgKSApe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGVudGl0eSA9PT0gbnVsbCB8fCB0eXBlb2YgZW50aXR5ID09IFwidW5kZWZpbmVkXCIgKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdHlwZW9mIGVudGl0eSA9PSBcImZ1bmN0aW9uXCIgJiYgZW50aXR5Lm5hbWUgPT09IGJsdWVwcmludCApe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0ZG97XG5cdFx0XHRcdGlmKCAoXG5cdFx0XHRcdFx0dHlwZW9mIGVudGl0eSA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHQmJiBlbnRpdHkubmFtZSA9PT0gYmx1ZXByaW50XG5cdFx0XHRcdCkgfHwgKFxuXHRcdFx0XHRcdHR5cGVvZiBlbnRpdHkuY29uc3RydWN0b3IgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0JiYgZW50aXR5LmNvbnN0cnVjdG9yLm5hbWUgPT09IGJsdWVwcmludFxuXHRcdFx0XHQpICl7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH13aGlsZSggZW50aXR5ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBlbnRpdHkgKSApO1xuXG5cdFx0XHQvKjtcblx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0SWYgeW91IHJlbW92ZWQgdGhlIGNvbmRpdGlvbiwgdGhpcyBtYXkgY2F1c2UgdW53YW50ZWQgYmVoYXZpb3IuXG5cdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0Ki9cblx0XHRcdGlmKCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgIT0gYmx1ZXByaW50ICl7XG5cdFx0XHRcdGxldCBlbnRpdHkgPSB0aGlzO1xuXG5cdFx0XHRcdGRve1xuXHRcdFx0XHRcdGlmKCAoXG5cdFx0XHRcdFx0XHR0eXBlb2YgZW50aXR5ID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdFx0JiYgZW50aXR5Lm5hbWUgPT09IGJsdWVwcmludFxuXHRcdFx0XHRcdCkgfHwgKFxuXHRcdFx0XHRcdFx0dHlwZW9mIGVudGl0eS5jb25zdHJ1Y3RvciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHRcdCYmIGVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lID09PSBibHVlcHJpbnRcblx0XHRcdFx0XHQpICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH13aGlsZSggZW50aXR5ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBlbnRpdHkgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRUaGlzIGlzIHRoZSBnZW5lcmljIHN0cmluZ2lmeSBmdW5jdGlvbixcblx0XHRcdFx0Zm9yIGNvbXBsZXggZW50aXR5IHlvdSBuZWVkIHRvIG92ZXJyaWRlIHRoaXMuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHN0cmluZ2lmeSggKXtcblx0XHR0cnl7XG5cdFx0XHRpZiggdGhpcy5nZXRUeXBlKCApID09IFwib2JqZWN0XCIgKXtcblx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCB0aGlzLnZhbHVlT2YoICkgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIEVNUFRZX1NUUklORyArIHRoaXMudmFsdWVPZiggKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHRyeXtcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWVPZiggKS50b1N0cmluZyggKTtcblxuXHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZyggKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRUaGlzIHdpbGwgY2FsbCB0aGUgc3RhdGljIGRlc2VyaWFsaXphdGlvbiBwcm9jZWR1cmUgb2YgdGhlIGNvbnN0cnVjdG9yLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0ZGVzZXJpYWxpemUoIGRhdGEsIHBhcnNlciwgYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJkYXRhXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcImJsdWVwcmludFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IHByb2NlZHVyZSA9IE1ldGEuZGVzZXJpYWxpemU7XG5cblx0XHRpZihcblx0XHRcdHR5cGVvZiB0aGlzLmNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgdHlwZW9mIHRoaXMuY29uc3RydWN0b3IuZGVzZXJpYWxpemUgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQmJiB0aGlzLmNvbnN0cnVjdG9yLmRlc2VyaWFsaXplLm5hbWUgPT09IFwiZGVzZXJpYWxpemVcIlxuXHRcdCl7XG5cdFx0XHRwcm9jZWR1cmUgPSB0aGlzLmNvbnN0cnVjdG9yLmRlc2VyaWFsaXplO1xuXHRcdH1cblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDIgKXtcblx0XHRcdHJldHVybiBwcm9jZWR1cmUoIHRoaXMudmFsdWVPZiggKSwgYXJndW1lbnRzWyAwIF0sIGFyZ3VtZW50c1sgMSBdICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBwcm9jZWR1cmUoIGRhdGEsIHBhcnNlciwgYmx1ZXByaW50ICk7XG5cdFx0fVxuXHR9XG5cblx0Lyo7XG5cdFx0QHN0YXRpYy1tZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdERlZmF1bHQgZ2VuZXJpYyBzZXJpYWxpemF0aW9uIGludGVycHJldGVyLlxuXHRcdEBlbmQtc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHN0YXRpYyBpbnRlcnByZXRlciggc2VsZiApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwic2VsZlwiOiBNZXRhXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCB2YWx1ZSA9IHN4dHk0KCBzZWxmLnN0cmluZ2lmeSggKSApLmVuY29kZSggKTtcblxuXHRcdHJldHVybiBgJHsgREVGQVVMVF9EQVRBX1VSTF9QUkVGSVgucmVwbGFjZSggXCJAdHlwZVwiLCBzZWxmLmdldFR5cGUoICkgKSB9JHsgdmFsdWUgfWA7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIGEgdGFnIGZvcm1hdCB3aXRoIHZhbHVlLlxuXHRcdFx0VGhlIHZhbHVlIG11c3QgYmUgYSBkYXRhIFVSTCBmb3JtYXQuXG5cblx0XHRcdFRoZSBpbnRlcnByZXRlciBmdW5jdGlvbiB3aWxsIGFjY2VwdCBhIGNvbnRleHQgcGFyYW1ldGVyLlxuXG5cdFx0XHRCeSBkZWZhdWx0IHRoaXMgd2lsbCBzZXJpYWxpemUgdGhlIGVudGl0eSB1c2luZyBwbGFpbi90ZXh0IGJhc2U2NCBkYXRhIFVSTCBmb3JtYXQuXG5cblx0XHRcdFRoZSBpbnRlcnByZXRlciBtdXN0IHJldHVybiBhIHNlcmlhbGl6ZSBmb3JtYXQgb2YgdGhlIGRhdGEgdG8gYmUgcGxhY2VkIG9uIHRoZSB0YWcuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRzZXJpYWxpemUoIGludGVycHJldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpbnRlcnByZXRlclwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IGRlZmVyID0gTWV0YS5pbnRlcnByZXRlcjtcblxuXHRcdGlmKCB0eXBlb2YgaW50ZXJwcmV0ZXIgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRpbnRlcnByZXRlciA9IGRlZmVyO1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdHJldHVybiB0aGlzLnRhZyggaW50ZXJwcmV0ZXIoIHRoaXMgKSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0cmV0dXJuIHRoaXMudGFnKCBkZWZlciggdGhpcyApICk7XG5cdFx0fVxuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0U3RyaWN0IHZhbHVlIGVxdWFsaXR5LlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0T3ZlcnJpZGUgZm9yIGRlZXAgY2hlY2tpbmcuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGlzRXF1YWwoIGVudGl0eSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBlbnRpdHkgaW5zdGFuY2VvZiBNZXRhICl7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZU9mKCApID09PSBlbnRpdHkudmFsdWVPZiggKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy52YWx1ZU9mKCApID09PSBlbnRpdHk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRXaGVuIHRoZSBkZXNlcmlhbGl6YXRpb24gZmFpbHMsIG9yIGlmIHRoZXJlIGlzIGVycm9yLCB0aGlzIG1ldGhvZCByZXR1cm5zIHRydWUuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRpc0NvcnJ1cHRlZCggKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dGhpc1sgQ09SUlVQVEVEIF0gPT09IENPUlJVUFRFRFxuXHRcdFx0fHwgdGhpcy5oYXNFcnJvciggKVxuXHRcdCk7XG5cdH1cblxuXHRpc1RhZ2dlZCggKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dGhpc1sgVEFHR0VEIF0gPT09IFRBR0dFRFxuXHRcdFx0fHwgVEFHX1BBVFRFUk4udGVzdCggdGhpcy5zdHJpbmdpZnkoICkgKVxuXHRcdCk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRJZiB0aGUgZW50aXR5IGlzIG5vdCBhIHRhZyBmb3JtYXQgdGhlbiBpdCdzIHJhdy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGlzUmF3KCApe1xuXHRcdHJldHVybiAhdGhpcy5pc1RhZ2dlZCggKTtcblx0fVxuXG5cdHNldEVycm9yKCBlcnJvciApe1xuXHRcdGlmKCBlcnJvciBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHR0aGlzLnB1c2hFcnJvciggZXJyb3IgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHB1c2hFcnJvciggZXJyb3IgKXtcblx0XHRpZiggZXJyb3IgaW5zdGFuY2VvZiBFcnJvciApe1xuXHRcdFx0dGhpc1sgRVJST1IgXS5wdXNoKCBlcnJvciApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0RXJyb3IoICl7XG5cdFx0cmV0dXJuIHRoaXNbIEVSUk9SIF0ucmV2ZXJzZSggKVsgMCBdO1xuXHR9XG5cblx0aGFzRXJyb3IoICl7XG5cdFx0cmV0dXJuIHRoaXNbIEVSUk9SIF0ubGVuZ3RoID4gMDtcblx0fVxuXG5cdHRyYW5zZmVyRXJyb3IoIGNvbnRhaW5lciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29udGFpbmVyXCI6IEFycmF5XG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBjb250YWluZXIgaW5zdGFuY2VvZiBBcnJheSApe1xuXHRcdFx0bGV0IGxpc3QgPSB0aGlzWyBFUlJPUiBdLnJldmVyc2UoICk7XG5cdFx0XHRsZXQgaW5kZXggPSBsaXN0Lmxlbmd0aDtcblx0XHRcdHdoaWxlKCBpbmRleC0tICkgY29udGFpbmVyLnB1c2goIGxpc3RbIGluZGV4IF0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIGNsb25lIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGNsb25lKCBzdGF0ZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwic3RhdGVcIjogQXJyYXlcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB0aGlzLmNvbnN0cnVjdG9yLCB0aGlzLnZhbHVlT2YoICksIHN0YXRlICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBNZXRhIGluc3RhbmNlIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdG5hdGl2ZSggc3RhdGUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInN0YXRlXCI6IEFycmF5XG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiBNZXRhLmNyZWF0ZSggTWV0YSwgdGhpcy52YWx1ZU9mKCApLCBzdGF0ZSApO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV2ZXJ0cyB0byB0aGUgTWV0YSBpbnN0YW5jZSBvZiB0aGlzIGRhdGEsXG5cdFx0XHRcdHBhc3NpbmcgdGhlIGluY3VycmVkIHN0YXRlIGZyb20gcHJldmlvdXMuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRyZXZlcnQoICl7XG5cdFx0bGV0IHN0YXRlID0gWyBdO1xuXG5cdFx0aWYoIHRoaXMuaXNDb3JydXB0ZWQoICkgKXtcblx0XHRcdHN0YXRlLnB1c2goIENPUlJVUFRFRCApO1xuXHRcdH1cblxuXHRcdGlmKCB0aGlzLmhhc0Vycm9yKCApICl7XG5cdFx0XHR0aGlzLnRyYW5zZmVyRXJyb3IoIHN0YXRlICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlKCBzdGF0ZSApO1xuXHR9XG5cblx0Z2V0VHlwZSggKXtcblx0XHRyZXR1cm4gdGhpc1sgVFlQRSBdO1xuXHR9XG5cblx0Z2V0TmFtZSggKXtcblx0XHRyZXR1cm4gdGhpc1sgTkFNRSBdO1xuXHR9XG59XG5cbmhhcmRlbiggXCJOQU1FXCIsIE5BTUUsIE1ldGEgKTtcbmhhcmRlbiggXCJFTlRJVFlcIiwgRU5USVRZLCBNZXRhICk7XG5oYXJkZW4oIFwiVFlQRVwiLCBUWVBFLCBNZXRhICk7XG5cbmhhcmRlbiggXCJPQkpFQ1RcIiwgT0JKRUNULCBNZXRhICk7XG5oYXJkZW4oIFwiQk9PTEVBTlwiLCBCT09MRUFOLCBNZXRhICk7XG5oYXJkZW4oIFwiU1RSSU5HXCIsIFNUUklORywgTWV0YSApO1xuaGFyZGVuKCBcIk5VTUJFUlwiLCBOVU1CRVIsIE1ldGEgKTtcbmhhcmRlbiggXCJWQUxVRVwiLCBWQUxVRSwgTWV0YSApO1xuXG5oYXJkZW4oIFwiR0FSQkFHRVwiLCBHQVJCQUdFLCBNZXRhICk7XG5oYXJkZW4oIFwiQ09SUlVQVEVEXCIsIENPUlJVUFRFRCwgTWV0YSApO1xuaGFyZGVuKCBcIlRBR0dFRFwiLCBUQUdHRUQsIE1ldGEgKTtcblxuaGFyZGVuKCBcIlRBR19QQVRURVJOXCIsIFRBR19QQVRURVJOLCBNZXRhICk7XG5cbmhhcmRlbiggXCJEQVRBX1VSTF9UQUdcIiwgREFUQV9VUkxfVEFHLCBNZXRhICk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWV0YTtcbiJdfQ==
//# sourceMappingURL=meta.support.js.map
