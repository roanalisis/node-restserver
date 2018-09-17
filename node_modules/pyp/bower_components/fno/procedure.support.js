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
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Meta = require("ehm")();

var FUNCTION_NAME = "Function";
var FUNCTION_TYPE = "function";

var SERIALIZE_FUNCTION_TAG_PATTERN = /^\[function Function(?:\:(.+?))?\]$/;var

Procedure = function (_Meta) {(0, _inherits3.default)(Procedure, _Meta);(0, _createClass3.default)(Procedure, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			return (
				(typeof instance === "undefined" ? "undefined" : (0, _typeof3.default)(instance)) == FUNCTION_TYPE ||
				instance instanceof Function ||
				(typeof instance === "undefined" ? "undefined" : (0, _typeof3.default)(instance)) == FUNCTION_TYPE && instance.name === FUNCTION_NAME ||
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

			return SERIALIZE_FUNCTION_TAG_PATTERN.test(tag);
		} }]);

	function Procedure(entity) {(0, _classCallCheck3.default)(this, Procedure);return (0, _possibleConstructorReturn3.default)(this, (Procedure.__proto__ || (0, _getPrototypeOf2.default)(Procedure)).call(this,
		entity, FUNCTION_NAME));
	}(0, _createClass3.default)(Procedure, [{ key: "check", value: function check(

		entity) {
			return (
				(typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) == FUNCTION_TYPE ||
				entity instanceof Function);

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
		} }, { key: "isEqual", value: function isEqual(

		procedure) {
			if (
			procedure instanceof Function ||
			(typeof procedure === "undefined" ? "undefined" : (0, _typeof3.default)(procedure)) == FUNCTION_TYPE)
			{
				return this.toString() == procedure.toString();
			}

			return false;
		} }, { key: Meta.BOOLEAN, get: function get() {return true;} }, { key: Meta.STRING, get: function get() {return this.valueOf().toString();} }, { key: Meta.NUMBER, get: function get() {return NaN;} }]);return Procedure;}(Meta);


