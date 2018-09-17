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
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Meta = require("ehm")();

var BOOLEAN_TYPE = "boolean";
var BOOLEAN_NAME = "Boolean";

var SERIALIZE_TRUE_TAG = "[boolean Boolean:true]";
var SERIALIZE_FALSE_TAG = "[boolean Boolean:false]";
var META_SERIALIZE_TRUE_TAG = Meta.create(true).serialize();
var META_SERIALIZE_FALSE_TAG = Meta.create(false).serialize();var

State = function (_Meta) {(0, _inherits3.default)(State, _Meta);(0, _createClass3.default)(State, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			return (
				(typeof instance === "undefined" ? "undefined" : (0, _typeof3.default)(instance)) == BOOLEAN_TYPE ||
				instance instanceof Boolean ||
				typeof instance == "function" && instance.name === BOOLEAN_NAME ||
				Meta.instanceOf(instance, this));

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
                            */

			var entity = Meta.deserialize(data, parser, this);

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

			return (
				tag == SERIALIZE_TRUE_TAG ||
				tag == SERIALIZE_FALSE_TAG ||
				tag == META_SERIALIZE_TRUE_TAG ||
				tag == META_SERIALIZE_FALSE_TAG);

		} }]);

	function State(entity) {(0, _classCallCheck3.default)(this, State);return (0, _possibleConstructorReturn3.default)(this, (State.__proto__ || (0, _getPrototypeOf2.default)(State)).call(this,
		entity, BOOLEAN_NAME));
	}(0, _createClass3.default)(State, [{ key: "check", value: function check(

		entity) {
			return (
				(typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) == BOOLEAN_TYPE ||
				entity instanceof Boolean);

		} }, { key: "serialize", value: function serialize(





















		parser) {
			/*;
           	@meta-configuration:
           		{
           			"parser": "function"
           		}
           	@end-meta-configuration
           */

			if (this.valueOf() === true) {
				return SERIALIZE_TRUE_TAG;
			}

			if (this.valueOf() === false) {
				return SERIALIZE_FALSE_TAG;
			}

			return SERIALIZE_FALSE_TAG;
		} }, { key: Meta.BOOLEAN, get: function get() {return this.valueOf();} }, { key: Meta.STRING, get: function get() {return "" + this.valueOf();} }, { key: Meta.NUMBER, get: function get() {if (this.valueOf() === true) {return Infinity;}if (this.valueOf() === false) {return NaN;}return NaN;} }]);return State;}(Meta);


