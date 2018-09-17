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
              			"package": "ndfo",
              			"path": "ndfo/undefined.module.js",
              			"file": "undefined.module.js",
              			"module": "ndfo",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/ndfo.git",
              			"test": "ndfo-test.js",
              			"global": false,
              			"internal": true,
              			"class": true
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Undefined class wrapper.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"ehm": "ehm"
              		}
              	@end-include
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Meta = require("ehm")();

var EMPTY_STRING = "";
var UNDEFINED = undefined;
var SERIALIZE_UNDEFINED_TAG = "[undefined Undefined:undefined]";
var META_SERIALIZE_UNDEFINED_TAG = Meta.create(UNDEFINED).serialize();var

Undefined = function (_Meta) {(0, _inherits3.default)(Undefined, _Meta);(0, _createClass3.default)(Undefined, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			return (
				typeof instance == "undefined" ||
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
				tag === SERIALIZE_UNDEFINED_TAG ||
				tag === META_SERIALIZE_UNDEFINED_TAG);

		} }]);

	function Undefined(entity) {(0, _classCallCheck3.default)(this, Undefined);return (0, _possibleConstructorReturn3.default)(this, (Undefined.__proto__ || (0, _getPrototypeOf2.default)(Undefined)).call(this,
		entity, "Undefined"));
	}(0, _createClass3.default)(Undefined, [{ key: "check", value: function check(

		entity) {
			return typeof entity == "undefined";
		} }, { key: "serialize", value: function serialize(













		parser) {
			/*;
           	@meta-configuration:
           		{
           			"parser": "function"
           		}
           	@end-meta-configuration
           */

			return SERIALIZE_UNDEFINED_TAG;
		} }, { key: "isEqual", value: function isEqual(

		entity) {
			return (
				entity instanceof Undefined ||
				typeof entity == "undefined");

		} }, { key: Meta.BOOLEAN, get: function get() {return false;} }, { key: Meta.STRING, get: function get() {return EMPTY_STRING;} }, { key: Meta.NUMBER, get: function get() {return NaN;} }]);return Undefined;}(Meta);


