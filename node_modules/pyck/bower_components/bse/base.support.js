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
              			"package": "bse",
              			"path": "bse/base.module.js",
              			"file": "base.module.js",
              			"module": "bse",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/bse.git",
              			"test": "bse-test.js",
              			"global": false,
              			"internal": true,
              			"class": true
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Base class construct.
              
              		The purpose of this class is to facilitate the base conversion.
              		This should not contain ways of introspection.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"falzy": "falzy"
              		}
              	@end-include
              */var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var falzy = require("falzy");

var EMPTY_STRING = "";

var ENCODE = "encode";
var DECODE = "decode";
var IDLE = "idle";

var ERROR = (0, _symbol2.default)("error");
var RESULT = (0, _symbol2.default)("result");
var MODE = (0, _symbol2.default)("mode");
var DATA = (0, _symbol2.default)("data");var

Base = function () {
	function Base(data, base) {(0, _classCallCheck3.default)(this, Base);
		/*;
                                                                       	@meta-configuration:
                                                                       		{
                                                                       			"data": "*",
                                                                       			"base": "number"
                                                                       		}
                                                                       	@end-meta-configuration
                                                                       */

		if (
		typeof base != "number" ||
		isNaN(base) ||
		!isFinite(base) ||
		base < 2)
		{
			throw new Error("invalid base, " + base);
		}

		this[DATA] = this.parse(data);
		this[RESULT] = EMPTY_STRING;
		this[MODE] = IDLE;
		this[ERROR] = null;
	}

	/*;
   	@method-documentation:
   		Parse the data to make it compatible for conversion.
   	@end-method-documentation
   		@note:
   		This should be overridden if possible.
   	@end-note
   */(0, _createClass3.default)(Base, [{ key: "parse", value: function parse(

		data) {
			/*;
         	@meta-configuration:
         		{
         			"data": "*"
         		}
         	@end-meta-configuration
         */

			if (falzy(data)) {
				data = EMPTY_STRING;
			}

			try {
				return "" + data;

			} catch (error) {
				this.setError(new Error("cannot parse data, " + error.stack));

				return data;
			}
		}

		/*;
    	@method-documentation:
    		Encode the data.
    	@end-method-documentation
    		@note:
    		This should be overridden.
    	@end-note
    */ }, { key: "encode", value: function encode(

		done) {
			/*;
         	@meta-configuration:
         		{
         			"done": "function"
         		}
         	@end-meta-configuration
         */

			this.setEncodeMode();

			try {
				if (typeof done == "function") {
					done.call(this, null, EMPTY_STRING);

					return this;

				} else {
					return EMPTY_STRING;
				}

			} finally {
				this.setResult(EMPTY_STRING);

				done = undefined;
			}
		}

		/*;
    	@method-documentation:
    		Decode the data.
    	@end-method-documentation
    		@note:
    		This should be overridden.
    	@end-note
    */ }, { key: "decode", value: function decode(

		done) {
			/*;
         	@meta-configuration:
         		{
         			"done": "function"
         		}
         	@end-meta-configuration
         */

			this.setDecodeMode();

			try {
				if (typeof done == "function") {
					done.call(this, null, EMPTY_STRING);

					return this;

				} else {
					return EMPTY_STRING;
				}

			} finally {
				this.setResult(EMPTY_STRING);

				done = undefined;
			}
		} }, { key: "clear", value: function clear()

		{
			this[RESULT] = EMPTY_STRING;
			this[ERROR] = null;
			this[MODE] = IDLE;
		} }, { key: "flush", value: function flush()

		{
			this.clear();
			this[DATA] = EMPTY_STRING;
		} }, { key: "setEncodeMode", value: function setEncodeMode()

		{
			this[MODE] = ENCODE;

			return this;
		} }, { key: "isEncodeMode", value: function isEncodeMode()

		{
			return this[MODE] === ENCODE;
		} }, { key: "setDecodeMode", value: function setDecodeMode()

		{
			this[MODE] = DECODE;

			return this;
		} }, { key: "isDecodeMode", value: function isDecodeMode()

		{
			return this[MODE] === DECODE;
		} }, { key: "setIdleMode", value: function setIdleMode()

		{
			this[MODE] = IDLE;

			return this;
		} }, { key: "isIdleMode", value: function isIdleMode()

		{
			return this[MODE] === IDLE;
		} }, { key: "getData", value: function getData()

		{
			return this[DATA];
		} }, { key: "setResult", value: function setResult(

		result) {
			/*;
           	@meta-configuration:
           		{
           			"result": "*"
           		}
           	@end-meta-configuration
           */

			this[RESULT] = result;

			return this;
		} }, { key: "getResult", value: function getResult()

		{
			return this[RESULT];
		} }, { key: "setError", value: function setError(

		error) {
			/*;
          	@meta-configuration:
          		{
          			"error": Error
          		}
          	@end-meta-configuration
          */

			if (error instanceof Error) {
				this[ERROR] = error;
			}

			return this;
		} }, { key: "hasError", value: function hasError()

		{
			return this[ERROR] instanceof Error;
		} }, { key: "getError", value: function getError()

		{
			return this[ERROR];
		} }]);return Base;}();


