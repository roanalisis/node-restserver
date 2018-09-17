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
              */var _stringify = require("babel-runtime/core-js/json/stringify");var _stringify2 = _interopRequireDefault(_stringify);var _from = require("babel-runtime/core-js/array/from");var _from2 = _interopRequireDefault(_from);var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _keys = require("babel-runtime/core-js/object/keys");var _keys2 = _interopRequireDefault(_keys);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var blon = require("blon");
var fno = require("fno");
var glyo = require("glyo");
var ndfo = require("ndfo");
var nol = require("nol");
var numo = require("numo");
var stro = require("stro");
var sxty4 = require("sxty4");

var Digit = numo.Digit;
var Glyph = glyo.Glyph;
var Null = nol.Null;
var Procedure = fno.Procedure;
var Sequence = stro.Sequence;
var State = blon.State;
var Undefined = ndfo.Undefined;

var Meta = require("ehm")();

var OBJECT_NAME = "Object";
var OBJECT_TYPE = "object";
var OBJECT_DATA_URL_PREFIX = "data:text/object;base64,";

var SERIALIZE_OBJECT_TAG_PATTERN = /^\[object Object(?:\:(.+?))?\]$/;var

Data = function (_Meta) {(0, _inherits3.default)(Data, _Meta);(0, _createClass3.default)(Data, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			return (
				(typeof instance === "undefined" ? "undefined" : (0, _typeof3.default)(instance)) == OBJECT_TYPE ||
				instance instanceof Object ||
				typeof instance == "function" && instance.name === OBJECT_NAME ||
				Meta.instanceOf(instance, this));

		} }, { key: "parser", value: function parser(

		data) {
			/*;
         	@meta-configuration:
         		{
         			"data:required": "string"
         		}
         	@end-meta-configuration
         */

			if (data instanceof Array) {
				var list = data.reverse();
				var index = list.length;
				while (index--) {
					data[index] = Data.parser(data[index]);
				}

				return data;

			} else if (typeof data == "string") {
				return Data.parser(Meta.deserialize(data).valueOf());

			} else if (
			(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data)) == "object" &&
			"type" in data && typeof data.type == "string" &&
			"name" in data && typeof data.name == "string" &&
			"value" in data && typeof data.value == "string" &&
			data.format == Meta.DATA_URL_TAG &&
			Meta.TAG_PATTERN.test(data.value))
			{
				switch (data.type) {
					case "boolean":
						return State.deserialize(data.value).valueOf();

					case "function":
						return Procedure.deserialize(data.value).valueOf();

					case "number":
						return Digit.deserialize(data.value).valueOf();

					case "object":
						if (data.name == Null.name) {
							return Null.deserialize(data.value).valueOf();
						}

						return Data.deserialize(data.value).valueOf();

					case "string":
						return Sequence.deserialize(data.value).valueOf();

					case "symbol":
						return Glyph.deserialize(data.value).valueOf();

					case "undefined":
						return Undefined.deserialize(data.value).valueOf();}


			} else if ((typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data)) == "object") {
				var key = (0, _keys2.default)(data).reverse();
				var _index = key.length;
				while (_index--) {
					var property = key[_index];
					data[property] = Data.parser(data[property]);
				}

				return data;
			}

			throw new Error("cannot parse data, " + error);
		} }, { key: "deserialize", value: function deserialize(

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

			Meta.__deserializeDefer__(arguments, this, Data.parser),_Meta$__deserializeDe2 = (0, _slicedToArray3.default)(_Meta$__deserializeDe, 4),data = _Meta$__deserializeDe2[0],parser = _Meta$__deserializeDe2[1],defer = _Meta$__deserializeDe2[2],blueprint = _Meta$__deserializeDe2[3];

			var entity = Meta.deserialize(data, parser, blueprint);

			if (entity.isCorrupted()) {
				entity = Meta.deserialize(data, defer, blueprint);
			}

			if (entity.isCorrupted()) {
				return entity.revert();
			}

			return entity;
		} }, { key: "isCompatible", value: function isCompatible(

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

			return SERIALIZE_OBJECT_TAG_PATTERN.test(tag);
		} }]);

	function Data(entity) {(0, _classCallCheck3.default)(this, Data);
		/*;
                                                                   	@meta-configuration:
                                                                   		{
                                                                   			"entity:required": [
                                                                   				"object",
                                                                   				Object
                                                                   			]
                                                                   		}
                                                                   	@end-meta-configuration
                                                                   */return (0, _possibleConstructorReturn3.default)(this, (Data.__proto__ || (0, _getPrototypeOf2.default)(Data)).call(this,

		entity, OBJECT_NAME));
	}(0, _createClass3.default)(Data, [{ key: "check", value: function check(

		entity) {
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
				(typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) == "object" ||
				entity instanceof Object);

		} }, { key: "__toObject__", value: function __toObject__(





		object) {
			/*;
           	@meta-configuration:
           		"object:required": [
           			"object",
           			Object
           		]
           	@end-meta-configuration
           */

			if (object instanceof Array) {
				var array = (0, _from2.default)(object).reverse();

				var index = array.length;
				while (index--) {
					var element = array[index];

					var type = typeof element === "undefined" ? "undefined" : (0, _typeof3.default)(element);

					switch (type) {
						case "boolean":
							array[index] = blon(element).toObject();
							break;

						case "function":
							array[index] = fno(element).toObject();
							break;

						case "number":
							array[index] = numo(element).toObject();
							break;

						case "object":
							if (element === null) {
								array[index] = nol(element).toObject();

							} else {
								array[index] = Meta.create(Data, element).toObject();
							}

							break;

						case "string":
							array[index] = stro(element).toObject();
							break;

						case "symbol":
							array[index] = glyo(element).toObject();
							break;

						case "undefined":
							array[index] = ndfo(element).toObject();
							break;}

				}

				return array;

			} else {
				var data = {};
				var property = (0, _keys2.default)(object).sort().reverse();

				var _index2 = property.length;
				while (_index2--) {
					var key = property[_index2];

					var value = object[key];

					var _type = typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value);

					switch (_type) {
						case "boolean":
							data[key] = blon(value).toObject();
							break;

						case "function":
							data[key] = fno(value).toObject();
							break;

						case "number":
							data[key] = numo(value).toObject();
							break;

						case "object":
							if (value === null) {
								data[key] = nol(value).toObject();

							} else {
								data[key] = Meta.create(Data, value).toObject();
							}

							break;

						case "string":
							data[key] = stro(value).toObject();
							break;

						case "symbol":
							data[key] = glyo(value).toObject();
							break;

						case "undefined":
							data[key] = ndfo(value).toObject();
							break;}

				}

				return data;
			}
		} }, { key: "stringify", value: function stringify()













		{
			return (0, _stringify2.default)(this, function replacer(key, value) {
				return Meta.create(value).serialize();
			});
		} }, { key: "serialize", value: function serialize(

		interpreter) {
			/*;
                	@meta-configuration:
                		{
                			"interpreter": "function"
                		}
                	@end-meta-configuration
                */

			return this.stringify().replace(/\"/g, "");
		} }, { key: "isEqual", value: function isEqual(

		entity) {
			if ((typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) != "object") {
				return false;
			}

			return this.serialize() === Data.create(entity).serialize();
		} }, { key: Meta.OBJECT, get: function get() {return this.__toObject__(this.valueOf());} }, { key: Meta.BOOLEAN, get: function get() {return this.toNumber() > 0;} }, { key: Meta.STRING, get: function get() {return (0, _stringify2.default)(this);} }, { key: Meta.NUMBER, get: function get() {return (0, _keys2.default)(this.valueOf()).length;} }]);return Data;}(Meta);


