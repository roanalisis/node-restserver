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
              			"package": "stro",
              			"path": "stro/sequence.module.js",
              			"file": "sequence.module.js",
              			"module": "stro",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/stro.git",
              			"test": "stro-test.js",
              			"global": false,
              			"internal": true,
              			"class": true
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Sequence class wrapper.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"ehm": "ehm"
              		}
              	@end-include
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Meta = require("ehm")();

var STRING_NAME = "String";
var STRING_TYPE = "string";

var SERIALIZE_STRING_TAG_PATTERN = /^\[string String(?:\:(.+?))?\]$/;var

Sequence = function (_Meta) {(0, _inherits3.default)(Sequence, _Meta);(0, _createClass3.default)(Sequence, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			return (
				(typeof instance === "undefined" ? "undefined" : (0, _typeof3.default)(instance)) == STRING_TYPE ||
				instance instanceof String ||
				typeof instance == "function" && instance.name === STRING_NAME ||
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

			return SERIALIZE_STRING_TAG_PATTERN.test(tag);
		} }]);

	function Sequence(entity) {(0, _classCallCheck3.default)(this, Sequence);return (0, _possibleConstructorReturn3.default)(this, (Sequence.__proto__ || (0, _getPrototypeOf2.default)(Sequence)).call(this,
		entity, STRING_NAME));
	}(0, _createClass3.default)(Sequence, [{ key: "check", value: function check(

		entity) {
			return (
				(typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) == STRING_TYPE ||
				entity instanceof String);

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
		} }, { key: Meta.BOOLEAN, get: function get() {if (this.valueOf().length > 0) {return true;}return false;} }, { key: Meta.STRING, get: function get() {return this.valueOf();} }, { key: Meta.NUMBER, get: function get() {return this.valueOf().length;} }]);return Sequence;}(Meta);


