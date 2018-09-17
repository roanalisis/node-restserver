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
              			"package": "nol",
              			"path": "nol/null.module.js",
              			"file": "null.module.js",
              			"module": "nol",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/nol.git",
              			"test": "nol-test.js",
              			"global": false,
              			"internal": true,
              			"class": true
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Null class wrapper.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"ehm": "ehm"
              		}
              	@end-include
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Meta = require("ehm")();

var EMPTY_STRING = "";
var NULL = null;
var SERIALIZE_NULL_TAG = "[object Null:null]";
var META_SERIALIZE_NULL_TAG = Meta.create(NULL).serialize();var

Null = function (_Meta) {(0, _inherits3.default)(Null, _Meta);(0, _createClass3.default)(Null, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			return (
				instance === NULL ||
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
			return (
				tag === SERIALIZE_NULL_TAG ||
				tag === META_SERIALIZE_NULL_TAG);

		} }]);

	function Null(entity) {(0, _classCallCheck3.default)(this, Null);return (0, _possibleConstructorReturn3.default)(this, (Null.__proto__ || (0, _getPrototypeOf2.default)(Null)).call(this,
		entity, "Null"));
	}(0, _createClass3.default)(Null, [{ key: "check", value: function check(

		entity) {
			return entity === NULL;
		} }, { key: "serialize", value: function serialize(













		parser) {
			/*;
           	@meta-configuration:
           		{
           			"parser": "function"
           		}
           	@end-meta-configuration
           */

			return SERIALIZE_NULL_TAG;
		} }, { key: "isEqual", value: function isEqual(

		entity) {
			return (
				entity instanceof Null ||
				entity === NULL);

		} }, { key: Meta.BOOLEAN, get: function get() {return false;} }, { key: Meta.STRING, get: function get() {return EMPTY_STRING;} }, { key: Meta.NUMBER, get: function get() {return 0;} }]);return Null;}(Meta);


