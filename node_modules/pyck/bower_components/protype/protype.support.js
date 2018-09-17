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
              			"package": "protype",
              			"path": "protype/protype.js",
              			"file": "protype.js",
              			"module": "protype",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/protype.git",
              			"test": "protype-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Determine type of property.
              
              		Passing multiple type will do try to match any one of it.
              
              		Passing appended type will do negated evaluation.
              			It should not pass all type given.
              	@end-module-documentation
              
              	@include:
              		{
              			"cemento": "cemento",
              			"harden": "harden"
              		}
              	@end-include
              */var _from = require("babel-runtime/core-js/array/from");var _from2 = _interopRequireDefault(_from);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var cemento = require("cemento");
var harden = require("harden");

harden("STRING", "string");
harden("NUMBER", "number");
harden("BOOLEAN", "boolean");
harden("FUNCTION", "function");
harden("OBJECT", "object");
harden("UNDEFINED", "undefined");
harden("SYMBOL", "symbol");

var TYPE_LIST = [
STRING,
NUMBER,
BOOLEAN,
FUNCTION,
OBJECT,
UNDEFINED,
SYMBOL];


/*;
         	@note:
         		This will let us determine if we can match using AND condition.
         
         		Since a value cannot be of both type, this will be used for reversed negated evaluation.
         	@end-note
         */
var STRICT_TYPE_PATTERN = new RegExp("^(" + TYPE_LIST.join("|") + "){2,}$");
var TYPE_PATTERN = new RegExp("(" + TYPE_LIST.join("|") + ")(?!.*\\1)", "g");