module.exports = Sequence;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcXVlbmNlLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiTWV0YSIsInJlcXVpcmUiLCJTVFJJTkdfTkFNRSIsIlNUUklOR19UWVBFIiwiU0VSSUFMSVpFX1NUUklOR19UQUdfUEFUVEVSTiIsIlNlcXVlbmNlIiwiaW5zdGFuY2UiLCJTdHJpbmciLCJuYW1lIiwiaW5zdGFuY2VPZiIsImRhdGEiLCJwYXJzZXIiLCJibHVlcHJpbnQiLCJlbnRpdHkiLCJkZXNlcmlhbGl6ZSIsImlzQ29ycnVwdGVkIiwicmV2ZXJ0IiwidGFnIiwidGVzdCIsImNyZWF0ZSIsInZhbHVlT2YiLCJzZXJpYWxpemUiLCJCT09MRUFOIiwibGVuZ3RoIiwiU1RSSU5HIiwiTlVNQkVSIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsT0FBT0MsUUFBUyxLQUFULEdBQWI7O0FBRUEsSUFBTUMsY0FBYyxRQUFwQjtBQUNBLElBQU1DLGNBQWMsUUFBcEI7O0FBRUEsSUFBTUMsK0JBQStCLGlDQUFyQyxDOztBQUVNQyxRO0FBQzBCQyxVLEVBQVU7QUFDeEM7QUFDQyxZQUFPQSxRQUFQLHVEQUFPQSxRQUFQLE1BQW1CSCxXQUFuQjtBQUNHRyx3QkFBb0JDLE1BRHZCO0FBRUcsV0FBT0QsUUFBUCxJQUFtQixVQUFuQixJQUFpQ0EsU0FBU0UsSUFBVCxLQUFrQk4sV0FGdEQ7QUFHR0YsU0FBS1MsVUFBTCxDQUFpQkgsUUFBakIsRUFBMkIsSUFBM0IsQ0FKSjs7QUFNQSxHOztBQUVtQkksTSxFQUFNQyxNLEVBQVFDLFMsRUFBVztBQUM1Qzs7Ozs7Ozs7OztBQVVBLE9BQUlDLFNBQVNiLEtBQUtjLFdBQUwsQ0FBa0JKLElBQWxCLEVBQXdCQyxNQUF4QixFQUFnQyxJQUFoQyxDQUFiOztBQUVBLE9BQUlFLE9BQU9FLFdBQVAsRUFBSixFQUEyQjtBQUMxQixXQUFPRixPQUFPRyxNQUFQLEVBQVA7QUFDQTs7QUFFRCxVQUFPSCxNQUFQO0FBQ0EsRzs7QUFFb0JJLEssRUFBSztBQUN6Qjs7Ozs7Ozs7QUFRQSxPQUFJLE9BQU9BLEdBQVAsSUFBYyxRQUFsQixFQUE0QjtBQUMzQixXQUFPLEtBQVA7QUFDQTs7QUFFRCxVQUFPYiw2QkFBNkJjLElBQTdCLENBQW1DRCxHQUFuQyxDQUFQO0FBQ0EsRzs7QUFFRCxtQkFBYUosTUFBYixFQUFxQjtBQUNiQSxRQURhLEVBQ0xYLFdBREs7QUFFcEIsRTs7QUFFTVcsUSxFQUFRO0FBQ2Q7QUFDQyxZQUFPQSxNQUFQLHVEQUFPQSxNQUFQLE1BQWlCVixXQUFqQjtBQUNHVSxzQkFBa0JOLE1BRnRCOztBQUlBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCVUksUSxFQUFRO0FBQ2xCOzs7Ozs7OztBQVFBLFVBQU9YLEtBQUttQixNQUFMLENBQWEsS0FBS0MsT0FBTCxFQUFiLEVBQStCQyxTQUEvQixDQUEwQ1YsTUFBMUMsQ0FBUDtBQUNBLEcsV0ExQktYLEtBQUtzQixPLHNCQUFZLENBQ3RCLElBQUksS0FBS0YsT0FBTCxHQUFnQkcsTUFBaEIsR0FBeUIsQ0FBN0IsRUFBZ0MsQ0FDL0IsT0FBTyxJQUFQLENBQ0EsQ0FFRCxPQUFPLEtBQVAsQ0FDQSxDLFdBRUt2QixLQUFLd0IsTSxzQkFBVyxDQUNyQixPQUFPLEtBQUtKLE9BQUwsRUFBUCxDQUNBLEMsV0FFS3BCLEtBQUt5QixNLHNCQUFXLENBQ3JCLE9BQU8sS0FBS0wsT0FBTCxHQUFnQkcsTUFBdkIsQ0FDQSxDLHVCQXZFcUJ2QixJOzs7QUFzRnZCMEIsT0FBT0MsT0FBUCxHQUFpQnRCLFFBQWpCIiwiZmlsZSI6InNlcXVlbmNlLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInN0cm9cIixcblx0XHRcdFwicGF0aFwiOiBcInN0cm8vc2VxdWVuY2UubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJzZXF1ZW5jZS5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwic3Ryb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvc3Ryby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInN0cm8tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogZmFsc2UsXG5cdFx0XHRcImludGVybmFsXCI6IHRydWUsXG5cdFx0XHRcImNsYXNzXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtc3VibW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAc3VibW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0U2VxdWVuY2UgY2xhc3Mgd3JhcHBlci5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZWhtXCI6IFwiZWhtXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgTWV0YSA9IHJlcXVpcmUoIFwiZWhtXCIgKSggKTtcblxuY29uc3QgU1RSSU5HX05BTUUgPSBcIlN0cmluZ1wiO1xuY29uc3QgU1RSSU5HX1RZUEUgPSBcInN0cmluZ1wiO1xuXG5jb25zdCBTRVJJQUxJWkVfU1RSSU5HX1RBR19QQVRURVJOID0gL15cXFtzdHJpbmcgU3RyaW5nKD86XFw6KC4rPykpP1xcXSQvO1xuXG5jbGFzcyBTZXF1ZW5jZSBleHRlbmRzIE1ldGEge1xuXHRzdGF0aWMgWyBTeW1ib2wuaGFzSW5zdGFuY2UgXSggaW5zdGFuY2UgKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dHlwZW9mIGluc3RhbmNlID09IFNUUklOR19UWVBFXG5cdFx0XHR8fCBpbnN0YW5jZSBpbnN0YW5jZW9mIFN0cmluZ1xuXHRcdFx0fHwgdHlwZW9mIGluc3RhbmNlID09IFwiZnVuY3Rpb25cIiAmJiBpbnN0YW5jZS5uYW1lID09PSBTVFJJTkdfTkFNRVxuXHRcdFx0fHwgTWV0YS5pbnN0YW5jZU9mKCBpbnN0YW5jZSwgdGhpcyApXG5cdFx0KTtcblx0fVxuXG5cdHN0YXRpYyBkZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImRhdGFcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgZW50aXR5ID0gTWV0YS5kZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCB0aGlzICk7XG5cblx0XHRpZiggZW50aXR5LmlzQ29ycnVwdGVkKCApICl7XG5cdFx0XHRyZXR1cm4gZW50aXR5LnJldmVydCggKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZW50aXR5O1xuXHR9XG5cblx0c3RhdGljIGlzQ29tcGF0aWJsZSggdGFnICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0YWdcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggdHlwZW9mIHRhZyAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFNFUklBTElaRV9TVFJJTkdfVEFHX1BBVFRFUk4udGVzdCggdGFnICk7XG5cdH1cblxuXHRjb25zdHJ1Y3RvciggZW50aXR5ICl7XG5cdFx0c3VwZXIoIGVudGl0eSwgU1RSSU5HX05BTUUgKTtcblx0fVxuXG5cdGNoZWNrKCBlbnRpdHkgKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dHlwZW9mIGVudGl0eSA9PSBTVFJJTkdfVFlQRVxuXHRcdFx0fHwgZW50aXR5IGluc3RhbmNlb2YgU3RyaW5nXG5cdFx0KTtcblx0fVxuXG5cdGdldCBbIE1ldGEuQk9PTEVBTiBdKCApe1xuXHRcdGlmKCB0aGlzLnZhbHVlT2YoICkubGVuZ3RoID4gMCApe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5TVFJJTkcgXSggKXtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZU9mKCApO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5OVU1CRVIgXSggKXtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZU9mKCApLmxlbmd0aDtcblx0fVxuXG5cdHNlcmlhbGl6ZSggcGFyc2VyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiBNZXRhLmNyZWF0ZSggdGhpcy52YWx1ZU9mKCApICkuc2VyaWFsaXplKCBwYXJzZXIgKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlO1xuIl19
//# sourceMappingURL=sequence.support.js.map