module.exports = Null;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bGwuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwicmVxdWlyZSIsIkVNUFRZX1NUUklORyIsIk5VTEwiLCJTRVJJQUxJWkVfTlVMTF9UQUciLCJNRVRBX1NFUklBTElaRV9OVUxMX1RBRyIsImNyZWF0ZSIsInNlcmlhbGl6ZSIsIk51bGwiLCJpbnN0YW5jZSIsImluc3RhbmNlT2YiLCJkYXRhIiwicGFyc2VyIiwiYmx1ZXByaW50IiwiZW50aXR5IiwiZGVzZXJpYWxpemUiLCJpc0NvcnJ1cHRlZCIsInJldmVydCIsInRhZyIsIkJPT0xFQU4iLCJTVFJJTkciLCJOVU1CRVIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQSxJQUFNQSxPQUFPQyxRQUFTLEtBQVQsR0FBYjs7QUFFQSxJQUFNQyxlQUFlLEVBQXJCO0FBQ0EsSUFBTUMsT0FBTyxJQUFiO0FBQ0EsSUFBTUMscUJBQXFCLG9CQUEzQjtBQUNBLElBQU1DLDBCQUEwQkwsS0FBS00sTUFBTCxDQUFhSCxJQUFiLEVBQW9CSSxTQUFwQixFQUFoQyxDOztBQUVNQyxJO0FBQzBCQyxVLEVBQVU7QUFDeEM7QUFDQ0EsaUJBQWFOLElBQWI7QUFDR0gsU0FBS1UsVUFBTCxDQUFpQkQsUUFBakIsRUFBMkIsSUFBM0IsQ0FGSjs7QUFJQSxHOztBQUVtQkUsTSxFQUFNQyxNLEVBQVFDLFMsRUFBVztBQUM1Qzs7Ozs7Ozs7OztBQVVBLE9BQUlDLFNBQVNkLEtBQUtlLFdBQUwsQ0FBa0JKLElBQWxCLEVBQXdCQyxNQUF4QixFQUFnQyxJQUFoQyxDQUFiOztBQUVBLE9BQUlFLE9BQU9FLFdBQVAsRUFBSixFQUEyQjtBQUMxQixXQUFPRixPQUFPRyxNQUFQLEVBQVA7QUFDQTs7QUFFRCxVQUFPSCxNQUFQO0FBQ0EsRzs7QUFFb0JJLEssRUFBSztBQUN6QjtBQUNDQSxZQUFRZCxrQkFBUjtBQUNHYyxZQUFRYix1QkFGWjs7QUFJQSxHOztBQUVELGVBQWFTLE1BQWIsRUFBcUI7QUFDYkEsUUFEYSxFQUNMLE1BREs7QUFFcEIsRTs7QUFFTUEsUSxFQUFRO0FBQ2QsVUFBT0EsV0FBV1gsSUFBbEI7QUFDQSxHOzs7Ozs7Ozs7Ozs7OztBQWNVUyxRLEVBQVE7QUFDbEI7Ozs7Ozs7O0FBUUEsVUFBT1Isa0JBQVA7QUFDQSxHOztBQUVRVSxRLEVBQVE7QUFDaEI7QUFDQ0Esc0JBQWtCTixJQUFsQjtBQUNHTSxlQUFXWCxJQUZmOztBQUlBLEcsV0E3QktILEtBQUttQixPLHNCQUFZLENBQ3RCLE9BQU8sS0FBUCxDQUNBLEMsV0FFS25CLEtBQUtvQixNLHNCQUFXLENBQ3JCLE9BQU9sQixZQUFQLENBQ0EsQyxXQUVLRixLQUFLcUIsTSxzQkFBVyxDQUNyQixPQUFPLENBQVAsQ0FDQSxDLG1CQXJEaUJyQixJOzs7QUEyRW5Cc0IsT0FBT0MsT0FBUCxHQUFpQmYsSUFBakIiLCJmaWxlIjoibnVsbC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAc3VibW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1zdWJtb2R1bGUtbGljZW5zZVxuXG5cdEBzdWJtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJub2xcIixcblx0XHRcdFwicGF0aFwiOiBcIm5vbC9udWxsLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwibnVsbC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwibm9sXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9ub2wuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJub2wtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogZmFsc2UsXG5cdFx0XHRcImludGVybmFsXCI6IHRydWUsXG5cdFx0XHRcImNsYXNzXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtc3VibW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAc3VibW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0TnVsbCBjbGFzcyB3cmFwcGVyLlxuXHRAZW5kLXN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJlaG1cIjogXCJlaG1cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBNZXRhID0gcmVxdWlyZSggXCJlaG1cIiApKCApO1xuXG5jb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuY29uc3QgTlVMTCA9IG51bGw7XG5jb25zdCBTRVJJQUxJWkVfTlVMTF9UQUcgPSBcIltvYmplY3QgTnVsbDpudWxsXVwiO1xuY29uc3QgTUVUQV9TRVJJQUxJWkVfTlVMTF9UQUcgPSBNZXRhLmNyZWF0ZSggTlVMTCApLnNlcmlhbGl6ZSggKTtcblxuY2xhc3MgTnVsbCBleHRlbmRzIE1ldGEge1xuXHRzdGF0aWMgWyBTeW1ib2wuaGFzSW5zdGFuY2UgXSggaW5zdGFuY2UgKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0aW5zdGFuY2UgPT09IE5VTExcblx0XHRcdHx8IE1ldGEuaW5zdGFuY2VPZiggaW5zdGFuY2UsIHRoaXMgKVxuXHRcdCk7XG5cdH1cblxuXHRzdGF0aWMgZGVzZXJpYWxpemUoIGRhdGEsIHBhcnNlciwgYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJkYXRhXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcImJsdWVwcmludFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IGVudGl0eSA9IE1ldGEuZGVzZXJpYWxpemUoIGRhdGEsIHBhcnNlciwgdGhpcyApO1xuXG5cdFx0aWYoIGVudGl0eS5pc0NvcnJ1cHRlZCggKSApe1xuXHRcdFx0cmV0dXJuIGVudGl0eS5yZXZlcnQoICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVudGl0eTtcblx0fVxuXG5cdHN0YXRpYyBpc0NvbXBhdGlibGUoIHRhZyApe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0YWcgPT09IFNFUklBTElaRV9OVUxMX1RBR1xuXHRcdFx0fHwgdGFnID09PSBNRVRBX1NFUklBTElaRV9OVUxMX1RBR1xuXHRcdCk7XG5cdH1cblxuXHRjb25zdHJ1Y3RvciggZW50aXR5ICl7XG5cdFx0c3VwZXIoIGVudGl0eSwgXCJOdWxsXCIgKTtcblx0fVxuXG5cdGNoZWNrKCBlbnRpdHkgKXtcblx0XHRyZXR1cm4gZW50aXR5ID09PSBOVUxMO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5CT09MRUFOIF0oICl7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5TVFJJTkcgXSggKXtcblx0XHRyZXR1cm4gRU1QVFlfU1RSSU5HO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5OVU1CRVIgXSggKXtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHNlcmlhbGl6ZSggcGFyc2VyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiBTRVJJQUxJWkVfTlVMTF9UQUc7XG5cdH1cblxuXHRpc0VxdWFsKCBlbnRpdHkgKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0ZW50aXR5IGluc3RhbmNlb2YgTnVsbFxuXHRcdFx0fHwgZW50aXR5ID09PSBOVUxMXG5cdFx0KTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE51bGw7XG4iXX0=
//# sourceMappingURL=null.support.js.map
