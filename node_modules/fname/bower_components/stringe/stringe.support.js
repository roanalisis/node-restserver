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
              			"package": "stringe",
              			"path": "stringe/stringe.js",
              			"file": "stringe.js",
              			"module": "stringe",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/stringe.git",
              			"test": "stringe-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Safe toString alternative.
              	@end-module-documentation
              */var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);var _stringify = require("babel-runtime/core-js/json/stringify");var _stringify2 = _interopRequireDefault(_stringify);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var TO_STRING = "toString";

var stringe = function stringe(entity) {
	/*;
                                        	@meta-configuration:
                                        		{
                                        			"entity:required": "*"
                                        		}
                                        	@end-meta-configuration
                                        */

	if (typeof entity == "string") {
		return entity;
	}

	var issue = [];
	try {
		if (typeof entity == "undefined" || entity === null ||
		typeof entity[TO_STRING] != "function")
		{
			return "" + entity;
		}

	} catch (error) {issue.push(error.stack);}

	try {
		if (entity[TO_STRING] && typeof entity[TO_STRING] == "function") {
			return entity.toString();
		}

	} catch (error) {issue.push(error.stack);}

	try {
		return (0, _stringify2.default)((0, _getOwnPropertyNames2.default)(entity).
		reduce(function (cache, property) {
			cache[property] = stringe(entity[property]);

			return cache;
		}, {}));

	} catch (error) {issue.push(error.stack);}

	try {
		return "" + entity;

	} catch (error) {
		issue.push(error.stack);

		throw new Error("fatal, cannot transform to string, " + issue.join(","));
	}
};