module.exports = Base;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJFTVBUWV9TVFJJTkciLCJFTkNPREUiLCJERUNPREUiLCJJRExFIiwiRVJST1IiLCJSRVNVTFQiLCJNT0RFIiwiREFUQSIsIkJhc2UiLCJkYXRhIiwiYmFzZSIsImlzTmFOIiwiaXNGaW5pdGUiLCJFcnJvciIsInBhcnNlIiwiZXJyb3IiLCJzZXRFcnJvciIsInN0YWNrIiwiZG9uZSIsInNldEVuY29kZU1vZGUiLCJjYWxsIiwic2V0UmVzdWx0IiwidW5kZWZpbmVkIiwic2V0RGVjb2RlTW9kZSIsImNsZWFyIiwicmVzdWx0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNQyxlQUFlLEVBQXJCOztBQUVBLElBQU1DLFNBQVMsUUFBZjtBQUNBLElBQU1DLFNBQVMsUUFBZjtBQUNBLElBQU1DLE9BQU8sTUFBYjs7QUFFQSxJQUFNQyxRQUFRLHNCQUFRLE9BQVIsQ0FBZDtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsT0FBTyxzQkFBUSxNQUFSLENBQWI7QUFDQSxJQUFNQyxPQUFPLHNCQUFRLE1BQVIsQ0FBYixDOztBQUVNQyxJO0FBQ0wsZUFBYUMsSUFBYixFQUFtQkMsSUFBbkIsRUFBeUI7QUFDeEI7Ozs7Ozs7OztBQVNBO0FBQ0MsU0FBT0EsSUFBUCxJQUFlLFFBQWY7QUFDR0MsUUFBT0QsSUFBUCxDQURIO0FBRUcsR0FBQ0UsU0FBVUYsSUFBVixDQUZKO0FBR0dBLFNBQU8sQ0FKWDtBQUtDO0FBQ0EsU0FBTSxJQUFJRyxLQUFKLG9CQUE2QkgsSUFBN0IsQ0FBTjtBQUNBOztBQUVELE9BQU1ILElBQU4sSUFBZSxLQUFLTyxLQUFMLENB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dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYnNlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJic2UvYmFzZS5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImJhc2UubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImJzZVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvYnNlLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiYnNlLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlLFxuXHRcdFx0XCJpbnRlcm5hbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEJhc2UgY2xhc3MgY29uc3RydWN0LlxuXG5cdFx0VGhlIHB1cnBvc2Ugb2YgdGhpcyBjbGFzcyBpcyB0byBmYWNpbGl0YXRlIHRoZSBiYXNlIGNvbnZlcnNpb24uXG5cdFx0VGhpcyBzaG91bGQgbm90IGNvbnRhaW4gd2F5cyBvZiBpbnRyb3NwZWN0aW9uLlxuXHRAZW5kLXN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcblxuY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcblxuY29uc3QgRU5DT0RFID0gXCJlbmNvZGVcIjtcbmNvbnN0IERFQ09ERSA9IFwiZGVjb2RlXCI7XG5jb25zdCBJRExFID0gXCJpZGxlXCI7XG5cbmNvbnN0IEVSUk9SID0gU3ltYm9sKCBcImVycm9yXCIgKTtcbmNvbnN0IFJFU1VMVCA9IFN5bWJvbCggXCJyZXN1bHRcIiApO1xuY29uc3QgTU9ERSA9IFN5bWJvbCggXCJtb2RlXCIgKTtcbmNvbnN0IERBVEEgPSBTeW1ib2woIFwiZGF0YVwiICk7XG5cbmNsYXNzIEJhc2Uge1xuXHRjb25zdHJ1Y3RvciggZGF0YSwgYmFzZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZGF0YVwiOiBcIipcIixcblx0XHRcdFx0XHRcImJhc2VcIjogXCJudW1iZXJcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZihcblx0XHRcdHR5cGVvZiBiYXNlICE9IFwibnVtYmVyXCJcblx0XHRcdHx8IGlzTmFOKCBiYXNlIClcblx0XHRcdHx8ICFpc0Zpbml0ZSggYmFzZSApXG5cdFx0XHR8fCBiYXNlIDwgMlxuXHRcdCl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBpbnZhbGlkIGJhc2UsICR7IGJhc2UgfWAgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBEQVRBIF0gPSB0aGlzLnBhcnNlKCBkYXRhICk7XG5cdFx0dGhpc1sgUkVTVUxUIF0gPSBFTVBUWV9TVFJJTkc7XG5cdFx0dGhpc1sgTU9ERSBdID0gSURMRTtcblx0XHR0aGlzWyBFUlJPUiBdID0gbnVsbDtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFBhcnNlIHRoZSBkYXRhIHRvIG1ha2UgaXQgY29tcGF0aWJsZSBmb3IgY29udmVyc2lvbi5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdFRoaXMgc2hvdWxkIGJlIG92ZXJyaWRkZW4gaWYgcG9zc2libGUuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHBhcnNlKCBkYXRhICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJkYXRhXCI6IFwiKlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggZGF0YSApICl7XG5cdFx0XHRkYXRhID0gRU1QVFlfU1RSSU5HO1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdHJldHVybiBgJHsgZGF0YSB9YDtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHRoaXMuc2V0RXJyb3IoIG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBkYXRhLCAkeyBlcnJvci5zdGFjayB9YCApICk7XG5cblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH1cblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEVuY29kZSB0aGUgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdFRoaXMgc2hvdWxkIGJlIG92ZXJyaWRkZW4uXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGVuY29kZSggZG9uZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZG9uZVwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0dGhpcy5zZXRFbmNvZGVNb2RlKCApO1xuXG5cdFx0dHJ5e1xuXHRcdFx0aWYoIHR5cGVvZiBkb25lID09IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0XHRkb25lLmNhbGwoIHRoaXMsIG51bGwsIEVNUFRZX1NUUklORyApO1xuXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIEVNUFRZX1NUUklORztcblx0XHRcdH1cblxuXHRcdH1maW5hbGx5e1xuXHRcdFx0dGhpcy5zZXRSZXN1bHQoIEVNUFRZX1NUUklORyApO1xuXG5cdFx0XHRkb25lID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdERlY29kZSB0aGUgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdFRoaXMgc2hvdWxkIGJlIG92ZXJyaWRkZW4uXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGRlY29kZSggZG9uZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZG9uZVwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0dGhpcy5zZXREZWNvZGVNb2RlKCApO1xuXG5cdFx0dHJ5e1xuXHRcdFx0aWYoIHR5cGVvZiBkb25lID09IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0XHRkb25lLmNhbGwoIHRoaXMsIG51bGwsIEVNUFRZX1NUUklORyApO1xuXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIEVNUFRZX1NUUklORztcblx0XHRcdH1cblxuXHRcdH1maW5hbGx5e1xuXHRcdFx0dGhpcy5zZXRSZXN1bHQoIEVNUFRZX1NUUklORyApO1xuXG5cdFx0XHRkb25lID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0fVxuXG5cdGNsZWFyKCApe1xuXHRcdHRoaXNbIFJFU1VMVCBdID0gRU1QVFlfU1RSSU5HO1xuXHRcdHRoaXNbIEVSUk9SIF0gPSBudWxsO1xuXHRcdHRoaXNbIE1PREUgXSA9IElETEU7XG5cdH1cblxuXHRmbHVzaCggKXtcblx0XHR0aGlzLmNsZWFyKCApO1xuXHRcdHRoaXNbIERBVEEgXSA9IEVNUFRZX1NUUklORztcblx0fVxuXG5cdHNldEVuY29kZU1vZGUoICl7XG5cdFx0dGhpc1sgTU9ERSBdID0gRU5DT0RFO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpc0VuY29kZU1vZGUoICl7XG5cdFx0cmV0dXJuIHRoaXNbIE1PREUgXSA9PT0gRU5DT0RFO1xuXHR9XG5cblx0c2V0RGVjb2RlTW9kZSggKXtcblx0XHR0aGlzWyBNT0RFIF0gPSBERUNPREU7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlzRGVjb2RlTW9kZSggKXtcblx0XHRyZXR1cm4gdGhpc1sgTU9ERSBdID09PSBERUNPREU7XG5cdH1cblxuXHRzZXRJZGxlTW9kZSggKXtcblx0XHR0aGlzWyBNT0RFIF0gPSBJRExFO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpc0lkbGVNb2RlKCApe1xuXHRcdHJldHVybiB0aGlzWyBNT0RFIF0gPT09IElETEU7XG5cdH1cblxuXHRnZXREYXRhKCApe1xuXHRcdHJldHVybiB0aGlzWyBEQVRBIF07XG5cdH1cblxuXHRzZXRSZXN1bHQoIHJlc3VsdCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicmVzdWx0XCI6IFwiKlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHRoaXNbIFJFU1VMVCBdID0gcmVzdWx0O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRSZXN1bHQoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFJFU1VMVCBdO1xuXHR9XG5cblx0c2V0RXJyb3IoIGVycm9yICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJlcnJvclwiOiBFcnJvclxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZXJyb3IgaW5zdGFuY2VvZiBFcnJvciApe1xuXHRcdFx0dGhpc1sgRVJST1IgXSA9IGVycm9yO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aGFzRXJyb3IoICl7XG5cdFx0cmV0dXJuIHRoaXNbIEVSUk9SIF0gaW5zdGFuY2VvZiBFcnJvcjtcblx0fVxuXG5cdGdldEVycm9yKCApe1xuXHRcdHJldHVybiB0aGlzWyBFUlJPUiBdO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZTtcbiJdfQ==
//# sourceMappingURL=base.support.js.map
