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
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Meta = require("ehm")();

var NUMBER_NAME = "Number";
var NUMBER_TYPE = "number";

var SERIALIZE_NUMBER_TAG_PATTERN = /^\[number Number(?:\:(.+?))?\]$/;var

Digit = function (_Meta) {(0, _inherits3.default)(Digit, _Meta);(0, _createClass3.default)(Digit, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			return (
				(typeof instance === "undefined" ? "undefined" : (0, _typeof3.default)(instance)) == NUMBER_TYPE ||
				instance instanceof Number ||
				typeof instance == "function" && instance.name === NUMBER_NAME ||
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

			return SERIALIZE_NUMBER_TAG_PATTERN.test(tag);
		} }]);

	function Digit(entity) {(0, _classCallCheck3.default)(this, Digit);return (0, _possibleConstructorReturn3.default)(this, (Digit.__proto__ || (0, _getPrototypeOf2.default)(Digit)).call(this,
		entity, NUMBER_NAME));
	}(0, _createClass3.default)(Digit, [{ key: "check", value: function check(

		entity) {
			return (
				(typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) == NUMBER_TYPE ||
				entity instanceof Number);

		} }, { key: "serialize", value: function serialize(













		parser) {
			/*;
           	@meta-configuration:
           		{
           			"parser": "function"
           		}
           	@end-meta-configuration
           */

			return Meta.create(this.valueOf()).serialize(parser);
		} }, { key: Meta.BOOLEAN, get: function get() {return !isNaN(this.valueOf());} }, { key: Meta.STRING, get: function get() {return "" + this.valueOf();} }, { key: Meta.NUMBER, get: function get() {return this.valueOf();} }]);return Digit;}(Meta);