module.exports = stringe;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZ2Uuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJUT19TVFJJTkciLCJzdHJpbmdlIiwiZW50aXR5IiwiaXNzdWUiLCJlcnJvciIsInB1c2giLCJzdGFjayIsInRvU3RyaW5nIiwicmVkdWNlIiwiY2FjaGUiLCJwcm9wZXJ0eSIsIkVycm9yIiwiam9pbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtEQSxJQUFNQSxZQUFZLFVBQWxCOztBQUVBLElBQU1DLFVBQVUsU0FBU0EsT0FBVCxDQUFrQkMsTUFBbEIsRUFBMEI7QUFDekM7Ozs7Ozs7O0FBUUEsS0FBSSxPQUFPQSxNQUFQLElBQWlCLFFBQXJCLEVBQStCO0FBQzlCLFNBQU9BLE1BQVA7QUFDQTs7QUFFRCxLQUFJQyxRQUFRLEVBQVo7QUFDQSxLQUFHO0FBQ0YsTUFBSSxPQUFPRCxNQUFQLElBQWlCLFdBQWpCLElBQWdDQSxXQUFXLElBQTNDO0FBQ0gsU0FBT0EsT0FBUUYsU0FBUixDQUFQLElBQThCLFVBRC9CO0FBRUE7QUFDQyxlQUFXRSxNQUFYO0FBQ0E7O0FBRUQsRUFQRCxDQU9DLE9BQU9FLEtBQVAsRUFBYyxDQUFFRCxNQUFNRSxJQUFOLENBQVlELE1BQU1FLEtBQWxCLEVBQTRCOztBQUU3QyxLQUFHO0FBQ0YsTUFBSUosT0FBUUYsU0FBUixLQUF5QixPQUFPRSxPQUFRRixTQUFSLENBQVAsSUFBOEIsVUFBM0QsRUFBeUU7QUFDeEUsVUFBT0UsT0FBT0ssUUFBUCxFQUFQO0FBQ0E7O0FBRUQsRUFMRCxDQUtDLE9BQU9ILEtBQVAsRUFBYyxDQUFFRCxNQUFNRSxJQUFOLENBQVlELE1BQU1FLEtBQWxCLEVBQTRCOztBQUU3QyxLQUFHO0FBQ0YsU0FBTyx5QkFBZ0IsbUNBQTRCSixNQUE1QjtBQUNyQk0sUUFEcUIsQ0FDYixVQUFFQyxLQUFGLEVBQVNDLFFBQVQsRUFBdUI7QUFDL0JELFNBQU9DLFFBQVAsSUFBb0JULFFBQVNDLE9BQVFRLFFBQVIsQ0FBVCxDQUFwQjs7QUFFQSxVQUFPRCxLQUFQO0FBQ0EsR0FMcUIsRUFLbkIsRUFMbUIsQ0FBaEIsQ0FBUDs7QUFPQSxFQVJELENBUUMsT0FBT0wsS0FBUCxFQUFjLENBQUVELE1BQU1FLElBQU4sQ0FBWUQsTUFBTUUsS0FBbEIsRUFBNEI7O0FBRTdDLEtBQUc7QUFDRixjQUFXSixNQUFYOztBQUVBLEVBSEQsQ0FHQyxPQUFPRSxLQUFQLEVBQWM7QUFDZEQsUUFBTUUsSUFBTixDQUFZRCxNQUFNRSxLQUFsQjs7QUFFQSxRQUFNLElBQUlLLEtBQUoseUNBQWtEUixNQUFNUyxJQUFOLENBQVksR0FBWixDQUFsRCxDQUFOO0FBQ0E7QUFDRCxDQWhERDs7QUFrREFDLE9BQU9DLE9BQVAsR0FBaUJiLE9BQWpCIiwiZmlsZSI6InN0cmluZ2Uuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwic3RyaW5nZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwic3RyaW5nZS9zdHJpbmdlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJzdHJpbmdlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInN0cmluZ2VcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3N0cmluZ2UuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJzdHJpbmdlLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0U2FmZSB0b1N0cmluZyBhbHRlcm5hdGl2ZS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuKi9cblxuY29uc3QgVE9fU1RSSU5HID0gXCJ0b1N0cmluZ1wiO1xuXG5jb25zdCBzdHJpbmdlID0gZnVuY3Rpb24gc3RyaW5nZSggZW50aXR5ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggdHlwZW9mIGVudGl0eSA9PSBcInN0cmluZ1wiICl7XG5cdFx0cmV0dXJuIGVudGl0eTtcblx0fVxuXG5cdGxldCBpc3N1ZSA9IFsgXTtcblx0dHJ5e1xuXHRcdGlmKCB0eXBlb2YgZW50aXR5ID09IFwidW5kZWZpbmVkXCIgfHwgZW50aXR5ID09PSBudWxsIHx8XG5cdFx0XHR0eXBlb2YgZW50aXR5WyBUT19TVFJJTkcgXSAhPSBcImZ1bmN0aW9uXCIgKVxuXHRcdHtcblx0XHRcdHJldHVybiBgJHsgZW50aXR5IH1gO1xuXHRcdH1cblxuXHR9Y2F0Y2goIGVycm9yICl7IGlzc3VlLnB1c2goIGVycm9yLnN0YWNrICk7IH1cblxuXHR0cnl7XG5cdFx0aWYoIGVudGl0eVsgVE9fU1RSSU5HIF0gJiYgKCB0eXBlb2YgZW50aXR5WyBUT19TVFJJTkcgXSA9PSBcImZ1bmN0aW9uXCIgKSApe1xuXHRcdFx0cmV0dXJuIGVudGl0eS50b1N0cmluZyggKTtcblx0XHR9XG5cblx0fWNhdGNoKCBlcnJvciApeyBpc3N1ZS5wdXNoKCBlcnJvci5zdGFjayApOyB9XG5cblx0dHJ5e1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoIGVudGl0eSApXG5cdFx0XHQucmVkdWNlKCAoIGNhY2hlLCBwcm9wZXJ0eSApID0+IHtcblx0XHRcdFx0Y2FjaGVbIHByb3BlcnR5IF0gPSBzdHJpbmdlKCBlbnRpdHlbIHByb3BlcnR5IF0gKTtcblxuXHRcdFx0XHRyZXR1cm4gY2FjaGU7XG5cdFx0XHR9LCB7IH0gKSApO1xuXG5cdH1jYXRjaCggZXJyb3IgKXsgaXNzdWUucHVzaCggZXJyb3Iuc3RhY2sgKTsgfVxuXG5cdHRyeXtcblx0XHRyZXR1cm4gYCR7IGVudGl0eSB9YDtcblxuXHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0aXNzdWUucHVzaCggZXJyb3Iuc3RhY2sgKTtcblxuXHRcdHRocm93IG5ldyBFcnJvciggYGZhdGFsLCBjYW5ub3QgdHJhbnNmb3JtIHRvIHN0cmluZywgJHsgaXNzdWUuam9pbiggXCIsXCIgKSB9YCApXG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nZTtcbiJdfQ==
//# sourceMappingURL=stringe.support.js.map
