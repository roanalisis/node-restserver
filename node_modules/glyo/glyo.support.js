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
              			"package": "glyo",
              			"path": "glyo/glyo.js",
              			"file": "glyo.js",
              			"module": "glyo",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/glyo.git",
              			"test": "glyo-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Symbol object class wrapper.
              	@end-module-documentation
              
              	@include:
              		{
              			"ehm": "ehm",
              			"harden": "harden"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var harden = require("harden");

var Meta = require("ehm")();



//: @client:
var Glyph = require("./glyph.support.js");
//: @end-client

var glyo = function glyo(entity) {
	/*;
                                  	@meta-configuration:
                                  		{
                                  			"entity:required": [
                                  				"symbol",
                                  				"string"
                                  			]
                                  		}
                                  	@end-meta-configuration
                                  */

	if (typeof entity == "string" && entity.length > 0) {
		entity = (0, _symbol2.default)(entity);
	}

	if ((typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) != "symbol") {
		throw new Error("invalid symbol entity");
	}

	return Meta.create(Glyph, entity);
};

harden("Glyph", Glyph, glyo);
harden("Glyph", Glyph, Meta);

module.exports = glyo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdseW8uc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwiTWV0YSIsIkdseXBoIiwiZ2x5byIsImVudGl0eSIsImxlbmd0aCIsIkVycm9yIiwiY3JlYXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFTLEtBQVQsR0FBYjs7OztBQUlBO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxvQkFBVCxDQUFkO0FBQ0E7O0FBRUEsSUFBTUcsT0FBTyxTQUFTQSxJQUFULENBQWVDLE1BQWYsRUFBdUI7QUFDbkM7Ozs7Ozs7Ozs7O0FBV0EsS0FBSSxPQUFPQSxNQUFQLElBQWlCLFFBQWpCLElBQTZCQSxPQUFPQyxNQUFQLEdBQWdCLENBQWpELEVBQW9EO0FBQ25ERCxXQUFTLHNCQUFRQSxNQUFSLENBQVQ7QUFDQTs7QUFFRCxLQUFJLFFBQU9BLE1BQVAsdURBQU9BLE1BQVAsTUFBaUIsUUFBckIsRUFBK0I7QUFDOUIsUUFBTSxJQUFJRSxLQUFKLENBQVcsdUJBQVgsQ0FBTjtBQUNBOztBQUVELFFBQU9MLEtBQUtNLE1BQUwsQ0FBYUwsS0FBYixFQUFvQkUsTUFBcEIsQ0FBUDtBQUNBLENBckJEOztBQXVCQUwsT0FBUSxPQUFSLEVBQWlCRyxLQUFqQixFQUF3QkMsSUFBeEI7QUFDQUosT0FBUSxPQUFSLEVBQWlCRyxLQUFqQixFQUF3QkQsSUFBeEI7O0FBRUFPLE9BQU9DLE9BQVAsR0FBaUJOLElBQWpCIiwiZmlsZSI6ImdseW8uc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZ2x5b1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZ2x5by9nbHlvLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJnbHlvLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImdseW9cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2dseW8uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJnbHlvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0U3ltYm9sIG9iamVjdCBjbGFzcyB3cmFwcGVyLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJlaG1cIjogXCJlaG1cIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuXG5jb25zdCBNZXRhID0gcmVxdWlyZSggXCJlaG1cIiApKCApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBHbHlwaCA9IHJlcXVpcmUoIFwiLi9nbHlwaC5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5jb25zdCBnbHlvID0gZnVuY3Rpb24gZ2x5byggZW50aXR5ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcInN5bWJvbFwiLFxuXHRcdFx0XHRcdFwic3RyaW5nXCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHR5cGVvZiBlbnRpdHkgPT0gXCJzdHJpbmdcIiAmJiBlbnRpdHkubGVuZ3RoID4gMCApe1xuXHRcdGVudGl0eSA9IFN5bWJvbCggZW50aXR5ICk7XG5cdH1cblxuXHRpZiggdHlwZW9mIGVudGl0eSAhPSBcInN5bWJvbFwiICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgc3ltYm9sIGVudGl0eVwiICk7XG5cdH1cblxuXHRyZXR1cm4gTWV0YS5jcmVhdGUoIEdseXBoLCBlbnRpdHkgKTtcbn07XG5cbmhhcmRlbiggXCJHbHlwaFwiLCBHbHlwaCwgZ2x5byApO1xuaGFyZGVuKCBcIkdseXBoXCIsIEdseXBoLCBNZXRhICk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2x5bztcbiJdfQ==
//# sourceMappingURL=glyo.support.js.map