module.exports = Digit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpZ2l0LnN1cHBvcnQuanMiXSwibmFtZXMiOlsiTWV0YSIsInJlcXVpcmUiLCJOVU1CRVJfTkFNRSIsIk5VTUJFUl9UWVBFIiwiU0VSSUFMSVpFX05VTUJFUl9UQUdfUEFUVEVSTiIsIkRpZ2l0IiwiaW5zdGFuY2UiLCJOdW1iZXIiLCJuYW1lIiwiaW5zdGFuY2VPZiIsImRhdGEiLCJwYXJzZXIiLCJibHVlcHJpbnQiLCJlbnRpdHkiLCJkZXNlcmlhbGl6ZSIsImlzQ29ycnVwdGVkIiwicmV2ZXJ0IiwidGFnIiwidGVzdCIsImNyZWF0ZSIsInZhbHVlT2YiLCJzZXJpYWxpemUiLCJCT09MRUFOIiwiaXNOYU4iLCJTVFJJTkciLCJOVU1CRVIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeURBLElBQU1BLE9BQU9DLFFBQVMsS0FBVCxHQUFiOztBQUVBLElBQU1DLGNBQWMsUUFBcEI7QUFDQSxJQUFNQyxjQUFjLFFBQXBCOztBQUVBLElBQU1DLCtCQUErQixpQ0FBckMsQzs7QUFFTUMsSztBQUMwQkMsVSxFQUFVO0FBQ3hDO0FBQ0MsWUFBT0EsUUFBUCx1REFBT0EsUUFBUCxNQUFtQkgsV0FBbkI7QUFDR0csd0JBQW9CQyxNQUR2QjtBQUVHLFdBQU9ELFFBQVAsSUFBbUIsVUFBbkIsSUFBaUNBLFNBQVNFLElBQVQsS0FBa0JOLFdBRnREO0FBR0dGLFNBQUtTLFVBQUwsQ0FBaUJILFFBQWpCLEVBQTJCLElBQTNCLENBSko7O0FBTUEsRzs7QUFFbUJJLE0sRUFBTUMsTSxFQUFRQyxTLEVBQVc7QUFDNUM7Ozs7Ozs7Ozs7QUFVQSxPQUFJQyxTQUFTYixLQUFLYyxXQUFMLENBQWtCSixJQUFsQixFQUF3QkMsTUFBeEIsRUFBZ0MsSUFBaEMsQ0FBYjs7QUFFQSxPQUFJRSxPQUFPRSxXQUFQLEVBQUosRUFBMkI7QUFDMUIsV0FBT0YsT0FBT0csTUFBUCxFQUFQO0FBQ0E7O0FBRUQsVUFBT0gsTUFBUDtBQUNBLEc7O0FBRW9CSSxLLEVBQUs7QUFDekI7Ozs7Ozs7O0FBUUEsT0FBSSxPQUFPQSxHQUFQLElBQWMsUUFBbEIsRUFBNEI7QUFDM0IsV0FBTyxLQUFQO0FBQ0E7O0FBRUQsVUFBT2IsNkJBQTZCYyxJQUE3QixDQUFtQ0QsR0FBbkMsQ0FBUDtBQUNBLEc7O0FBRUQsZ0JBQWFKLE1BQWIsRUFBcUI7QUFDYkEsUUFEYSxFQUNMWCxXQURLO0FBRXBCLEU7O0FBRU1XLFEsRUFBUTtBQUNkO0FBQ0MsWUFBT0EsTUFBUCx1REFBT0EsTUFBUCxNQUFpQlYsV0FBakI7QUFDR1Usc0JBQWtCTixNQUZ0Qjs7QUFJQSxHOzs7Ozs7Ozs7Ozs7OztBQWNVSSxRLEVBQVE7QUFDbEI7Ozs7Ozs7O0FBUUEsVUFBT1gsS0FBS21CLE1BQUwsQ0FBYSxLQUFLQyxPQUFMLEVBQWIsRUFBK0JDLFNBQS9CLENBQTBDVixNQUExQyxDQUFQO0FBQ0EsRyxXQXRCS1gsS0FBS3NCLE8sc0JBQVksQ0FDdEIsT0FBTyxDQUFDQyxNQUFPLEtBQUtILE9BQUwsRUFBUCxDQUFSLENBQ0EsQyxXQUVLcEIsS0FBS3dCLE0sc0JBQVcsQ0FDckIsWUFBVyxLQUFLSixPQUFMLEVBQVgsQ0FDQSxDLFdBRUtwQixLQUFLeUIsTSxzQkFBVyxDQUNyQixPQUFPLEtBQUtMLE9BQUwsRUFBUCxDQUNBLEMsb0JBbkVrQnBCLEk7OztBQWtGcEIwQixPQUFPQyxPQUFQLEdBQWlCdEIsS0FBakIiLCJmaWxlIjoiZGlnaXQuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibnVtb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwibnVtby9kaWdpdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImRpZ2l0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJudW1vXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbnVtby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcIm51bW8tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogZmFsc2UsXG5cdFx0XHRcImludGVybmFsXCI6IHRydWUsXG5cdFx0XHRcImNsYXNzXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtc3VibW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAc3VibW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RGlnaXQgY2xhc3Mgd3JhcHBlci5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZWhtXCI6IFwiZWhtXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgTWV0YSA9IHJlcXVpcmUoIFwiZWhtXCIgKSggKTtcblxuY29uc3QgTlVNQkVSX05BTUUgPSBcIk51bWJlclwiO1xuY29uc3QgTlVNQkVSX1RZUEUgPSBcIm51bWJlclwiO1xuXG5jb25zdCBTRVJJQUxJWkVfTlVNQkVSX1RBR19QQVRURVJOID0gL15cXFtudW1iZXIgTnVtYmVyKD86XFw6KC4rPykpP1xcXSQvO1xuXG5jbGFzcyBEaWdpdCBleHRlbmRzIE1ldGEge1xuXHRzdGF0aWMgWyBTeW1ib2wuaGFzSW5zdGFuY2UgXSggaW5zdGFuY2UgKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dHlwZW9mIGluc3RhbmNlID09IE5VTUJFUl9UWVBFXG5cdFx0XHR8fCBpbnN0YW5jZSBpbnN0YW5jZW9mIE51bWJlclxuXHRcdFx0fHwgdHlwZW9mIGluc3RhbmNlID09IFwiZnVuY3Rpb25cIiAmJiBpbnN0YW5jZS5uYW1lID09PSBOVU1CRVJfTkFNRVxuXHRcdFx0fHwgTWV0YS5pbnN0YW5jZU9mKCBpbnN0YW5jZSwgdGhpcyApXG5cdFx0KTtcblx0fVxuXG5cdHN0YXRpYyBkZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImRhdGFcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgZW50aXR5ID0gTWV0YS5kZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCB0aGlzICk7XG5cblx0XHRpZiggZW50aXR5LmlzQ29ycnVwdGVkKCApICl7XG5cdFx0XHRyZXR1cm4gZW50aXR5LnJldmVydCggKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZW50aXR5O1xuXHR9XG5cblx0c3RhdGljIGlzQ29tcGF0aWJsZSggdGFnICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0YWdcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggdHlwZW9mIHRhZyAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFNFUklBTElaRV9OVU1CRVJfVEFHX1BBVFRFUk4udGVzdCggdGFnICk7XG5cdH1cblxuXHRjb25zdHJ1Y3RvciggZW50aXR5ICl7XG5cdFx0c3VwZXIoIGVudGl0eSwgTlVNQkVSX05BTUUgKTtcblx0fVxuXG5cdGNoZWNrKCBlbnRpdHkgKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dHlwZW9mIGVudGl0eSA9PSBOVU1CRVJfVFlQRVxuXHRcdFx0fHwgZW50aXR5IGluc3RhbmNlb2YgTnVtYmVyXG5cdFx0KTtcblx0fVxuXG5cdGdldCBbIE1ldGEuQk9PTEVBTiBdKCApe1xuXHRcdHJldHVybiAhaXNOYU4oIHRoaXMudmFsdWVPZiggKSApO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5TVFJJTkcgXSggKXtcblx0XHRyZXR1cm4gYCR7IHRoaXMudmFsdWVPZiggKSB9YDtcblx0fVxuXG5cdGdldCBbIE1ldGEuTlVNQkVSIF0oICl7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVPZiggKTtcblx0fVxuXG5cdHNlcmlhbGl6ZSggcGFyc2VyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiBNZXRhLmNyZWF0ZSggdGhpcy52YWx1ZU9mKCApICkuc2VyaWFsaXplKCBwYXJzZXIgKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpZ2l0O1xuIl19
//# sourceMappingURL=digit.support.js.map
