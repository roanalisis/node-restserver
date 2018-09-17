"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "doubt",
              			"path": "doubt/doubt.js",
              			"file": "doubt.js",
              			"module": "doubt",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/doubt.git",
              			"test": "doubt-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Checks entity if array, arguments, iterable or array-like.
              	@end-module-documentation
              
              	@include:
              		{
              			"cemento": "cemento",
              			"falzy": "falzy",
              			"harden": "harden",
              			"stringe": "stringe",
              			"truly": "truly"
              		}
              	@end-include
              */var _iterator = require("babel-runtime/core-js/symbol/iterator");var _iterator2 = _interopRequireDefault(_iterator);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var cemento = require("cemento");
var falzy = require("falzy");
var harden = require("harden");
var stringe = require("stringe");
var truly = require("truly");

harden("ARRAY", "array");
harden("ARGUMENTS", "arguments");
harden("ARRAY_LIKE", "array-like");
harden("AS_ARRAY", "as-array");
harden("ITERABLE", "iterable");

var ARGUMENTS_PATTERN = /^\[object Arguments\]$/;

var doubt = function doubt(array, condition) {
	/*;
                                              	@meta-configuration:
                                              		{
                                              			"array:required": [
                                              				"[*]",
                                              				Array,
                                              				"Arguments"
                                              			],
                                              			"condition": [
                                              				"string",
                                              				ARRAY,
                                              				ARGUMENTS,
                                              				ARRAY_LIKE,
                                              				AS_ARRAY,
                                              				ITERABLE
                                              			]
                                              		}
                                              	@end-meta-configuration
                                              */

	if (arguments.length == 2) {
		if (
		falzy(array) ||
		typeof array == "string" ||
		typeof array == "number" ||
		typeof array == "boolean" ||
		(typeof array === "undefined" ? "undefined" : (0, _typeof3.default)(array)) == "symbol")
		{
			return false;
		}

		if (
		condition !== ARRAY &&
		condition !== AS_ARRAY &&
		condition !== ARGUMENTS &&
		condition !== ARRAY_LIKE &&
		condition !== ITERABLE)
		{
			throw new Error("invalid condition");
		}

		if (condition == ARRAY) {
			return Array.isArray(array);

		} else if (condition == AS_ARRAY) {
			return (
				doubt(array, ARRAY) ||
				doubt(array, ARGUMENTS) ||
				doubt(array, ARRAY_LIKE) ||
				doubt(array, ITERABLE));


		} else if (condition == ARGUMENTS) {
			return (
				(typeof array === "undefined" ? "undefined" : (0, _typeof3.default)(array)) == "object" &&
				/*;
                                                                                               	@note:
                                                                                               		Do not change this, this should always use stringe!
                                                                                               		Or else other modules will break.
                                                                                               	@end-note
                                                                                               */
				ARGUMENTS_PATTERN.test(stringe(array)));


		} else if (condition == ARRAY_LIKE) {
			return typeof array.length == "number";

		} else if (condition == ITERABLE) {
			return truly(array[_iterator2.default]);

		} else {
			return false;
		}

	} else if (arguments.length == 1) {
		if (
		falzy(array) ||
		typeof array == "string" ||
		typeof array == "number" ||
		typeof array == "boolean" ||
		(typeof array === "undefined" ? "undefined" : (0, _typeof3.default)(array)) == "symbol")
		{
			return cemento({
				"ARRAY": false,
				"AS_ARRAY": false,
				"ARGUMENTS": false,
				"ARRAY_LIKE": false,
				"ITERABLE": false });

		}

		return cemento({
			"ARRAY": doubt(array, ARRAY),
			"AS_ARRAY": doubt(array, AS_ARRAY),
			"ARGUMENTS": doubt(array, ARGUMENTS),
			"ARRAY_LIKE": doubt(array, ARRAY_LIKE),
			"ITERABLE": doubt(array, ITERABLE) });


	} else {
		throw new Error("invalid parameter");
	}
};

