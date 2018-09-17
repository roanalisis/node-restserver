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
              			"package": "glyph",
              			"path": "glyph/glyph.module.js",
              			"file": "glyph.module.js",
              			"module": "glyph",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/glyph.git",
              			"test": "glyph-test.js",
              			"global": false,
              			"internal": true,
              			"class": true
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Glyph class wrapper for Symbol.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"ehm": "ehm"
              		}
              	@end-include
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Meta = require("ehm")();

var SYMBOL_NAME = "Symbol";
var SYMBOL_TYPE = "symbol";

var SERIALIZE_SYMBOL_TAG_PATTERN = /^\[symbol Symbol(?:\:(.+?))?\]$/;var

Glyph = function (_Meta) {(0, _inherits3.default)(Glyph, _Meta);(0, _createClass3.default)(Glyph, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			/*;
             	@meta-configuration:
             		{
             			"instance:required": "*"
             		}
             	@end-meta-configuration
             */

			return (
				(typeof instance === "undefined" ? "undefined" : (0, _typeof3.default)(instance)) == SYMBOL_TYPE ||
				instance === _symbol2.default ||
				typeof instance == "function" && instance.name === SYMBOL_NAME ||
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

			return SERIALIZE_SYMBOL_TAG_PATTERN.test(tag);
		} }]);

	function Glyph(entity) {(0, _classCallCheck3.default)(this, Glyph);
		/*;
                                                                     	@meta-configuration:
                                                                     		{
                                                                     			"entity:required": "symbol"
                                                                     		}
                                                                     	@end-meta-configuration
                                                                     */return (0, _possibleConstructorReturn3.default)(this, (Glyph.__proto__ || (0, _getPrototypeOf2.default)(Glyph)).call(this,

		entity, SYMBOL_NAME));
	}(0, _createClass3.default)(Glyph, [{ key: "check", value: function check(

		entity) {
			return (typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) == SYMBOL_TYPE;
		} }, { key: "serialize", value: function serialize()













		{
			return this.tag(this.stringify());
		} }, { key: "isEqual", value: function isEqual(

		symbol) {
			if (
			symbol instanceof Glyph ||
			(typeof symbol === "undefined" ? "undefined" : (0, _typeof3.default)(symbol)) == SYMBOL_TYPE)
			{
				return this.toString() == symbol.toString();
			}

			return false;
		} }, { key: Meta.BOOLEAN, get: function get() {return true;} }, { key: Meta.STRING, get: function get() {return this.valueOf().toString();} }, { key: Meta.NUMBER, get: function get() {return NaN;} }]);return Glyph;}(Meta);


