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
              			"package": "sxty4",
              			"path": "sxty4/base64.module.js",
              			"file": "base64.module.js",
              			"module": "sxty4",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/sxty4.git",
              			"test": "test.module.js",
              			"global": false,
              			"internal": true,
              			"class": true
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Base64 class
              	@end-submodule-documentation
              
              	@include:
              		{
              			"bse": "bse",
              			"harden": "harden"
              		}
              	@end-include
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var harden = require("harden");

var Base = require("bse")();

var BASE = 64;
var EMPTY_STRING = "";var

Base64 = function (_Base) {(0, _inherits3.default)(Base64, _Base);
	function Base64(data) {(0, _classCallCheck3.default)(this, Base64);return (0, _possibleConstructorReturn3.default)(this, (Base64.__proto__ || (0, _getPrototypeOf2.default)(Base64)).call(this,
		data, BASE));
	}(0, _createClass3.default)(Base64, [{ key: "encode", value: function encode(

		done) {
			/*;
         	@meta-configuration:
         		{
         			"done": "function"
         		}
         	@end-meta-configuration
         */

			this.setEncodeMode();

			var data = this.getData();

			var result = EMPTY_STRING;

			try {


				//: @client:
				result = encodeURIComponent(btoa(encodeURIComponent(data).
				replace(/%([0-9A-F]{2})/g, function (match, token) {
					return String.fromCharCode("0x" + token);
				})));
				//: @end-client

				if (typeof done == "function") {
					done.call(this, null, result);

					return this;

				} else {
					return result;
				}

			} catch (error) {
				error = new Error("cannot encode to base64, " + data + ", " + error.stack);

				this.setError(error);

				if (typeof done == "function") {
					done.call(this, error, EMPTY_STRING);

					return this;

				} else {
					return EMPTY_STRING;
				}

			} finally {
				this.setResult(result);

				done = undefined;
			}
		} }, { key: "decode", value: function decode(

		done) {
			/*;
         	@meta-configuration:
         		{
         			"done": "function"
         		}
         	@end-meta-configuration
         */

			this.setDecodeMode();

			var data = this.getData();

			var result = EMPTY_STRING;

			try {


				//: @client:
				result = decodeURIComponent(atob(decodeURIComponent(data)).
				split("").map(function (character) {
					character = ("00" + character.charCodeAt(0).toString(16)).slice(-2);

					return "%" + character;
				}).join(""));
				//: @end-client

				if (typeof done == "function") {
					done.call(this, null, result);

					return this;

				} else {
					return result;
				}

			} catch (error) {
				error = new Error("cannot decode from base64, " + data + ", " + error.stack);

				this.setError(error);

				if (typeof done == "function") {
					done.call(this, error, EMPTY_STRING);

					return this;

				} else {
					return EMPTY_STRING;
				}

			} finally {
				this.setResult(result);
			}
		} }]);return Base64;}(Base);


harden("Base64", Base64, Base);