module.exports = Procedure;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2NlZHVyZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbIk1ldGEiLCJyZXF1aXJlIiwiRlVOQ1RJT05fTkFNRSIsIkZVTkNUSU9OX1RZUEUiLCJTRVJJQUxJWkVfRlVOQ1RJT05fVEFHX1BBVFRFUk4iLCJQcm9jZWR1cmUiLCJpbnN0YW5jZSIsIkZ1bmN0aW9uIiwibmFtZSIsImluc3RhbmNlT2YiLCJkYXRhIiwicGFyc2VyIiwiYmx1ZXByaW50IiwiZW50aXR5IiwiZGVzZXJpYWxpemUiLCJpc0NvcnJ1cHRlZCIsInJldmVydCIsInRhZyIsInRlc3QiLCJjcmVhdGUiLCJ2YWx1ZU9mIiwic2VyaWFsaXplIiwicHJvY2VkdXJlIiwidG9TdHJpbmciLCJCT09MRUFOIiwiU1RSSU5HIiwiTlVNQkVSIiwiTmFOIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsT0FBT0MsUUFBUyxLQUFULEdBQWI7O0FBRUEsSUFBTUMsZ0JBQWdCLFVBQXRCO0FBQ0EsSUFBTUMsZ0JBQWdCLFVBQXRCOztBQUVBLElBQU1DLGlDQUFpQyxxQ0FBdkMsQzs7QUFFTUMsUztBQUMwQkMsVSxFQUFVO0FBQ3hDO0FBQ0MsWUFBT0EsUUFBUCx1REFBT0EsUUFBUCxNQUFtQkgsYUFBbkI7QUFDR0csd0JBQW9CQyxRQUR2QjtBQUVHLFlBQU9ELFFBQVAsdURBQU9BLFFBQVAsTUFBbUJILGFBQW5CLElBQW9DRyxTQUFTRSxJQUFULEtBQWtCTixhQUZ6RDtBQUdHRixTQUFLUyxVQUFMLENBQWlCSCxRQUFqQixFQUEyQixJQUEzQixDQUpKOztBQU1BLEc7O0FBRW1CSSxNLEVBQU1DLE0sRUFBUUMsUyxFQUFXO0FBQzVDOzs7Ozs7Ozs7O0FBVUEsT0FBSUMsU0FBU2IsS0FBS2MsV0FBTCxDQUFrQkosSUFBbEIsRUFBd0JDLE1BQXhCLEVBQWdDLElBQWhDLENBQWI7O0FBRUEsT0FBSUUsT0FBT0UsV0FBUCxFQUFKLEVBQTJCO0FBQzFCLFdBQU9GLE9BQU9HLE1BQVAsRUFBUDtBQUNBOztBQUVELFVBQU9ILE1BQVA7QUFDQSxHOztBQUVvQkksSyxFQUFLO0FBQ3pCOzs7Ozs7OztBQVFBLE9BQUksT0FBT0EsR0FBUCxJQUFjLFFBQWxCLEVBQTRCO0FBQzNCLFdBQU8sS0FBUDtBQUNBOztBQUVELFVBQU9iLCtCQUErQmMsSUFBL0IsQ0FBcUNELEdBQXJDLENBQVA7QUFDQSxHOztBQUVELG9CQUFhSixNQUFiLEVBQXFCO0FBQ2JBLFFBRGEsRUFDTFgsYUFESztBQUVwQixFOztBQUVNVyxRLEVBQVE7QUFDZDtBQUNDLFlBQU9BLE1BQVAsdURBQU9BLE1BQVAsTUFBaUJWLGFBQWpCO0FBQ0dVLHNCQUFrQk4sUUFGdEI7O0FBSUEsRzs7Ozs7Ozs7Ozs7Ozs7QUFjVUksUSxFQUFRO0FBQ2xCOzs7Ozs7OztBQVFBLFVBQU9YLEtBQUttQixNQUFMLENBQWEsS0FBS0MsT0FBTCxFQUFiLEVBQStCQyxTQUEvQixDQUEwQ1YsTUFBMUMsQ0FBUDtBQUNBLEc7O0FBRVFXLFcsRUFBVztBQUNuQjtBQUNDQSx3QkFBcUJmLFFBQXJCO0FBQ0csV0FBT2UsU0FBUCx1REFBT0EsU0FBUCxNQUFvQm5CLGFBRnhCO0FBR0M7QUFDQSxXQUFPLEtBQUtvQixRQUFMLE1BQW9CRCxVQUFVQyxRQUFWLEVBQTNCO0FBQ0E7O0FBRUQsVUFBTyxLQUFQO0FBQ0EsRyxXQWpDS3ZCLEtBQUt3QixPLHNCQUFZLENBQ3RCLE9BQU8sSUFBUCxDQUNBLEMsV0FFS3hCLEtBQUt5QixNLHNCQUFXLENBQ3JCLE9BQU8sS0FBS0wsT0FBTCxHQUFnQkcsUUFBaEIsRUFBUCxDQUNBLEMsV0FFS3ZCLEtBQUswQixNLHNCQUFXLENBQ3JCLE9BQU9DLEdBQVAsQ0FDQSxDLHdCQW5Fc0IzQixJOzs7QUE2RnhCNEIsT0FBT0MsT0FBUCxHQUFpQnhCLFNBQWpCIiwiZmlsZSI6InByb2NlZHVyZS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAc3VibW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1zdWJtb2R1bGUtbGljZW5zZVxuXG5cdEBzdWJtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJmbm9cIixcblx0XHRcdFwicGF0aFwiOiBcImZuby9wcm9jZWR1cmUubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJwcm9jZWR1cmUubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImZub1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZm5vLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZm5vLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlLFxuXHRcdFx0XCJpbnRlcm5hbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFByb2NlZHVyZSBjbGFzcyB3cmFwcGVyLlxuXHRAZW5kLXN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJlaG1cIjogXCJlaG1cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBNZXRhID0gcmVxdWlyZSggXCJlaG1cIiApKCApO1xuXG5jb25zdCBGVU5DVElPTl9OQU1FID0gXCJGdW5jdGlvblwiO1xuY29uc3QgRlVOQ1RJT05fVFlQRSA9IFwiZnVuY3Rpb25cIjtcblxuY29uc3QgU0VSSUFMSVpFX0ZVTkNUSU9OX1RBR19QQVRURVJOID0gL15cXFtmdW5jdGlvbiBGdW5jdGlvbig/OlxcOiguKz8pKT9cXF0kLztcblxuY2xhc3MgUHJvY2VkdXJlIGV4dGVuZHMgTWV0YSB7XG5cdHN0YXRpYyBbIFN5bWJvbC5oYXNJbnN0YW5jZSBdKCBpbnN0YW5jZSApe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0eXBlb2YgaW5zdGFuY2UgPT0gRlVOQ1RJT05fVFlQRVxuXHRcdFx0fHwgaW5zdGFuY2UgaW5zdGFuY2VvZiBGdW5jdGlvblxuXHRcdFx0fHwgdHlwZW9mIGluc3RhbmNlID09IEZVTkNUSU9OX1RZUEUgJiYgaW5zdGFuY2UubmFtZSA9PT0gRlVOQ1RJT05fTkFNRVxuXHRcdFx0fHwgTWV0YS5pbnN0YW5jZU9mKCBpbnN0YW5jZSwgdGhpcyApXG5cdFx0KTtcblx0fVxuXG5cdHN0YXRpYyBkZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImRhdGFcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgZW50aXR5ID0gTWV0YS5kZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCB0aGlzICk7XG5cblx0XHRpZiggZW50aXR5LmlzQ29ycnVwdGVkKCApICl7XG5cdFx0XHRyZXR1cm4gZW50aXR5LnJldmVydCggKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZW50aXR5O1xuXHR9XG5cblx0c3RhdGljIGlzQ29tcGF0aWJsZSggdGFnICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0YWdcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggdHlwZW9mIHRhZyAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFNFUklBTElaRV9GVU5DVElPTl9UQUdfUEFUVEVSTi50ZXN0KCB0YWcgKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCBlbnRpdHkgKXtcblx0XHRzdXBlciggZW50aXR5LCBGVU5DVElPTl9OQU1FICk7XG5cdH1cblxuXHRjaGVjayggZW50aXR5ICl7XG5cdFx0cmV0dXJuIChcblx0XHRcdHR5cGVvZiBlbnRpdHkgPT0gRlVOQ1RJT05fVFlQRVxuXHRcdFx0fHwgZW50aXR5IGluc3RhbmNlb2YgRnVuY3Rpb25cblx0XHQpO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5CT09MRUFOIF0oICl7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRnZXQgWyBNZXRhLlNUUklORyBdKCApe1xuXHRcdHJldHVybiB0aGlzLnZhbHVlT2YoICkudG9TdHJpbmcoICk7XG5cdH1cblxuXHRnZXQgWyBNZXRhLk5VTUJFUiBdKCApe1xuXHRcdHJldHVybiBOYU47XG5cdH1cblxuXHRzZXJpYWxpemUoIHBhcnNlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHRoaXMudmFsdWVPZiggKSApLnNlcmlhbGl6ZSggcGFyc2VyICk7XG5cdH1cblxuXHRpc0VxdWFsKCBwcm9jZWR1cmUgKXtcblx0XHRpZihcblx0XHRcdHByb2NlZHVyZSBpbnN0YW5jZW9mIEZ1bmN0aW9uXG5cdFx0XHR8fCB0eXBlb2YgcHJvY2VkdXJlID09IEZVTkNUSU9OX1RZUEVcblx0XHQpe1xuXHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoICkgPT0gcHJvY2VkdXJlLnRvU3RyaW5nKCApO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2NlZHVyZTtcbiJdfQ==
//# sourceMappingURL=procedure.support.js.map