module.exports = Data;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJibG9uIiwicmVxdWlyZSIsImZubyIsImdseW8iLCJuZGZvIiwibm9sIiwibnVtbyIsInN0cm8iLCJzeHR5NCIsIkRpZ2l0IiwiR2x5cGgiLCJOdWxsIiwiUHJvY2VkdXJlIiwiU2VxdWVuY2UiLCJTdGF0ZSIsIlVuZGVmaW5lZCIsIk1ldGEiLCJPQkpFQ1RfTkFNRSIsIk9CSkVDVF9UWVBFIiwiT0JKRUNUX0RBVEFfVVJMX1BSRUZJWCIsIlNFUklBTElaRV9PQkpFQ1RfVEFHX1BBVFRFUk4iLCJEYXRhIiwiaW5zdGFuY2UiLCJPYmplY3QiLCJuYW1lIiwiaW5zdGFuY2VPZiIsImRhdGEiLCJBcnJheSIsImxpc3QiLCJyZXZlcnNlIiwiaW5kZXgiLCJsZW5ndGgiLCJwYXJzZXIiLCJkZXNlcmlhbGl6ZSIsInZhbHVlT2YiLCJ0eXBlIiwidmFsdWUiLCJmb3JtYXQiLCJEQVRBX1VSTF9UQUciLCJUQUdfUEFUVEVSTiIsInRlc3QiLCJrZXkiLCJwcm9wZXJ0eSIsIkVycm9yIiwiZXJyb3IiLCJibHVlcHJpbnQiLCJfX2Rlc2VyaWFsaXplRGVmZXJfXyIsImFyZ3VtZW50cyIsImRlZmVyIiwiZW50aXR5IiwiaXNDb3JydXB0ZWQiLCJyZXZlcnQiLCJ0YWciLCJvYmplY3QiLCJhcnJheSIsImVsZW1lbnQiLCJ0b09iamVjdCIsImNyZWF0ZSIsInNvcnQiLCJyZXBsYWNlciIsInNlcmlhbGl6ZSIsImludGVycHJldGVyIiwic3RyaW5naWZ5IiwicmVwbGFjZSIsIk9CSkVDVCIsIl9fdG9PYmplY3RfXyIsIkJPT0xFQU4iLCJ0b051bWJlciIsIlNUUklORyIsIk5VTUJFUiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlFQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQs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LEtBQTNCLEVBQWtDLEVBQWxDLENBQVA7QUFDQSxHOztBQUVRZCxRLEVBQVE7QUFDaEIsT0FBSSxRQUFPQSxNQUFQLHVEQUFPQSxNQUFQLE1BQWlCLFFBQXJCLEVBQStCO0FBQzlCLFdBQU8sS0FBUDtBQUNBOztBQUVELFVBQU8sS0FBS1csU0FBTCxPQUFzQnZDLEtBQUtvQyxNQUFMLENBQWFSLE1BQWIsRUFBc0JXLFNBQXRCLEVBQTdCO0FBQ0EsRyxXQXZKSzVDLEtBQUtnRCxNLHNCQUFXLENBQ3JCLE9BQU8sS0FBS0MsWUFBTCxDQUFtQixLQUFLL0IsT0FBTCxFQUFuQixDQUFQLENBQ0EsQyxXQWlIS2xCLEtBQUtrRCxPLHNCQUFZLENBQ3RCLE9BQU8sS0FBS0MsUUFBTCxLQUFtQixDQUExQixDQUNBLEMsV0FFS25ELEtBQUtvRCxNLHNCQUFXLENBQ3JCLE9BQU8seUJBQWdCLElBQWhCLENBQVAsQ0FDQSxDLFdBRUtwRCxLQUFLcUQsTSxzQkFBVyxDQUNyQixPQUFPLG9CQUFhLEtBQUtuQyxPQUFMLEVBQWIsRUFBK0JILE1BQXRDLENBQ0EsQyxtQkF4UmlCZixJOzs7QUFxVG5Cc0QsT0FBT0MsT0FBUCxHQUFpQmxELElBQWpCIiwiZmlsZSI6ImRhdGEuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwib2Jqb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwib2Jqby9kYXRhLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZGF0YS5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwib2Jqb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL29iam8uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJvYmpvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlLFxuXHRcdFx0XCJpbnRlcm5hbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdERhdGEgY2xhc3Mgd3JhcHBlci5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYmxvblwiOiBcImJsb25cIixcblx0XHRcdFwiZWhtXCI6IFwiZWhtXCIsXG5cdFx0XHRcImZub1wiOiBcImZub1wiLFxuXHRcdFx0XCJnbHlvXCI6IFwiZ2x5b1wiLFxuXHRcdFx0XCJuZGZvXCI6IFwibmRmb1wiLFxuXHRcdFx0XCJub2xcIjogXCJub2xcIixcblx0XHRcdFwibnVtb1wiOiBcIm51bW9cIixcblx0XHRcdFwic3Ryb1wiOiBcInN0cm9cIixcblx0XHRcdFwic3h0eTRcIjogXCJzeHR5NFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGJsb24gPSByZXF1aXJlKCBcImJsb25cIiApO1xuY29uc3QgZm5vID0gcmVxdWlyZSggXCJmbm9cIiApO1xuY29uc3QgZ2x5byA9IHJlcXVpcmUoIFwiZ2x5b1wiICk7XG5jb25zdCBuZGZvID0gcmVxdWlyZSggXCJuZGZvXCIgKTtcbmNvbnN0IG5vbCA9IHJlcXVpcmUoIFwibm9sXCIgKTtcbmNvbnN0IG51bW8gPSByZXF1aXJlKCBcIm51bW9cIiApO1xuY29uc3Qgc3RybyA9IHJlcXVpcmUoIFwic3Ryb1wiICk7XG5jb25zdCBzeHR5NCA9IHJlcXVpcmUoIFwic3h0eTRcIiApO1xuXG5jb25zdCBEaWdpdCA9IG51bW8uRGlnaXQ7XG5jb25zdCBHbHlwaCA9IGdseW8uR2x5cGg7XG5jb25zdCBOdWxsID0gbm9sLk51bGw7XG5jb25zdCBQcm9jZWR1cmUgPSBmbm8uUHJvY2VkdXJlO1xuY29uc3QgU2VxdWVuY2UgPSBzdHJvLlNlcXVlbmNlO1xuY29uc3QgU3RhdGUgPSBibG9uLlN0YXRlO1xuY29uc3QgVW5kZWZpbmVkID0gbmRmby5VbmRlZmluZWQ7XG5cbmNvbnN0IE1ldGEgPSByZXF1aXJlKCBcImVobVwiICkoICk7XG5cbmNvbnN0IE9CSkVDVF9OQU1FID0gXCJPYmplY3RcIjtcbmNvbnN0IE9CSkVDVF9UWVBFID0gXCJvYmplY3RcIjtcbmNvbnN0IE9CSkVDVF9EQVRBX1VSTF9QUkVGSVggPSBcImRhdGE6dGV4dC9vYmplY3Q7YmFzZTY0LFwiO1xuXG5jb25zdCBTRVJJQUxJWkVfT0JKRUNUX1RBR19QQVRURVJOID0gL15cXFtvYmplY3QgT2JqZWN0KD86XFw6KC4rPykpP1xcXSQvO1xuXG5jbGFzcyBEYXRhIGV4dGVuZHMgTWV0YSB7XG5cdHN0YXRpYyBbIFN5bWJvbC5oYXNJbnN0YW5jZSBdKCBpbnN0YW5jZSApe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0eXBlb2YgaW5zdGFuY2UgPT0gT0JKRUNUX1RZUEVcblx0XHRcdHx8IGluc3RhbmNlIGluc3RhbmNlb2YgT2JqZWN0XG5cdFx0XHR8fCB0eXBlb2YgaW5zdGFuY2UgPT0gXCJmdW5jdGlvblwiICYmIGluc3RhbmNlLm5hbWUgPT09IE9CSkVDVF9OQU1FXG5cdFx0XHR8fCBNZXRhLmluc3RhbmNlT2YoIGluc3RhbmNlLCB0aGlzIClcblx0XHQpO1xuXHR9XG5cblx0c3RhdGljIHBhcnNlciggZGF0YSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZGF0YTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBkYXRhIGluc3RhbmNlb2YgQXJyYXkgKXtcblx0XHRcdGxldCBsaXN0ID0gZGF0YS5yZXZlcnNlKCApO1xuXHRcdFx0bGV0IGluZGV4ID0gbGlzdC5sZW5ndGg7XG5cdFx0XHR3aGlsZSggaW5kZXgtLSApe1xuXHRcdFx0XHRkYXRhWyBpbmRleCBdID0gRGF0YS5wYXJzZXIoIGRhdGFbIGluZGV4IF0gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGRhdGE7XG5cblx0XHR9ZWxzZSBpZiggdHlwZW9mIGRhdGEgPT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0cmV0dXJuIERhdGEucGFyc2VyKCBNZXRhLmRlc2VyaWFsaXplKCBkYXRhICkudmFsdWVPZiggKSApO1xuXG5cdFx0fWVsc2UgaWYoXG5cdFx0XHR0eXBlb2YgZGF0YSA9PSBcIm9iamVjdFwiXG5cdFx0XHQmJiBcInR5cGVcIiBpbiBkYXRhICYmIHR5cGVvZiBkYXRhLnR5cGUgPT0gXCJzdHJpbmdcIlxuXHRcdFx0JiYgXCJuYW1lXCIgaW4gZGF0YSAmJiB0eXBlb2YgZGF0YS5uYW1lID09IFwic3RyaW5nXCJcblx0XHRcdCYmIFwidmFsdWVcIiBpbiBkYXRhICYmIHR5cGVvZiBkYXRhLnZhbHVlID09IFwic3RyaW5nXCJcblx0XHRcdCYmIGRhdGEuZm9ybWF0ID09IE1ldGEuREFUQV9VUkxfVEFHXG5cdFx0XHQmJiBNZXRhLlRBR19QQVRURVJOLnRlc3QoIGRhdGEudmFsdWUgKVxuXHRcdCl7XG5cdFx0XHRzd2l0Y2goIGRhdGEudHlwZSApe1xuXHRcdFx0XHRjYXNlIFwiYm9vbGVhblwiOlxuXHRcdFx0XHRcdHJldHVybiBTdGF0ZS5kZXNlcmlhbGl6ZSggZGF0YS52YWx1ZSApLnZhbHVlT2YoICk7XG5cblx0XHRcdFx0Y2FzZSBcImZ1bmN0aW9uXCI6XG5cdFx0XHRcdFx0cmV0dXJuIFByb2NlZHVyZS5kZXNlcmlhbGl6ZSggZGF0YS52YWx1ZSApLnZhbHVlT2YoICk7XG5cblx0XHRcdFx0Y2FzZSBcIm51bWJlclwiOlxuXHRcdFx0XHRcdHJldHVybiBEaWdpdC5kZXNlcmlhbGl6ZSggZGF0YS52YWx1ZSApLnZhbHVlT2YoICk7XG5cblx0XHRcdFx0Y2FzZSBcIm9iamVjdFwiOlxuXHRcdFx0XHRcdGlmKCBkYXRhLm5hbWUgPT0gTnVsbC5uYW1lICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gTnVsbC5kZXNlcmlhbGl6ZSggZGF0YS52YWx1ZSApLnZhbHVlT2YoICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIERhdGEuZGVzZXJpYWxpemUoIGRhdGEudmFsdWUgKS52YWx1ZU9mKCApO1xuXG5cdFx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0XHRyZXR1cm4gU2VxdWVuY2UuZGVzZXJpYWxpemUoIGRhdGEudmFsdWUgKS52YWx1ZU9mKCApO1xuXG5cdFx0XHRcdGNhc2UgXCJzeW1ib2xcIjpcblx0XHRcdFx0XHRyZXR1cm4gR2x5cGguZGVzZXJpYWxpemUoIGRhdGEudmFsdWUgKS52YWx1ZU9mKCApO1xuXG5cdFx0XHRcdGNhc2UgXCJ1bmRlZmluZWRcIjpcblx0XHRcdFx0XHRyZXR1cm4gVW5kZWZpbmVkLmRlc2VyaWFsaXplKCBkYXRhLnZhbHVlICkudmFsdWVPZiggKTtcblx0XHRcdH1cblxuXHRcdH1lbHNlIGlmKCB0eXBlb2YgZGF0YSA9PSBcIm9iamVjdFwiICl7XG5cdFx0XHRsZXQga2V5ID0gT2JqZWN0LmtleXMoIGRhdGEgKS5yZXZlcnNlKCApO1xuXHRcdFx0bGV0IGluZGV4ID0ga2V5Lmxlbmd0aDtcblx0XHRcdHdoaWxlKCBpbmRleC0tICl7XG5cdFx0XHRcdGxldCBwcm9wZXJ0eSA9IGtleVsgaW5kZXggXTtcblx0XHRcdFx0ZGF0YVsgcHJvcGVydHkgXSA9IERhdGEucGFyc2VyKCBkYXRhWyBwcm9wZXJ0eSBdICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH1cblxuXHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBkYXRhLCAkeyBlcnJvciB9YCApO1xuXHR9XG5cblx0c3RhdGljIGRlc2VyaWFsaXplKCBkYXRhLCBwYXJzZXIsIGJsdWVwcmludCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZGF0YVwiOiBcIipcIixcblx0XHRcdFx0XHRcInBhcnNlclwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJibHVlcHJpbnRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHZhciBbIGRhdGEsIHBhcnNlciwgZGVmZXIsIGJsdWVwcmludCBdID0gTWV0YS5fX2Rlc2VyaWFsaXplRGVmZXJfXyggYXJndW1lbnRzLCB0aGlzLCBEYXRhLnBhcnNlciApO1xuXG5cdFx0bGV0IGVudGl0eSA9IE1ldGEuZGVzZXJpYWxpemUoIGRhdGEsIHBhcnNlciwgYmx1ZXByaW50ICk7XG5cblx0XHRpZiggZW50aXR5LmlzQ29ycnVwdGVkKCApICl7XG5cdFx0XHRlbnRpdHkgPSBNZXRhLmRlc2VyaWFsaXplKCBkYXRhLCBkZWZlciwgYmx1ZXByaW50ICk7XG5cdFx0fVxuXG5cdFx0aWYoIGVudGl0eS5pc0NvcnJ1cHRlZCggKSApe1xuXHRcdFx0cmV0dXJuIGVudGl0eS5yZXZlcnQoICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVudGl0eTtcblx0fVxuXG5cdHN0YXRpYyBpc0NvbXBhdGlibGUoIHRhZyApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGFnXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIHR5cGVvZiB0YWcgIT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBTRVJJQUxJWkVfT0JKRUNUX1RBR19QQVRURVJOLnRlc3QoIHRhZyApO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoIGVudGl0eSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwib2JqZWN0XCIsXG5cdFx0XHRcdFx0XHRPYmplY3Rcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHN1cGVyKCBlbnRpdHksIE9CSkVDVF9OQU1FICk7XG5cdH1cblxuXHRjaGVjayggZW50aXR5ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJvYmplY3RcIixcblx0XHRcdFx0XHRcdE9iamVjdFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdHR5cGVvZiBlbnRpdHkgPT0gXCJvYmplY3RcIlxuXHRcdFx0fHwgZW50aXR5IGluc3RhbmNlb2YgT2JqZWN0XG5cdFx0KTtcblx0fVxuXG5cdGdldCBbIE1ldGEuT0JKRUNUIF0oICl7XG5cdFx0cmV0dXJuIHRoaXMuX190b09iamVjdF9fKCB0aGlzLnZhbHVlT2YoICkgKTtcblx0fVxuXG5cdF9fdG9PYmplY3RfXyggb2JqZWN0ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcIm9iamVjdDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJvYmplY3RcIixcblx0XHRcdFx0XHRPYmplY3Rcblx0XHRcdFx0XVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG9iamVjdCBpbnN0YW5jZW9mIEFycmF5ICl7XG5cdFx0XHRsZXQgYXJyYXkgPSBBcnJheS5mcm9tKCBvYmplY3QgKS5yZXZlcnNlKCApO1xuXG5cdFx0XHRsZXQgaW5kZXggPSBhcnJheS5sZW5ndGg7XG5cdFx0XHR3aGlsZSggaW5kZXgtLSApe1xuXHRcdFx0XHRsZXQgZWxlbWVudCA9IGFycmF5WyBpbmRleCBdO1xuXG5cdFx0XHRcdGxldCB0eXBlID0gdHlwZW9mIGVsZW1lbnQ7XG5cblx0XHRcdFx0c3dpdGNoKCB0eXBlICl7XG5cdFx0XHRcdFx0Y2FzZSBcImJvb2xlYW5cIjpcblx0XHRcdFx0XHRcdGFycmF5WyBpbmRleCBdID0gYmxvbiggZWxlbWVudCApLnRvT2JqZWN0KCApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFwiZnVuY3Rpb25cIjpcblx0XHRcdFx0XHRcdGFycmF5WyBpbmRleCBdID0gZm5vKCBlbGVtZW50ICkudG9PYmplY3QoICk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgXCJudW1iZXJcIjpcblx0XHRcdFx0XHRcdGFycmF5WyBpbmRleCBdID0gbnVtbyggZWxlbWVudCApLnRvT2JqZWN0KCApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFwib2JqZWN0XCI6XG5cdFx0XHRcdFx0XHRpZiggZWxlbWVudCA9PT0gbnVsbCApe1xuXHRcdFx0XHRcdFx0XHRhcnJheVsgaW5kZXggXSA9IG5vbCggZWxlbWVudCApLnRvT2JqZWN0KCApO1xuXG5cdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0YXJyYXlbIGluZGV4IF0gPSBNZXRhLmNyZWF0ZSggRGF0YSwgZWxlbWVudCApLnRvT2JqZWN0KCApO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0XHRcdGFycmF5WyBpbmRleCBdID0gc3RybyggZWxlbWVudCApLnRvT2JqZWN0KCApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFwic3ltYm9sXCI6XG5cdFx0XHRcdFx0XHRhcnJheVsgaW5kZXggXSA9IGdseW8oIGVsZW1lbnQgKS50b09iamVjdCggKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBcInVuZGVmaW5lZFwiOlxuXHRcdFx0XHRcdFx0YXJyYXlbIGluZGV4IF0gPSBuZGZvKCBlbGVtZW50ICkudG9PYmplY3QoICk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYXJyYXk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdGxldCBkYXRhID0geyB9O1xuXHRcdFx0bGV0IHByb3BlcnR5ID0gT2JqZWN0LmtleXMoIG9iamVjdCApLnNvcnQoICkucmV2ZXJzZSggKTtcblxuXHRcdFx0bGV0IGluZGV4ID0gcHJvcGVydHkubGVuZ3RoO1xuXHRcdFx0d2hpbGUoIGluZGV4LS0gKXtcblx0XHRcdFx0bGV0IGtleSA9IHByb3BlcnR5WyBpbmRleCBdO1xuXG5cdFx0XHRcdGxldCB2YWx1ZSA9IG9iamVjdFsga2V5IF07XG5cblx0XHRcdFx0bGV0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cblx0XHRcdFx0c3dpdGNoKCB0eXBlICl7XG5cdFx0XHRcdFx0Y2FzZSBcImJvb2xlYW5cIjpcblx0XHRcdFx0XHRcdGRhdGFbIGtleSBdID0gYmxvbiggdmFsdWUgKS50b09iamVjdCggKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBcImZ1bmN0aW9uXCI6XG5cdFx0XHRcdFx0XHRkYXRhWyBrZXkgXSA9IGZubyggdmFsdWUgKS50b09iamVjdCggKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBcIm51bWJlclwiOlxuXHRcdFx0XHRcdFx0ZGF0YVsga2V5IF0gPSBudW1vKCB2YWx1ZSApLnRvT2JqZWN0KCApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFwib2JqZWN0XCI6XG5cdFx0XHRcdFx0XHRpZiggdmFsdWUgPT09IG51bGwgKXtcblx0XHRcdFx0XHRcdFx0ZGF0YVsga2V5IF0gPSBub2woIHZhbHVlICkudG9PYmplY3QoICk7XG5cblx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRkYXRhWyBrZXkgXSA9IE1ldGEuY3JlYXRlKCBEYXRhLCB2YWx1ZSApLnRvT2JqZWN0KCApO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0XHRcdGRhdGFbIGtleSBdID0gc3RybyggdmFsdWUgKS50b09iamVjdCggKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBcInN5bWJvbFwiOlxuXHRcdFx0XHRcdFx0ZGF0YVsga2V5IF0gPSBnbHlvKCB2YWx1ZSApLnRvT2JqZWN0KCApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFwidW5kZWZpbmVkXCI6XG5cdFx0XHRcdFx0XHRkYXRhWyBrZXkgXSA9IG5kZm8oIHZhbHVlICkudG9PYmplY3QoICk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9XG5cdH1cblxuXHRnZXQgWyBNZXRhLkJPT0xFQU4gXSggKXtcblx0XHRyZXR1cm4gdGhpcy50b051bWJlciggKSA+IDA7XG5cdH1cblxuXHRnZXQgWyBNZXRhLlNUUklORyBdKCApe1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggdGhpcyApO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5OVU1CRVIgXSggKXtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoIHRoaXMudmFsdWVPZiggKSApLmxlbmd0aDtcblx0fVxuXG5cdHN0cmluZ2lmeSggKXtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIHRoaXMsIGZ1bmN0aW9uIHJlcGxhY2VyKCBrZXksIHZhbHVlICl7XG5cdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHZhbHVlICkuc2VyaWFsaXplKCApO1xuXHRcdH0gKTtcblx0fVxuXG5cdHNlcmlhbGl6ZSggaW50ZXJwcmV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImludGVycHJldGVyXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRyZXR1cm4gdGhpcy5zdHJpbmdpZnkoICkucmVwbGFjZSggL1xcXCIvZywgXCJcIiApO1xuXHR9XG5cblx0aXNFcXVhbCggZW50aXR5ICl7XG5cdFx0aWYoIHR5cGVvZiBlbnRpdHkgIT0gXCJvYmplY3RcIiApe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnNlcmlhbGl6ZSggKSA9PT0gRGF0YS5jcmVhdGUoIGVudGl0eSApLnNlcmlhbGl6ZSggKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGE7XG4iXX0=
//# sourceMappingURL=data.support.js.map