module.exports = Undefined;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuZGVmaW5lZC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbIk1ldGEiLCJyZXF1aXJlIiwiRU1QVFlfU1RSSU5HIiwiVU5ERUZJTkVEIiwidW5kZWZpbmVkIiwiU0VSSUFMSVpFX1VOREVGSU5FRF9UQUciLCJNRVRBX1NFUklBTElaRV9VTkRFRklORURfVEFHIiwiY3JlYXRlIiwic2VyaWFsaXplIiwiVW5kZWZpbmVkIiwiaW5zdGFuY2UiLCJpbnN0YW5jZU9mIiwiZGF0YSIsInBhcnNlciIsImJsdWVwcmludCIsImVudGl0eSIsImRlc2VyaWFsaXplIiwiaXNDb3JydXB0ZWQiLCJyZXZlcnQiLCJ0YWciLCJCT09MRUFOIiwiU1RSSU5HIiwiTlVNQkVSIiwiTmFOIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsT0FBT0MsUUFBUyxLQUFULEdBQWI7O0FBRUEsSUFBTUMsZUFBZSxFQUFyQjtBQUNBLElBQU1DLFlBQVlDLFNBQWxCO0FBQ0EsSUFBTUMsMEJBQTBCLGlDQUFoQztBQUNBLElBQU1DLCtCQUErQk4sS0FBS08sTUFBTCxDQUFhSixTQUFiLEVBQXlCSyxTQUF6QixFQUFyQyxDOztBQUVNQyxTO0FBQzBCQyxVLEVBQVU7QUFDeEM7QUFDQyxXQUFPQSxRQUFQLElBQW1CLFdBQW5CO0FBQ0dWLFNBQUtXLFVBQUwsQ0FBaUJELFFBQWpCLEVBQTJCLElBQTNCLENBRko7O0FBSUEsRzs7QUFFbUJFLE0sRUFBTUMsTSxFQUFRQyxTLEVBQVc7QUFDNUM7Ozs7Ozs7Ozs7QUFVQSxPQUFJQyxTQUFTZixLQUFLZ0IsV0FBTCxDQUFrQkosSUFBbEIsRUFBd0JDLE1BQXhCLEVBQWdDLElBQWhDLENBQWI7O0FBRUEsT0FBSUUsT0FBT0UsV0FBUCxFQUFKLEVBQTJCO0FBQzFCLFdBQU9GLE9BQU9HLE1BQVAsRUFBUDtBQUNBOztBQUVELFVBQU9ILE1BQVA7QUFDQSxHOztBQUVvQkksSyxFQUFLO0FBQ3pCO0FBQ0NBLFlBQVFkLHVCQUFSO0FBQ0djLFlBQVFiLDRCQUZaOztBQUlBLEc7O0FBRUQsb0JBQWFTLE1BQWIsRUFBcUI7QUFDYkEsUUFEYSxFQUNMLFdBREs7QUFFcEIsRTs7QUFFTUEsUSxFQUFRO0FBQ2QsVUFBTyxPQUFPQSxNQUFQLElBQWlCLFdBQXhCO0FBQ0EsRzs7Ozs7Ozs7Ozs7Ozs7QUFjVUYsUSxFQUFRO0FBQ2xCOzs7Ozs7OztBQVFBLFVBQU9SLHVCQUFQO0FBQ0EsRzs7QUFFUVUsUSxFQUFRO0FBQ2hCO0FBQ0NBLHNCQUFrQk4sU0FBbEI7QUFDRyxXQUFPTSxNQUFQLElBQWlCLFdBRnJCOztBQUlBLEcsV0E3QktmLEtBQUtvQixPLHNCQUFZLENBQ3RCLE9BQU8sS0FBUCxDQUNBLEMsV0FFS3BCLEtBQUtxQixNLHNCQUFXLENBQ3JCLE9BQU9uQixZQUFQLENBQ0EsQyxXQUVLRixLQUFLc0IsTSxzQkFBVyxDQUNyQixPQUFPQyxHQUFQLENBQ0EsQyx3QkFyRHNCdkIsSTs7O0FBMkV4QndCLE9BQU9DLE9BQVAsR0FBaUJoQixTQUFqQiIsImZpbGUiOiJ1bmRlZmluZWQuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibmRmb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwibmRmby91bmRlZmluZWQubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ1bmRlZmluZWQubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm5kZm9cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL25kZm8uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJuZGZvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlLFxuXHRcdFx0XCJpbnRlcm5hbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFVuZGVmaW5lZCBjbGFzcyB3cmFwcGVyLlxuXHRAZW5kLXN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJlaG1cIjogXCJlaG1cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBNZXRhID0gcmVxdWlyZSggXCJlaG1cIiApKCApO1xuXG5jb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuY29uc3QgVU5ERUZJTkVEID0gdW5kZWZpbmVkO1xuY29uc3QgU0VSSUFMSVpFX1VOREVGSU5FRF9UQUcgPSBcIlt1bmRlZmluZWQgVW5kZWZpbmVkOnVuZGVmaW5lZF1cIjtcbmNvbnN0IE1FVEFfU0VSSUFMSVpFX1VOREVGSU5FRF9UQUcgPSBNZXRhLmNyZWF0ZSggVU5ERUZJTkVEICkuc2VyaWFsaXplKCApO1xuXG5jbGFzcyBVbmRlZmluZWQgZXh0ZW5kcyBNZXRhIHtcblx0c3RhdGljIFsgU3ltYm9sLmhhc0luc3RhbmNlIF0oIGluc3RhbmNlICl7XG5cdFx0cmV0dXJuIChcblx0XHRcdHR5cGVvZiBpbnN0YW5jZSA9PSBcInVuZGVmaW5lZFwiXG5cdFx0XHR8fCBNZXRhLmluc3RhbmNlT2YoIGluc3RhbmNlLCB0aGlzIClcblx0XHQpO1xuXHR9XG5cblx0c3RhdGljIGRlc2VyaWFsaXplKCBkYXRhLCBwYXJzZXIsIGJsdWVwcmludCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZGF0YVwiOiBcIipcIixcblx0XHRcdFx0XHRcInBhcnNlclwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJibHVlcHJpbnRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBlbnRpdHkgPSBNZXRhLmRlc2VyaWFsaXplKCBkYXRhLCBwYXJzZXIsIHRoaXMgKTtcblxuXHRcdGlmKCBlbnRpdHkuaXNDb3JydXB0ZWQoICkgKXtcblx0XHRcdHJldHVybiBlbnRpdHkucmV2ZXJ0KCApO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbnRpdHk7XG5cdH1cblxuXHRzdGF0aWMgaXNDb21wYXRpYmxlKCB0YWcgKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dGFnID09PSBTRVJJQUxJWkVfVU5ERUZJTkVEX1RBR1xuXHRcdFx0fHwgdGFnID09PSBNRVRBX1NFUklBTElaRV9VTkRFRklORURfVEFHXG5cdFx0KTtcblx0fTtcblxuXHRjb25zdHJ1Y3RvciggZW50aXR5ICl7XG5cdFx0c3VwZXIoIGVudGl0eSwgXCJVbmRlZmluZWRcIiApO1xuXHR9XG5cblx0Y2hlY2soIGVudGl0eSApe1xuXHRcdHJldHVybiB0eXBlb2YgZW50aXR5ID09IFwidW5kZWZpbmVkXCI7XG5cdH1cblxuXHRnZXQgWyBNZXRhLkJPT0xFQU4gXSggKXtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRnZXQgWyBNZXRhLlNUUklORyBdKCApe1xuXHRcdHJldHVybiBFTVBUWV9TVFJJTkc7XG5cdH1cblxuXHRnZXQgWyBNZXRhLk5VTUJFUiBdKCApe1xuXHRcdHJldHVybiBOYU47XG5cdH1cblxuXHRzZXJpYWxpemUoIHBhcnNlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRyZXR1cm4gU0VSSUFMSVpFX1VOREVGSU5FRF9UQUc7XG5cdH1cblxuXHRpc0VxdWFsKCBlbnRpdHkgKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0ZW50aXR5IGluc3RhbmNlb2YgVW5kZWZpbmVkXG5cdFx0XHR8fCB0eXBlb2YgZW50aXR5ID09IFwidW5kZWZpbmVkXCJcblx0XHQpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5kZWZpbmVkO1xuIl19
//# sourceMappingURL=undefined.support.js.map