module.exports = Glyph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdseXBoLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiTWV0YSIsInJlcXVpcmUiLCJTWU1CT0xfTkFNRSIsIlNZTUJPTF9UWVBFIiwiU0VSSUFMSVpFX1NZTUJPTF9UQUdfUEFUVEVSTiIsIkdseXBoIiwiaW5zdGFuY2UiLCJuYW1lIiwiaW5zdGFuY2VPZiIsImRhdGEiLCJwYXJzZXIiLCJibHVlcHJpbnQiLCJlbnRpdHkiLCJkZXNlcmlhbGl6ZSIsImlzQ29ycnVwdGVkIiwicmV2ZXJ0IiwidGFnIiwidGVzdCIsInN0cmluZ2lmeSIsInN5bWJvbCIsInRvU3RyaW5nIiwiQk9PTEVBTiIsIlNUUklORyIsInZhbHVlT2YiLCJOVU1CRVIiLCJOYU4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQSxJQUFNQSxPQUFPQyxRQUFTLEtBQVQsR0FBYjs7QUFFQSxJQUFNQyxjQUFjLFFBQXBCO0FBQ0EsSUFBTUMsY0FBYyxRQUFwQjs7QUFFQSxJQUFNQywrQkFBK0IsaUNBQXJDLEM7O0FBRU1DLEs7QUFDMEJDLFUsRUFBVTtBQUN4Qzs7Ozs7Ozs7QUFRQTtBQUNDLFlBQU9BLFFBQVAsdURBQU9BLFFBQVAsTUFBbUJILFdBQW5CO0FBQ0dHLGlDQURIO0FBRUcsV0FBT0EsUUFBUCxJQUFtQixVQUFuQixJQUFpQ0EsU0FBU0MsSUFBVCxLQUFrQkwsV0FGdEQ7QUFHR0YsU0FBS1EsVUFBTCxDQUFpQkYsUUFBakIsRUFBMkIsSUFBM0IsQ0FKSjs7QUFNQSxHOztBQUVtQkcsTSxFQUFNQyxNLEVBQVFDLFMsRUFBVztBQUM1Qzs7Ozs7Ozs7OztBQVVBLE9BQUlDLFNBQVNaLEtBQUthLFdBQUwsQ0FBa0JKLElBQWxCLEVBQXdCQyxNQUF4QixFQUFnQyxJQUFoQyxDQUFiOztBQUVBLE9BQUlFLE9BQU9FLFdBQVAsRUFBSixFQUEyQjtBQUMxQixXQUFPRixPQUFPRyxNQUFQLEVBQVA7QUFDQTs7QUFFRCxVQUFPSCxNQUFQO0FBQ0EsRzs7QUFFb0JJLEssRUFBSztBQUN6Qjs7Ozs7Ozs7QUFRQSxPQUFJLE9BQU9BLEdBQVAsSUFBYyxRQUFsQixFQUE0QjtBQUMzQixXQUFPLEtBQVA7QUFDQTs7QUFFRCxVQUFPWiw2QkFBNkJhLElBQTdCLENBQW1DRCxHQUFuQyxDQUFQO0FBQ0EsRzs7QUFFRCxnQkFBYUosTUFBYixFQUFxQjtBQUNwQjs7Ozs7O3VFQURvQjs7QUFTYkEsUUFUYSxFQVNMVixXQVRLO0FBVXBCLEU7O0FBRU1VLFEsRUFBUTtBQUNkLFVBQU8sUUFBT0EsTUFBUCx1REFBT0EsTUFBUCxNQUFpQlQsV0FBeEI7QUFDQSxHOzs7Ozs7Ozs7Ozs7OztBQWNXO0FBQ1gsVUFBTyxLQUFLYSxHQUFMLENBQVUsS0FBS0UsU0FBTCxFQUFWLENBQVA7QUFDQSxHOztBQUVRQyxRLEVBQVE7QUFDaEI7QUFDQ0EscUJBQWtCZCxLQUFsQjtBQUNHLFdBQU9jLE1BQVAsdURBQU9BLE1BQVAsTUFBaUJoQixXQUZyQjtBQUdDO0FBQ0EsV0FBTyxLQUFLaUIsUUFBTCxNQUFvQkQsT0FBT0MsUUFBUCxFQUEzQjtBQUNBOztBQUVELFVBQU8sS0FBUDtBQUNBLEcsV0F6QktwQixLQUFLcUIsTyxzQkFBWSxDQUN0QixPQUFPLElBQVAsQ0FDQSxDLFdBRUtyQixLQUFLc0IsTSxzQkFBVyxDQUNyQixPQUFPLEtBQUtDLE9BQUwsR0FBZ0JILFFBQWhCLEVBQVAsQ0FDQSxDLFdBRUtwQixLQUFLd0IsTSxzQkFBVyxDQUNyQixPQUFPQyxHQUFQLENBQ0EsQyxvQkFoRmtCekIsSTs7O0FBa0dwQjBCLE9BQU9DLE9BQVAsR0FBaUJ0QixLQUFqQiIsImZpbGUiOiJnbHlwaC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAc3VibW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1zdWJtb2R1bGUtbGljZW5zZVxuXG5cdEBzdWJtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJnbHlwaFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZ2x5cGgvZ2x5cGgubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJnbHlwaC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZ2x5cGhcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2dseXBoLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZ2x5cGgtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogZmFsc2UsXG5cdFx0XHRcImludGVybmFsXCI6IHRydWUsXG5cdFx0XHRcImNsYXNzXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtc3VibW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAc3VibW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0R2x5cGggY2xhc3Mgd3JhcHBlciBmb3IgU3ltYm9sLlxuXHRAZW5kLXN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJlaG1cIjogXCJlaG1cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBNZXRhID0gcmVxdWlyZSggXCJlaG1cIiApKCApO1xuXG5jb25zdCBTWU1CT0xfTkFNRSA9IFwiU3ltYm9sXCI7XG5jb25zdCBTWU1CT0xfVFlQRSA9IFwic3ltYm9sXCI7XG5cbmNvbnN0IFNFUklBTElaRV9TWU1CT0xfVEFHX1BBVFRFUk4gPSAvXlxcW3N5bWJvbCBTeW1ib2woPzpcXDooLis/KSk/XFxdJC87XG5cbmNsYXNzIEdseXBoIGV4dGVuZHMgTWV0YSB7XG5cdHN0YXRpYyBbIFN5bWJvbC5oYXNJbnN0YW5jZSBdKCBpbnN0YW5jZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaW5zdGFuY2U6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdHR5cGVvZiBpbnN0YW5jZSA9PSBTWU1CT0xfVFlQRVxuXHRcdFx0fHwgaW5zdGFuY2UgPT09IFN5bWJvbFxuXHRcdFx0fHwgdHlwZW9mIGluc3RhbmNlID09IFwiZnVuY3Rpb25cIiAmJiBpbnN0YW5jZS5uYW1lID09PSBTWU1CT0xfTkFNRVxuXHRcdFx0fHwgTWV0YS5pbnN0YW5jZU9mKCBpbnN0YW5jZSwgdGhpcyApXG5cdFx0KTtcblx0fVxuXG5cdHN0YXRpYyBkZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImRhdGFcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgZW50aXR5ID0gTWV0YS5kZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCB0aGlzICk7XG5cblx0XHRpZiggZW50aXR5LmlzQ29ycnVwdGVkKCApICl7XG5cdFx0XHRyZXR1cm4gZW50aXR5LnJldmVydCggKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZW50aXR5O1xuXHR9XG5cblx0c3RhdGljIGlzQ29tcGF0aWJsZSggdGFnICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0YWdcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggdHlwZW9mIHRhZyAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFNFUklBTElaRV9TWU1CT0xfVEFHX1BBVFRFUk4udGVzdCggdGFnICk7XG5cdH1cblxuXHRjb25zdHJ1Y3RvciggZW50aXR5ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCJzeW1ib2xcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRzdXBlciggZW50aXR5LCBTWU1CT0xfTkFNRSApO1xuXHR9XG5cblx0Y2hlY2soIGVudGl0eSApe1xuXHRcdHJldHVybiB0eXBlb2YgZW50aXR5ID09IFNZTUJPTF9UWVBFO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5CT09MRUFOIF0oICl7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRnZXQgWyBNZXRhLlNUUklORyBdKCApe1xuXHRcdHJldHVybiB0aGlzLnZhbHVlT2YoICkudG9TdHJpbmcoICk7XG5cdH1cblxuXHRnZXQgWyBNZXRhLk5VTUJFUiBdKCApe1xuXHRcdHJldHVybiBOYU47XG5cdH1cblxuXHRzZXJpYWxpemUoICl7XG5cdFx0cmV0dXJuIHRoaXMudGFnKCB0aGlzLnN0cmluZ2lmeSggKSApO1xuXHR9XG5cblx0aXNFcXVhbCggc3ltYm9sICl7XG5cdFx0aWYoXG5cdFx0XHRzeW1ib2wgaW5zdGFuY2VvZiBHbHlwaFxuXHRcdFx0fHwgdHlwZW9mIHN5bWJvbCA9PSBTWU1CT0xfVFlQRVxuXHRcdCl7XG5cdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZyggKSA9PSBzeW1ib2wudG9TdHJpbmcoICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2x5cGg7XG4iXX0=
//# sourceMappingURL=glyph.support.js.map