module.exports = Base64;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2U2NC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImhhcmRlbiIsInJlcXVpcmUiLCJCYXNlIiwiQkFTRSIsIkVNUFRZX1NUUklORyIsIkJhc2U2NCIsImRhdGEiLCJkb25lIiwic2V0RW5jb2RlTW9kZSIsImdldERhdGEiLCJyZXN1bHQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJidG9hIiwicmVwbGFjZSIsIm1hdGNoIiwidG9rZW4iLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJjYWxsIiwiZXJyb3IiLCJFcnJvciIsInN0YWNrIiwic2V0RXJyb3IiLCJzZXRSZXN1bHQiLCJ1bmRlZmluZWQiLCJzZXREZWNvZGVNb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYXRvYiIsInNwbGl0IiwibWFwIiwiY2hhcmFjdGVyIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwic2xpY2UiLCJqb2luIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOztBQUVBLElBQU1DLE9BQU9ELFFBQVMsS0FBVCxHQUFiOztBQUVBLElBQU1FLE9BQU8sRUFBYjtBQUNBLElBQU1DLGVBQWUsRUFBckIsQzs7QUFFTUMsTTtBQUNMLGlCQUFhQyxJQUFiLEVBQW1CO0FBQ1hBLE1BRFcsRUFDTEgsSUFESztBQUVsQixFOztBQUVPSSxNLEVBQU07QUFDYjs7Ozs7Ozs7QUFRQSxRQUFLQyxhQUFMOztBQUVBLE9BQUlGLE9BQU8sS0FBS0csT0FBTCxFQUFYOztBQUVBLE9BQUlDLFNBQVNOLFlBQWI7O0FBRUEsT0FBRzs7O0FBR0Y7QUFDQU0sYUFBU0MsbUJBQW9CQyxLQUFNRCxtQkFBb0JMLElBQXBCO0FBQ2pDTyxXQURpQyxDQUN4QixpQkFEd0IsRUFDTCxVQUFFQyxLQUFGLEVBQVNDLEtBQVQsRUFBb0I7QUFDaEQsWUFBT0MsT0FBT0MsWUFBUCxRQUEyQkYsS0FBM0IsQ0FBUDtBQUNBLEtBSGlDLENBQU4sQ0FBcEIsQ0FBVDtBQUlBOztBQUVBLFFBQUksT0FBT1IsSUFBUCxJQUFlLFVBQW5CLEVBQStCO0FBQzlCQSxVQUFLVyxJQUFMLENBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QlIsTUFBdkI7O0FBRUEsWUFBTyxJQUFQOztBQUVBLEtBTEQsTUFLSztBQUNKLFlBQU9BLE1BQVA7QUFDQTs7QUFFRCxJQW5CRCxDQW1CQyxPQUFPUyxLQUFQLEVBQWM7QUFDZEEsWUFBUSxJQUFJQyxLQUFKLCtCQUF3Q2QsSUFBeEMsVUFBbURhLE1BQU1FLEtBQXpELENBQVI7O0FBRUEsU0FBS0MsUUFBTCxDQUFlSCxLQUFmOztBQUVBLFFBQUksT0FBT1osSUFBUCxJQUFlLFVBQW5CLEVBQStCO0FBQzlCQSxVQUFLVyxJQUFMLENBQVcsSUFBWCxFQUFpQkMsS0FBakIsRUFBd0JmLFlBQXhCOztBQUVBLFlBQU8sSUFBUDs7QUFFQSxLQUxELE1BS0s7QUFDSixZQUFPQSxZQUFQO0FBQ0E7O0FBRUQsSUFqQ0QsU0FpQ1E7QUFDUCxTQUFLbUIsU0FBTCxDQUFnQmIsTUFBaEI7O0FBRUFILFdBQU9pQixTQUFQO0FBQ0E7QUFDRCxHOztBQUVPakIsTSxFQUFNO0FBQ2I7Ozs7Ozs7O0FBUUEsUUFBS2tCLGFBQUw7O0FBRUEsT0FBSW5CLE9BQU8sS0FBS0csT0FBTCxFQUFYOztBQUVBLE9BQUlDLFNBQVNOLFlBQWI7O0FBRUEsT0FBRzs7O0FBR0Y7QUFDQU0sYUFBU2dCLG1CQUFvQkMsS0FBTUQsbUJBQW9CcEIsSUFBcEIsQ0FBTjtBQUMzQnNCLFNBRDJCLENBQ3BCLEVBRG9CLEVBQ2ZDLEdBRGUsQ0FDVixVQUFFQyxTQUFGLEVBQWlCO0FBQ2xDQSxpQkFBWSxRQUFNQSxVQUFVQyxVQUFWLENBQXNCLENBQXRCLEVBQTBCQyxRQUExQixDQUFvQyxFQUFwQyxDQUFOLEVBQWtEQyxLQUFsRCxDQUF5RCxDQUFDLENBQTFELENBQVo7O0FBRUEsa0JBQVlILFNBQVo7QUFDQSxLQUwyQixFQUt4QkksSUFMd0IsQ0FLbEIsRUFMa0IsQ0FBcEIsQ0FBVDtBQU1BOztBQUVBLFFBQUksT0FBTzNCLElBQVAsSUFBZSxVQUFuQixFQUErQjtBQUM5QkEsVUFBS1csSUFBTCxDQUFXLElBQVgsRUFBaUIsSUFBakIsRUFBdUJSLE1BQXZCOztBQUVBLFlBQU8sSUFBUDs7QUFFQSxLQUxELE1BS0s7QUFDSixZQUFPQSxNQUFQO0FBQ0E7O0FBRUQsSUFyQkQsQ0FxQkMsT0FBT1MsS0FBUCxFQUFjO0FBQ2RBLFlBQVEsSUFBSUMsS0FBSixpQ0FBMENkLElBQTFDLFVBQXFEYSxNQUFNRSxLQUEzRCxDQUFSOztBQUVBLFNBQUtDLFFBQUwsQ0FBZUgsS0FBZjs7QUFFQSxRQUFJLE9BQU9aLElBQVAsSUFBZSxVQUFuQixFQUErQjtBQUM5QkEsVUFBS1csSUFBTCxDQUFXLElBQVgsRUFBaUJDLEtBQWpCLEVBQXdCZixZQUF4Qjs7QUFFQSxZQUFPLElBQVA7O0FBRUEsS0FMRCxNQUtLO0FBQ0osWUFBT0EsWUFBUDtBQUNBOztBQUVELElBbkNELFNBbUNRO0FBQ1AsU0FBS21CLFNBQUwsQ0FBZ0JiLE1BQWhCO0FBQ0E7QUFDRCxHLHFCQWpIbUJSLEk7OztBQW9IckJGLE9BQVEsUUFBUixFQUFrQkssTUFBbEIsRUFBMEJILElBQTFCOztBQUVBaUMsT0FBT0MsT0FBUCxHQUFpQi9CLE1BQWpCIiwiZmlsZSI6ImJhc2U2NC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAc3VibW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1zdWJtb2R1bGUtbGljZW5zZVxuXG5cdEBzdWJtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJzeHR5NFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwic3h0eTQvYmFzZTY0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiYmFzZTY0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJzeHR5NFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvc3h0eTQuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogZmFsc2UsXG5cdFx0XHRcImludGVybmFsXCI6IHRydWUsXG5cdFx0XHRcImNsYXNzXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtc3VibW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAc3VibW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0QmFzZTY0IGNsYXNzXG5cdEBlbmQtc3VibW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImJzZVwiOiBcImJzZVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5cbmNvbnN0IEJhc2UgPSByZXF1aXJlKCBcImJzZVwiICkoICk7XG5cbmNvbnN0IEJBU0UgPSA2NDtcbmNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5cbmNsYXNzIEJhc2U2NCBleHRlbmRzIEJhc2Uge1xuXHRjb25zdHJ1Y3RvciggZGF0YSApe1xuXHRcdHN1cGVyKCBkYXRhLCBCQVNFICk7XG5cdH1cblxuXHRlbmNvZGUoIGRvbmUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImRvbmVcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHRoaXMuc2V0RW5jb2RlTW9kZSggKTtcblxuXHRcdGxldCBkYXRhID0gdGhpcy5nZXREYXRhKCApO1xuXG5cdFx0bGV0IHJlc3VsdCA9IEVNUFRZX1NUUklORztcblxuXHRcdHRyeXtcblx0XHRcdFxuXG5cdFx0XHQvLzogQGNsaWVudDpcblx0XHRcdHJlc3VsdCA9IGVuY29kZVVSSUNvbXBvbmVudCggYnRvYSggZW5jb2RlVVJJQ29tcG9uZW50KCBkYXRhIClcblx0XHRcdFx0LnJlcGxhY2UoIC8lKFswLTlBLUZdezJ9KS9nLCAoIG1hdGNoLCB0b2tlbiApID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSggYDB4JHsgdG9rZW4gfWAgKTtcblx0XHRcdFx0fSApICkgKTtcblx0XHRcdC8vOiBAZW5kLWNsaWVudFxuXG5cdFx0XHRpZiggdHlwZW9mIGRvbmUgPT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRcdGRvbmUuY2FsbCggdGhpcywgbnVsbCwgcmVzdWx0ICk7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0ZXJyb3IgPSBuZXcgRXJyb3IoIGBjYW5ub3QgZW5jb2RlIHRvIGJhc2U2NCwgJHsgZGF0YSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xuXG5cdFx0XHR0aGlzLnNldEVycm9yKCBlcnJvciApO1xuXG5cdFx0XHRpZiggdHlwZW9mIGRvbmUgPT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRcdGRvbmUuY2FsbCggdGhpcywgZXJyb3IsIEVNUFRZX1NUUklORyApO1xuXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIEVNUFRZX1NUUklORztcblx0XHRcdH1cblxuXHRcdH1maW5hbGx5e1xuXHRcdFx0dGhpcy5zZXRSZXN1bHQoIHJlc3VsdCApO1xuXG5cdFx0XHRkb25lID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0fVxuXG5cdGRlY29kZSggZG9uZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZG9uZVwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0dGhpcy5zZXREZWNvZGVNb2RlKCApO1xuXG5cdFx0bGV0IGRhdGEgPSB0aGlzLmdldERhdGEoICk7XG5cblx0XHRsZXQgcmVzdWx0ID0gRU1QVFlfU1RSSU5HO1xuXG5cdFx0dHJ5e1xuXHRcdFx0XG5cblx0XHRcdC8vOiBAY2xpZW50OlxuXHRcdFx0cmVzdWx0ID0gZGVjb2RlVVJJQ29tcG9uZW50KCBhdG9iKCBkZWNvZGVVUklDb21wb25lbnQoIGRhdGEgKSApXG5cdFx0XHRcdC5zcGxpdCggXCJcIiApLm1hcCggKCBjaGFyYWN0ZXIgKSA9PiB7XG5cdFx0XHRcdFx0Y2hhcmFjdGVyID0gYDAwJHsgY2hhcmFjdGVyLmNoYXJDb2RlQXQoIDAgKS50b1N0cmluZyggMTYgKSB9YC5zbGljZSggLTIgKTtcblxuXHRcdFx0XHRcdHJldHVybiBgJSR7IGNoYXJhY3RlciB9YDtcblx0XHRcdFx0fSApLmpvaW4oIFwiXCIgKSApO1xuXHRcdFx0Ly86IEBlbmQtY2xpZW50XG5cblx0XHRcdGlmKCB0eXBlb2YgZG9uZSA9PSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdFx0ZG9uZS5jYWxsKCB0aGlzLCBudWxsLCByZXN1bHQgKTtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRlcnJvciA9IG5ldyBFcnJvciggYGNhbm5vdCBkZWNvZGUgZnJvbSBiYXNlNjQsICR7IGRhdGEgfSwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblxuXHRcdFx0dGhpcy5zZXRFcnJvciggZXJyb3IgKTtcblxuXHRcdFx0aWYoIHR5cGVvZiBkb25lID09IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0XHRkb25lLmNhbGwoIHRoaXMsIGVycm9yLCBFTVBUWV9TVFJJTkcgKTtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBFTVBUWV9TVFJJTkc7XG5cdFx0XHR9XG5cblx0XHR9ZmluYWxseXtcblx0XHRcdHRoaXMuc2V0UmVzdWx0KCByZXN1bHQgKTtcblx0XHR9XG5cdH1cbn1cblxuaGFyZGVuKCBcIkJhc2U2NFwiLCBCYXNlNjQsIEJhc2UgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlNjQ7XG4iXX0=
//# sourceMappingURL=base64.support.js.map