module.exports = State;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiTWV0YSIsInJlcXVpcmUiLCJCT09MRUFOX1RZUEUiLCJCT09MRUFOX05BTUUiLCJTRVJJQUxJWkVfVFJVRV9UQUciLCJTRVJJQUxJWkVfRkFMU0VfVEFHIiwiTUVUQV9TRVJJQUxJWkVfVFJVRV9UQUciLCJjcmVhdGUiLCJzZXJpYWxpemUiLCJNRVRBX1NFUklBTElaRV9GQUxTRV9UQUciLCJTdGF0ZSIsImluc3RhbmNlIiwiQm9vbGVhbiIsIm5hbWUiLCJpbnN0YW5jZU9mIiwiZGF0YSIsInBhcnNlciIsImJsdWVwcmludCIsImVudGl0eSIsImRlc2VyaWFsaXplIiwiaXNDb3JydXB0ZWQiLCJyZXZlcnQiLCJ0YWciLCJ2YWx1ZU9mIiwiQk9PTEVBTiIsIlNUUklORyIsIk5VTUJFUiIsIkluZmluaXR5IiwiTmFOIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsT0FBT0MsUUFBUyxLQUFULEdBQWI7O0FBRUEsSUFBTUMsZUFBZSxTQUFyQjtBQUNBLElBQU1DLGVBQWMsU0FBcEI7O0FBRUEsSUFBTUMscUJBQXFCLHdCQUEzQjtBQUNBLElBQU1DLHNCQUFzQix5QkFBNUI7QUFDQSxJQUFNQywwQkFBMEJOLEtBQUtPLE1BQUwsQ0FBYSxJQUFiLEVBQW9CQyxTQUFwQixFQUFoQztBQUNBLElBQU1DLDJCQUEyQlQsS0FBS08sTUFBTCxDQUFhLEtBQWIsRUFBcUJDLFNBQXJCLEVBQWpDLEM7O0FBRU1FLEs7QUFDMEJDLFUsRUFBVTtBQUN4QztBQUNDLFlBQU9BLFFBQVAsdURBQU9BLFFBQVAsTUFBbUJULFlBQW5CO0FBQ0dTLHdCQUFvQkMsT0FEdkI7QUFFRyxXQUFPRCxRQUFQLElBQW1CLFVBQW5CLElBQWlDQSxTQUFTRSxJQUFULEtBQWtCVixZQUZ0RDtBQUdHSCxTQUFLYyxVQUFMLENBQWlCSCxRQUFqQixFQUEyQixJQUEzQixDQUpKOztBQU1BLEc7O0FBRW1CSSxNLEVBQU1DLE0sRUFBUUMsUyxFQUFXO0FBQzVDOzs7Ozs7Ozs7O0FBVUEsT0FBSUMsU0FBU2xCLEtBQUttQixXQUFMLENBQWtCSixJQUFsQixFQUF3QkMsTUFBeEIsRUFBZ0MsSUFBaEMsQ0FBYjs7QUFFQSxPQUFJRSxPQUFPRSxXQUFQLEVBQUosRUFBMkI7QUFDMUIsV0FBT0YsT0FBT0csTUFBUCxFQUFQO0FBQ0E7O0FBRUQsVUFBT0gsTUFBUDtBQUNBLEc7O0FBRW9CSSxLLEVBQUs7QUFDekI7Ozs7Ozs7O0FBUUEsT0FBSSxPQUFPQSxHQUFQLElBQWMsUUFBbEIsRUFBNEI7QUFDM0IsV0FBTyxLQUFQO0FBQ0E7O0FBRUQ7QUFDQ0EsV0FBT2xCLGtCQUFQO0FBQ0drQixXQUFPakIsbUJBRFY7QUFFR2lCLFdBQU9oQix1QkFGVjtBQUdHZ0IsV0FBT2Isd0JBSlg7O0FBTUEsRzs7QUFFRCxnQkFBYVMsTUFBYixFQUFxQjtBQUNiQSxRQURhLEVBQ0xmLFlBREs7QUFFcEIsRTs7QUFFTWUsUSxFQUFRO0FBQ2Q7QUFDQyxZQUFPQSxNQUFQLHVEQUFPQSxNQUFQLE1BQWlCaEIsWUFBakI7QUFDR2dCLHNCQUFrQk4sT0FGdEI7O0FBSUEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCVUksUSxFQUFRO0FBQ2xCOzs7Ozs7OztBQVFBLE9BQUksS0FBS08sT0FBTCxPQUFvQixJQUF4QixFQUE4QjtBQUM3QixXQUFPbkIsa0JBQVA7QUFDQTs7QUFFRCxPQUFJLEtBQUttQixPQUFMLE9BQW9CLEtBQXhCLEVBQStCO0FBQzlCLFdBQU9sQixtQkFBUDtBQUNBOztBQUVELFVBQU9BLG1CQUFQO0FBQ0EsRyxXQXRDS0wsS0FBS3dCLE8sc0JBQVksQ0FDdEIsT0FBTyxLQUFLRCxPQUFMLEVBQVAsQ0FDQSxDLFdBRUt2QixLQUFLeUIsTSxzQkFBVyxDQUNyQixZQUFXLEtBQUtGLE9BQUwsRUFBWCxDQUNBLEMsV0FFS3ZCLEtBQUswQixNLHNCQUFXLENBQ3JCLElBQUksS0FBS0gsT0FBTCxPQUFvQixJQUF4QixFQUE4QixDQUM3QixPQUFPSSxRQUFQLENBQ0EsQ0FFRCxJQUFJLEtBQUtKLE9BQUwsT0FBb0IsS0FBeEIsRUFBK0IsQ0FDOUIsT0FBT0ssR0FBUCxDQUNBLENBRUQsT0FBT0EsR0FBUCxDQUNBLEMsb0JBaEZrQjVCLEk7OztBQXVHcEI2QixPQUFPQyxPQUFQLEdBQWlCcEIsS0FBakIiLCJmaWxlIjoic3RhdGUuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYmxvblwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiYmxvbi9zdGF0ZS5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInN0YXRlLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJibG9uXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9ibG9uLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiYmxvbi10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRTdGF0ZSBjbGFzcyB3cmFwcGVyLlxuXHRAZW5kLXN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJlaG1cIjogXCJlaG1cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBNZXRhID0gcmVxdWlyZSggXCJlaG1cIiApKCApO1xuXG5jb25zdCBCT09MRUFOX1RZUEUgPSBcImJvb2xlYW5cIjtcbmNvbnN0IEJPT0xFQU5fTkFNRSA9XCJCb29sZWFuXCI7XG5cbmNvbnN0IFNFUklBTElaRV9UUlVFX1RBRyA9IFwiW2Jvb2xlYW4gQm9vbGVhbjp0cnVlXVwiO1xuY29uc3QgU0VSSUFMSVpFX0ZBTFNFX1RBRyA9IFwiW2Jvb2xlYW4gQm9vbGVhbjpmYWxzZV1cIjtcbmNvbnN0IE1FVEFfU0VSSUFMSVpFX1RSVUVfVEFHID0gTWV0YS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoICk7XG5jb25zdCBNRVRBX1NFUklBTElaRV9GQUxTRV9UQUcgPSBNZXRhLmNyZWF0ZSggZmFsc2UgKS5zZXJpYWxpemUoICk7XG5cbmNsYXNzIFN0YXRlIGV4dGVuZHMgTWV0YSB7XG5cdHN0YXRpYyBbIFN5bWJvbC5oYXNJbnN0YW5jZSBdKCBpbnN0YW5jZSApe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0eXBlb2YgaW5zdGFuY2UgPT0gQk9PTEVBTl9UWVBFXG5cdFx0XHR8fCBpbnN0YW5jZSBpbnN0YW5jZW9mIEJvb2xlYW5cblx0XHRcdHx8IHR5cGVvZiBpbnN0YW5jZSA9PSBcImZ1bmN0aW9uXCIgJiYgaW5zdGFuY2UubmFtZSA9PT0gQk9PTEVBTl9OQU1FXG5cdFx0XHR8fCBNZXRhLmluc3RhbmNlT2YoIGluc3RhbmNlLCB0aGlzIClcblx0XHQpO1xuXHR9XG5cblx0c3RhdGljIGRlc2VyaWFsaXplKCBkYXRhLCBwYXJzZXIsIGJsdWVwcmludCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZGF0YVwiOiBcIipcIixcblx0XHRcdFx0XHRcInBhcnNlclwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJibHVlcHJpbnRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBlbnRpdHkgPSBNZXRhLmRlc2VyaWFsaXplKCBkYXRhLCBwYXJzZXIsIHRoaXMgKTtcblxuXHRcdGlmKCBlbnRpdHkuaXNDb3JydXB0ZWQoICkgKXtcblx0XHRcdHJldHVybiBlbnRpdHkucmV2ZXJ0KCApO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbnRpdHk7XG5cdH1cblxuXHRzdGF0aWMgaXNDb21wYXRpYmxlKCB0YWcgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRhZ1wiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgdGFnICE9IFwic3RyaW5nXCIgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0dGFnID09IFNFUklBTElaRV9UUlVFX1RBR1xuXHRcdFx0fHwgdGFnID09IFNFUklBTElaRV9GQUxTRV9UQUdcblx0XHRcdHx8IHRhZyA9PSBNRVRBX1NFUklBTElaRV9UUlVFX1RBR1xuXHRcdFx0fHwgdGFnID09IE1FVEFfU0VSSUFMSVpFX0ZBTFNFX1RBR1xuXHRcdCk7XG5cdH1cblxuXHRjb25zdHJ1Y3RvciggZW50aXR5ICl7XG5cdFx0c3VwZXIoIGVudGl0eSwgQk9PTEVBTl9OQU1FICk7XG5cdH1cblxuXHRjaGVjayggZW50aXR5ICl7XG5cdFx0cmV0dXJuIChcblx0XHRcdHR5cGVvZiBlbnRpdHkgPT0gQk9PTEVBTl9UWVBFXG5cdFx0XHR8fCBlbnRpdHkgaW5zdGFuY2VvZiBCb29sZWFuXG5cdFx0KTtcblx0fVxuXG5cdGdldCBbIE1ldGEuQk9PTEVBTiBdKCApe1xuXHRcdHJldHVybiB0aGlzLnZhbHVlT2YoICk7XG5cdH1cblxuXHRnZXQgWyBNZXRhLlNUUklORyBdKCApe1xuXHRcdHJldHVybiBgJHsgdGhpcy52YWx1ZU9mKCApIH1gO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5OVU1CRVIgXSggKXtcblx0XHRpZiggdGhpcy52YWx1ZU9mKCApID09PSB0cnVlICl7XG5cdFx0XHRyZXR1cm4gSW5maW5pdHk7XG5cdFx0fVxuXG5cdFx0aWYoIHRoaXMudmFsdWVPZiggKSA9PT0gZmFsc2UgKXtcblx0XHRcdHJldHVybiBOYU47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE5hTjtcblx0fVxuXG5cdHNlcmlhbGl6ZSggcGFyc2VyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0aGlzLnZhbHVlT2YoICkgPT09IHRydWUgKXtcblx0XHRcdHJldHVybiBTRVJJQUxJWkVfVFJVRV9UQUc7XG5cdFx0fVxuXG5cdFx0aWYoIHRoaXMudmFsdWVPZiggKSA9PT0gZmFsc2UgKXtcblx0XHRcdHJldHVybiBTRVJJQUxJWkVfRkFMU0VfVEFHO1xuXHRcdH1cblxuXHRcdHJldHVybiBTRVJJQUxJWkVfRkFMU0VfVEFHO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGU7XG4iXX0=
//# sourceMappingURL=state.support.js.map