var protype = function protype(property, type) {
	/*;
                                                	@meta-configuration:
                                                		{
                                                			"property:required": "*",
                                                			"type": [
                                                				"string",
                                                				STRING,
                                                				NUMBER,
                                                				BOOLEAN,
                                                				FUNCTION,
                                                				OBJECT,
                                                				UNDEFINED,
                                                				SYMBOL,
                                                				"...",
                                                				Array
                                                			]
                                                		}
                                                	@end-meta-configuration
                                                */

	if (
	type != "" &&
	typeof type == "string" &&
	STRICT_TYPE_PATTERN.test(type))
	{
		type = type.match(TYPE_PATTERN) || [];

		if (type.length > 1) {
			/*;
                        	@note:
                        		This is a reversed negated feature.
                        	@end-note
                        */
			return !type.every(function (type) {return (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) != type;});

		} else {
			return false;
		}
	}

	if (
	arguments.length > 1 &&
	type !== STRING &&
	type !== NUMBER &&
	type !== BOOLEAN &&
	type !== FUNCTION &&
	type !== OBJECT &&
	type !== UNDEFINED &&
	type !== SYMBOL)
	{
		return false;
	}

	if (type) {
		if (arguments.length == 2) {
			if (typeof type != "string") {
				return false;
			}

			return (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == type;
		}

		return (
			((0, _from2.default)(arguments).
			splice(1).join("").
			replace(/\[|\]|\s+|\,/g, "").
			match(TYPE_PATTERN) || []).
			some(function (type) {return (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == type;}));


	} else {
		return cemento({
			"STRING": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == STRING,
			"NUMBER": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == NUMBER,
			"BOOLEAN": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == BOOLEAN,
			"FUNCTION": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == FUNCTION,
			"OBJECT": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == OBJECT,
			"UNDEFINED": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == UNDEFINED,
			"SYMBOL": (typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property)) == SYMBOL,
			"type": typeof property === "undefined" ? "undefined" : (0, _typeof3.default)(property) });

	}
};

module.exports = protype;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3R5cGUuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJjZW1lbnRvIiwicmVxdWlyZSIsImhhcmRlbiIsIlRZUEVfTElTVCIsIlNUUklORyIsIk5VTUJFUiIsIkJPT0xFQU4iLCJGVU5DVElPTiIsIk9CSkVDVCIsIlVOREVGSU5FRCIsIlNZTUJPTCIsIlNUUklDVF9UWVBFX1BBVFRFUk4iLCJSZWdFeHAiLCJqb2luIiwiVFlQRV9QQVRURVJOIiwicHJvdHlwZSIsInByb3BlcnR5IiwidHlwZSIsInRlc3QiLCJtYXRjaCIsImxlbmd0aCIsImV2ZXJ5IiwiYXJndW1lbnRzIiwic3BsaWNlIiwicmVwbGFjZSIsInNvbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4REEsSUFBTUEsVUFBVUMsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxRQUFULENBQWY7O0FBRUFDLE9BQVEsUUFBUixFQUFrQixRQUFsQjtBQUNBQSxPQUFRLFFBQVIsRUFBa0IsUUFBbEI7QUFDQUEsT0FBUSxTQUFSLEVBQW1CLFNBQW5CO0FBQ0FBLE9BQVEsVUFBUixFQUFvQixVQUFwQjtBQUNBQSxPQUFRLFFBQVIsRUFBa0IsUUFBbEI7QUFDQUEsT0FBUSxXQUFSLEVBQXFCLFdBQXJCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixRQUFsQjs7QUFFQSxJQUFNQyxZQUFZO0FBQ2pCQyxNQURpQjtBQUVqQkMsTUFGaUI7QUFHakJDLE9BSGlCO0FBSWpCQyxRQUppQjtBQUtqQkMsTUFMaUI7QUFNakJDLFNBTmlCO0FBT2pCQyxNQVBpQixDQUFsQjs7O0FBVUE7Ozs7Ozs7QUFPQSxJQUFNQyxzQkFBc0IsSUFBSUMsTUFBSixRQUFrQlQsVUFBVVUsSUFBVixDQUFnQixHQUFoQixDQUFsQixZQUE1QjtBQUNBLElBQU1DLGVBQWUsSUFBSUYsTUFBSixPQUFpQlQsVUFBVVUsSUFBVixDQUFnQixHQUFoQixDQUFqQixpQkFBcUQsR0FBckQsQ0FBckI7O0FBRUEsSUFBTUUsVUFBVSxTQUFTQSxPQUFULENBQWtCQyxRQUFsQixFQUE0QkMsSUFBNUIsRUFBa0M7QUFDakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0NBLFNBQVEsRUFBUjtBQUNHLFFBQU9BLElBQVAsSUFBZSxRQURsQjtBQUVHTixxQkFBb0JPLElBQXBCLENBQTBCRCxJQUExQixDQUhKO0FBSUM7QUFDQUEsU0FBT0EsS0FBS0UsS0FBTCxDQUFZTCxZQUFaLEtBQThCLEVBQXJDOztBQUVBLE1BQUlHLEtBQUtHLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNwQjs7Ozs7QUFLQSxVQUFPLENBQUNILEtBQUtJLEtBQUwsQ0FBWSxVQUFFSixJQUFGLFVBQWMsUUFBT0QsUUFBUCx1REFBT0EsUUFBUCxNQUFtQkMsSUFBakMsRUFBWixDQUFSOztBQUVBLEdBUkQsTUFRSztBQUNKLFVBQU8sS0FBUDtBQUNBO0FBQ0Q7O0FBRUQ7QUFDQ0ssV0FBVUYsTUFBVixHQUFtQixDQUFuQjtBQUNHSCxVQUFTYixNQURaO0FBRUdhLFVBQVNaLE1BRlo7QUFHR1ksVUFBU1gsT0FIWjtBQUlHVyxVQUFTVixRQUpaO0FBS0dVLFVBQVNULE1BTFo7QUFNR1MsVUFBU1IsU0FOWjtBQU9HUSxVQUFTUCxNQVJiO0FBU0M7QUFDQSxTQUFPLEtBQVA7QUFDQTs7QUFFRCxLQUFJTyxJQUFKLEVBQVU7QUFDVCxNQUFJSyxVQUFVRixNQUFWLElBQW9CLENBQXhCLEVBQTJCO0FBQzFCLE9BQUksT0FBT0gsSUFBUCxJQUFlLFFBQW5CLEVBQTZCO0FBQzVCLFdBQU8sS0FBUDtBQUNBOztBQUVELFVBQU8sUUFBT0QsUUFBUCx1REFBT0EsUUFBUCxNQUFtQkMsSUFBMUI7QUFDQTs7QUFFRDtBQUNDLElBQUUsb0JBQVlLLFNBQVo7QUFDQUMsU0FEQSxDQUNRLENBRFIsRUFDWVYsSUFEWixDQUNrQixFQURsQjtBQUVBVyxVQUZBLENBRVMsZUFGVCxFQUUwQixFQUYxQjtBQUdBTCxRQUhBLENBR09MLFlBSFAsS0FHeUIsRUFIM0I7QUFJRVcsT0FKRixDQUlRLFVBQUVSLElBQUYsVUFBYyxRQUFPRCxRQUFQLHVEQUFPQSxRQUFQLE1BQW1CQyxJQUFqQyxFQUpSLENBREQ7OztBQVFBLEVBakJELE1BaUJLO0FBQ0osU0FBT2pCLFFBQVM7QUFDZixhQUFZLFFBQU9nQixRQUFQLHVEQUFPQSxRQUFQLE1BQW1CWixNQURoQjtBQUVmLGFBQVksUUFBT1ksUUFBUCx1REFBT0EsUUFBUCxNQUFtQlgsTUFGaEI7QUFHZixjQUFhLFFBQU9XLFFBQVAsdURBQU9BLFFBQVAsTUFBbUJWLE9BSGpCO0FBSWYsZUFBYyxRQUFPVSxRQUFQLHVEQUFPQSxRQUFQLE1BQW1CVCxRQUpsQjtBQUtmLGFBQVksUUFBT1MsUUFBUCx1REFBT0EsUUFBUCxNQUFtQlIsTUFMaEI7QUFNZixnQkFBZSxRQUFPUSxRQUFQLHVEQUFPQSxRQUFQLE1BQW1CUCxTQU5uQjtBQU9mLGFBQVksUUFBT08sUUFBUCx1REFBT0EsUUFBUCxNQUFtQk4sTUFQaEI7QUFRZixrQkFBaUJNLFFBQWpCLHVEQUFpQkEsUUFBakIsQ0FSZSxFQUFULENBQVA7O0FBVUE7QUFDRCxDQW5GRDs7QUFxRkFVLE9BQU9DLE9BQVAsR0FBaUJaLE9BQWpCIiwiZmlsZSI6InByb3R5cGUuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwicHJvdHlwZS9wcm90eXBlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJwcm90eXBlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3Byb3R5cGUuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJwcm90eXBlLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RGV0ZXJtaW5lIHR5cGUgb2YgcHJvcGVydHkuXG5cblx0XHRQYXNzaW5nIG11bHRpcGxlIHR5cGUgd2lsbCBkbyB0cnkgdG8gbWF0Y2ggYW55IG9uZSBvZiBpdC5cblxuXHRcdFBhc3NpbmcgYXBwZW5kZWQgdHlwZSB3aWxsIGRvIG5lZ2F0ZWQgZXZhbHVhdGlvbi5cblx0XHRcdEl0IHNob3VsZCBub3QgcGFzcyBhbGwgdHlwZSBnaXZlbi5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiY2VtZW50b1wiOiBcImNlbWVudG9cIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgY2VtZW50byA9IHJlcXVpcmUoIFwiY2VtZW50b1wiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5cbmhhcmRlbiggXCJTVFJJTkdcIiwgXCJzdHJpbmdcIiApO1xuaGFyZGVuKCBcIk5VTUJFUlwiLCBcIm51bWJlclwiICk7XG5oYXJkZW4oIFwiQk9PTEVBTlwiLCBcImJvb2xlYW5cIiApO1xuaGFyZGVuKCBcIkZVTkNUSU9OXCIsIFwiZnVuY3Rpb25cIiApO1xuaGFyZGVuKCBcIk9CSkVDVFwiLCBcIm9iamVjdFwiICk7XG5oYXJkZW4oIFwiVU5ERUZJTkVEXCIsIFwidW5kZWZpbmVkXCIgKTtcbmhhcmRlbiggXCJTWU1CT0xcIiwgXCJzeW1ib2xcIiApO1xuXG5jb25zdCBUWVBFX0xJU1QgPSBbXG5cdFNUUklORyxcblx0TlVNQkVSLFxuXHRCT09MRUFOLFxuXHRGVU5DVElPTixcblx0T0JKRUNULFxuXHRVTkRFRklORUQsXG5cdFNZTUJPTFxuXTtcblxuLyo7XG5cdEBub3RlOlxuXHRcdFRoaXMgd2lsbCBsZXQgdXMgZGV0ZXJtaW5lIGlmIHdlIGNhbiBtYXRjaCB1c2luZyBBTkQgY29uZGl0aW9uLlxuXG5cdFx0U2luY2UgYSB2YWx1ZSBjYW5ub3QgYmUgb2YgYm90aCB0eXBlLCB0aGlzIHdpbGwgYmUgdXNlZCBmb3IgcmV2ZXJzZWQgbmVnYXRlZCBldmFsdWF0aW9uLlxuXHRAZW5kLW5vdGVcbiovXG5jb25zdCBTVFJJQ1RfVFlQRV9QQVRURVJOID0gbmV3IFJlZ0V4cCggYF4oJHsgVFlQRV9MSVNULmpvaW4oIFwifFwiICkgfSl7Mix9JGAgKTtcbmNvbnN0IFRZUEVfUEFUVEVSTiA9IG5ldyBSZWdFeHAoIGAoJHsgVFlQRV9MSVNULmpvaW4oIFwifFwiICkgfSkoPyEuKlxcXFwxKWAsIFwiZ1wiICk7XG5cbmNvbnN0IHByb3R5cGUgPSBmdW5jdGlvbiBwcm90eXBlKCBwcm9wZXJ0eSwgdHlwZSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcInR5cGVcIjogW1xuXHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0U1RSSU5HLFxuXHRcdFx0XHRcdE5VTUJFUixcblx0XHRcdFx0XHRCT09MRUFOLFxuXHRcdFx0XHRcdEZVTkNUSU9OLFxuXHRcdFx0XHRcdE9CSkVDVCxcblx0XHRcdFx0XHRVTkRFRklORUQsXG5cdFx0XHRcdFx0U1lNQk9MLFxuXHRcdFx0XHRcdFwiLi4uXCIsXG5cdFx0XHRcdFx0QXJyYXlcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoXG5cdFx0dHlwZSAhPSBcIlwiXG5cdFx0JiYgdHlwZW9mIHR5cGUgPT0gXCJzdHJpbmdcIlxuXHRcdCYmIFNUUklDVF9UWVBFX1BBVFRFUk4udGVzdCggdHlwZSApXG5cdCl7XG5cdFx0dHlwZSA9IHR5cGUubWF0Y2goIFRZUEVfUEFUVEVSTiApIHx8IFsgXTtcblxuXHRcdGlmKCB0eXBlLmxlbmd0aCA+IDEgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbm90ZTpcblx0XHRcdFx0XHRUaGlzIGlzIGEgcmV2ZXJzZWQgbmVnYXRlZCBmZWF0dXJlLlxuXHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdCovXG5cdFx0XHRyZXR1cm4gIXR5cGUuZXZlcnkoICggdHlwZSApID0+ICggdHlwZW9mIHByb3BlcnR5ICE9IHR5cGUgKSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0aWYoXG5cdFx0YXJndW1lbnRzLmxlbmd0aCA+IDFcblx0XHQmJiB0eXBlICE9PSBTVFJJTkdcblx0XHQmJiB0eXBlICE9PSBOVU1CRVJcblx0XHQmJiB0eXBlICE9PSBCT09MRUFOXG5cdFx0JiYgdHlwZSAhPT0gRlVOQ1RJT05cblx0XHQmJiB0eXBlICE9PSBPQkpFQ1Rcblx0XHQmJiB0eXBlICE9PSBVTkRFRklORURcblx0XHQmJiB0eXBlICE9PSBTWU1CT0xcblx0KXtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpZiggdHlwZSApe1xuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDIgKXtcblx0XHRcdGlmKCB0eXBlb2YgdHlwZSAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHR5cGVvZiBwcm9wZXJ0eSA9PSB0eXBlO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQoIEFycmF5LmZyb20oIGFyZ3VtZW50cyApXG5cdFx0XHRcdC5zcGxpY2UoIDEgKS5qb2luKCBcIlwiIClcblx0XHRcdFx0LnJlcGxhY2UoIC9cXFt8XFxdfFxccyt8XFwsL2csIFwiXCIgKVxuXHRcdFx0XHQubWF0Y2goIFRZUEVfUEFUVEVSTiApIHx8IFsgXSApXG5cdFx0XHRcdC5zb21lKCAoIHR5cGUgKSA9PiAoIHR5cGVvZiBwcm9wZXJ0eSA9PSB0eXBlICkgKVxuXHRcdCk7XG5cblx0fWVsc2V7XG5cdFx0cmV0dXJuIGNlbWVudG8oIHtcblx0XHRcdFwiU1RSSU5HXCI6ICggdHlwZW9mIHByb3BlcnR5ID09IFNUUklORyApLFxuXHRcdFx0XCJOVU1CRVJcIjogKCB0eXBlb2YgcHJvcGVydHkgPT0gTlVNQkVSICksXG5cdFx0XHRcIkJPT0xFQU5cIjogKCB0eXBlb2YgcHJvcGVydHkgPT0gQk9PTEVBTiApLFxuXHRcdFx0XCJGVU5DVElPTlwiOiAoIHR5cGVvZiBwcm9wZXJ0eSA9PSBGVU5DVElPTiApLFxuXHRcdFx0XCJPQkpFQ1RcIjogKCB0eXBlb2YgcHJvcGVydHkgPT0gT0JKRUNUICksXG5cdFx0XHRcIlVOREVGSU5FRFwiOiAoIHR5cGVvZiBwcm9wZXJ0eSA9PSBVTkRFRklORUQgKSxcblx0XHRcdFwiU1lNQk9MXCI6ICggdHlwZW9mIHByb3BlcnR5ID09IFNZTUJPTCApLFxuXHRcdFx0XCJ0eXBlXCI6ICggdHlwZW9mIHByb3BlcnR5IClcblx0XHR9ICk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvdHlwZTtcbiJdfQ==
//# sourceMappingURL=protype.support.js.map