module.exports = doubt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvdWJ0LnN1cHBvcnQuanMiXSwibmFtZXMiOlsiY2VtZW50byIsInJlcXVpcmUiLCJmYWx6eSIsImhhcmRlbiIsInN0cmluZ2UiLCJ0cnVseSIsIkFSR1VNRU5UU19QQVRURVJOIiwiZG91YnQiLCJhcnJheSIsImNvbmRpdGlvbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsIkFSUkFZIiwiQVNfQVJSQVkiLCJBUkdVTUVOVFMiLCJBUlJBWV9MSUtFIiwiSVRFUkFCTEUiLCJFcnJvciIsIkFycmF5IiwiaXNBcnJheSIsInRlc3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBLElBQU1BLFVBQVVDLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxVQUFVSCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNSSxRQUFRSixRQUFTLE9BQVQsQ0FBZDs7QUFFQUUsT0FBUSxPQUFSLEVBQWlCLE9BQWpCO0FBQ0FBLE9BQVEsV0FBUixFQUFxQixXQUFyQjtBQUNBQSxPQUFRLFlBQVIsRUFBc0IsWUFBdEI7QUFDQUEsT0FBUSxVQUFSLEVBQW9CLFVBQXBCO0FBQ0FBLE9BQVEsVUFBUixFQUFvQixVQUFwQjs7QUFFQSxJQUFNRyxvQkFBb0Isd0JBQTFCOztBQUVBLElBQU1DLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsS0FBaEIsRUFBdUJDLFNBQXZCLEVBQWtDO0FBQy9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSxLQUFJQyxVQUFVQyxNQUFWLElBQW9CLENBQXhCLEVBQTJCO0FBQzFCO0FBQ0NULFFBQU9NLEtBQVA7QUFDQSxTQUFPQSxLQUFQLElBQWdCLFFBRGhCO0FBRUEsU0FBT0EsS0FBUCxJQUFnQixRQUZoQjtBQUdBLFNBQU9BLEtBQVAsSUFBZ0IsU0FIaEI7QUFJQSxVQUFPQSxLQUFQLHVEQUFPQSxLQUFQLE1BQWdCLFFBTGpCO0FBTUM7QUFDQSxVQUFPLEtBQVA7QUFDQTs7QUFFRDtBQUNDQyxnQkFBY0csS0FBZDtBQUNBSCxnQkFBY0ksUUFEZDtBQUVBSixnQkFBY0ssU0FGZDtBQUdBTCxnQkFBY00sVUFIZDtBQUlBTixnQkFBY08sUUFMZjtBQU1DO0FBQ0EsU0FBTSxJQUFJQyxLQUFKLENBQVcsbUJBQVgsQ0FBTjtBQUNBOztBQUVELE1BQUlSLGFBQWFHLEtBQWpCLEVBQXdCO0FBQ3ZCLFVBQU9NLE1BQU1DLE9BQU4sQ0FBZVgsS0FBZixDQUFQOztBQUVBLEdBSEQsTUFHTSxJQUFJQyxhQUFhSSxRQUFqQixFQUEyQjtBQUNoQztBQUNDTixVQUFPQyxLQUFQLEVBQWNJLEtBQWQ7QUFDQUwsVUFBT0MsS0FBUCxFQUFjTSxTQUFkLENBREE7QUFFQVAsVUFBT0MsS0FBUCxFQUFjTyxVQUFkLENBRkE7QUFHQVIsVUFBT0MsS0FBUCxFQUFjUSxRQUFkLENBSkQ7OztBQU9BLEdBUkssTUFRQSxJQUFJUCxhQUFhSyxTQUFqQixFQUE0QjtBQUNqQztBQUNDLFlBQU9OLEtBQVAsdURBQU9BLEtBQVAsTUFBZ0IsUUFBaEI7QUFDQTs7Ozs7O0FBTUFGLHNCQUFrQmMsSUFBbEIsQ0FBd0JoQixRQUFTSSxLQUFULENBQXhCLENBUkQ7OztBQVdBLEdBWkssTUFZQSxJQUFJQyxhQUFhTSxVQUFqQixFQUE2QjtBQUNsQyxVQUFTLE9BQU9QLE1BQU1HLE1BQWIsSUFBdUIsUUFBaEM7O0FBRUEsR0FISyxNQUdBLElBQUlGLGFBQWFPLFFBQWpCLEVBQTJCO0FBQ2hDLFVBQU9YLE1BQU9HLHlCQUFQLENBQVA7O0FBRUEsR0FISyxNQUdEO0FBQ0osVUFBTyxLQUFQO0FBQ0E7O0FBRUQsRUF0REQsTUFzRE0sSUFBSUUsVUFBVUMsTUFBVixJQUFvQixDQUF4QixFQUEyQjtBQUNoQztBQUNDVCxRQUFPTSxLQUFQO0FBQ0EsU0FBT0EsS0FBUCxJQUFnQixRQURoQjtBQUVBLFNBQU9BLEtBQVAsSUFBZ0IsUUFGaEI7QUFHQSxTQUFPQSxLQUFQLElBQWdCLFNBSGhCO0FBSUEsVUFBT0EsS0FBUCx1REFBT0EsS0FBUCxNQUFnQixRQUxqQjtBQU1DO0FBQ0EsVUFBT1IsUUFBUztBQUNmLGFBQVMsS0FETTtBQUVmLGdCQUFZLEtBRkc7QUFHZixpQkFBYSxLQUhFO0FBSWYsa0JBQWMsS0FKQztBQUtmLGdCQUFZLEtBTEcsRUFBVCxDQUFQOztBQU9BOztBQUVELFNBQU9BLFFBQVM7QUFDZixZQUFTTyxNQUFPQyxLQUFQLEVBQWNJLEtBQWQsQ0FETTtBQUVmLGVBQVlMLE1BQU9DLEtBQVAsRUFBY0ssUUFBZCxDQUZHO0FBR2YsZ0JBQWFOLE1BQU9DLEtBQVAsRUFBY00sU0FBZCxDQUhFO0FBSWYsaUJBQWNQLE1BQU9DLEtBQVAsRUFBY08sVUFBZCxDQUpDO0FBS2YsZUFBWVIsTUFBT0MsS0FBUCxFQUFjUSxRQUFkLENBTEcsRUFBVCxDQUFQOzs7QUFRQSxFQXpCSyxNQXlCRDtBQUNKLFFBQU0sSUFBSUMsS0FBSixDQUFXLG1CQUFYLENBQU47QUFDQTtBQUNELENBdkdEOztBQXlHQUksT0FBT0MsT0FBUCxHQUFpQmYsS0FBakIiLCJmaWxlIjoiZG91YnQuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZG91YnRcIixcblx0XHRcdFwicGF0aFwiOiBcImRvdWJ0L2RvdWJ0LmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJkb3VidC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZG91YnQuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJkb3VidC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENoZWNrcyBlbnRpdHkgaWYgYXJyYXksIGFyZ3VtZW50cywgaXRlcmFibGUgb3IgYXJyYXktbGlrZS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiY2VtZW50b1wiOiBcImNlbWVudG9cIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwic3RyaW5nZVwiOiBcInN0cmluZ2VcIixcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGNlbWVudG8gPSByZXF1aXJlKCBcImNlbWVudG9cIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IHN0cmluZ2UgPSByZXF1aXJlKCBcInN0cmluZ2VcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcblxuaGFyZGVuKCBcIkFSUkFZXCIsIFwiYXJyYXlcIiApO1xuaGFyZGVuKCBcIkFSR1VNRU5UU1wiLCBcImFyZ3VtZW50c1wiICk7XG5oYXJkZW4oIFwiQVJSQVlfTElLRVwiLCBcImFycmF5LWxpa2VcIiApO1xuaGFyZGVuKCBcIkFTX0FSUkFZXCIsIFwiYXMtYXJyYXlcIiApO1xuaGFyZGVuKCBcIklURVJBQkxFXCIsIFwiaXRlcmFibGVcIiApO1xuXG5jb25zdCBBUkdVTUVOVFNfUEFUVEVSTiA9IC9eXFxbb2JqZWN0IEFyZ3VtZW50c1xcXSQvO1xuXG5jb25zdCBkb3VidCA9IGZ1bmN0aW9uIGRvdWJ0KCBhcnJheSwgY29uZGl0aW9uICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiYXJyYXk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwiWypdXCIsXG5cdFx0XHRcdFx0QXJyYXksXG5cdFx0XHRcdFx0XCJBcmd1bWVudHNcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcImNvbmRpdGlvblwiOiBbXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRBUlJBWSxcblx0XHRcdFx0XHRBUkdVTUVOVFMsXG5cdFx0XHRcdFx0QVJSQVlfTElLRSxcblx0XHRcdFx0XHRBU19BUlJBWSxcblx0XHRcdFx0XHRJVEVSQUJMRVxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAyICl7XG5cdFx0aWYoXG5cdFx0XHRmYWx6eSggYXJyYXkgKSB8fFxuXHRcdFx0dHlwZW9mIGFycmF5ID09IFwic3RyaW5nXCIgfHxcblx0XHRcdHR5cGVvZiBhcnJheSA9PSBcIm51bWJlclwiIHx8XG5cdFx0XHR0eXBlb2YgYXJyYXkgPT0gXCJib29sZWFuXCIgfHxcblx0XHRcdHR5cGVvZiBhcnJheSA9PSBcInN5bWJvbFwiXG5cdFx0KXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZihcblx0XHRcdGNvbmRpdGlvbiAhPT0gQVJSQVkgJiZcblx0XHRcdGNvbmRpdGlvbiAhPT0gQVNfQVJSQVkgJiZcblx0XHRcdGNvbmRpdGlvbiAhPT0gQVJHVU1FTlRTICYmXG5cdFx0XHRjb25kaXRpb24gIT09IEFSUkFZX0xJS0UgJiZcblx0XHRcdGNvbmRpdGlvbiAhPT0gSVRFUkFCTEVcblx0XHQpe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY29uZGl0aW9uXCIgKTtcblx0XHR9XG5cblx0XHRpZiggY29uZGl0aW9uID09IEFSUkFZICl7XG5cdFx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheSggYXJyYXkgKTtcblxuXHRcdH1lbHNlIGlmKCBjb25kaXRpb24gPT0gQVNfQVJSQVkgKXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdGRvdWJ0KCBhcnJheSwgQVJSQVkgKSB8fFxuXHRcdFx0XHRkb3VidCggYXJyYXksIEFSR1VNRU5UUyApIHx8XG5cdFx0XHRcdGRvdWJ0KCBhcnJheSwgQVJSQVlfTElLRSApIHx8XG5cdFx0XHRcdGRvdWJ0KCBhcnJheSwgSVRFUkFCTEUgKVxuXHRcdFx0KTtcblxuXHRcdH1lbHNlIGlmKCBjb25kaXRpb24gPT0gQVJHVU1FTlRTICl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHR0eXBlb2YgYXJyYXkgPT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHQvKjtcblx0XHRcdFx0XHRAbm90ZTpcblx0XHRcdFx0XHRcdERvIG5vdCBjaGFuZ2UgdGhpcywgdGhpcyBzaG91bGQgYWx3YXlzIHVzZSBzdHJpbmdlIVxuXHRcdFx0XHRcdFx0T3IgZWxzZSBvdGhlciBtb2R1bGVzIHdpbGwgYnJlYWsuXG5cdFx0XHRcdFx0QGVuZC1ub3RlXG5cdFx0XHRcdCovXG5cdFx0XHRcdEFSR1VNRU5UU19QQVRURVJOLnRlc3QoIHN0cmluZ2UoIGFycmF5ICkgKVxuXHRcdFx0KTtcblxuXHRcdH1lbHNlIGlmKCBjb25kaXRpb24gPT0gQVJSQVlfTElLRSApe1xuXHRcdFx0cmV0dXJuICggdHlwZW9mIGFycmF5Lmxlbmd0aCA9PSBcIm51bWJlclwiICk7XG5cblx0XHR9ZWxzZSBpZiggY29uZGl0aW9uID09IElURVJBQkxFICl7XG5cdFx0XHRyZXR1cm4gdHJ1bHkoIGFycmF5WyBTeW1ib2wuaXRlcmF0b3IgXSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdH1lbHNlIGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDEgKXtcblx0XHRpZihcblx0XHRcdGZhbHp5KCBhcnJheSApIHx8XG5cdFx0XHR0eXBlb2YgYXJyYXkgPT0gXCJzdHJpbmdcIiB8fFxuXHRcdFx0dHlwZW9mIGFycmF5ID09IFwibnVtYmVyXCIgfHxcblx0XHRcdHR5cGVvZiBhcnJheSA9PSBcImJvb2xlYW5cIiB8fFxuXHRcdFx0dHlwZW9mIGFycmF5ID09IFwic3ltYm9sXCJcblx0XHQpe1xuXHRcdFx0cmV0dXJuIGNlbWVudG8oIHtcblx0XHRcdFx0XCJBUlJBWVwiOiBmYWxzZSxcblx0XHRcdFx0XCJBU19BUlJBWVwiOiBmYWxzZSxcblx0XHRcdFx0XCJBUkdVTUVOVFNcIjogZmFsc2UsXG5cdFx0XHRcdFwiQVJSQVlfTElLRVwiOiBmYWxzZSxcblx0XHRcdFx0XCJJVEVSQUJMRVwiOiBmYWxzZVxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBjZW1lbnRvKCB7XG5cdFx0XHRcIkFSUkFZXCI6IGRvdWJ0KCBhcnJheSwgQVJSQVkgKSxcblx0XHRcdFwiQVNfQVJSQVlcIjogZG91YnQoIGFycmF5LCBBU19BUlJBWSApLFxuXHRcdFx0XCJBUkdVTUVOVFNcIjogZG91YnQoIGFycmF5LCBBUkdVTUVOVFMgKSxcblx0XHRcdFwiQVJSQVlfTElLRVwiOiBkb3VidCggYXJyYXksIEFSUkFZX0xJS0UgKSxcblx0XHRcdFwiSVRFUkFCTEVcIjogZG91YnQoIGFycmF5LCBJVEVSQUJMRSApXG5cdFx0fSApO1xuXG5cdH1lbHNle1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHBhcmFtZXRlclwiICk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZG91YnQ7XG4iXX0=
//# sourceMappingURL=doubt.support.js.map
