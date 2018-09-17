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
              			"package": "sxty4",
              			"path": "sxty4/sxty4.js",
              			"file": "sxty4.js",
              			"module": "sxty4",
              			"author": "Richeve S. Bebedor",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon"
              			],
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/sxty4.git",
              			"test": "test.module.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Base 64 string encoding and decoding with url safety.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"harden": "harden"
              		}
              	@end-include
              */

var falzy = require("falzy");
var harden = require("harden");



//: @client:
var Base64 = require("./base64.support.js");
//: @end-client

var sxty4 = function sxty4(data) {
	/*;
                                  	@meta-configuration:
                                  		{
                                  			"data:required": "string"
                                  		}
                                  	@end-meta-configuration
                                  */

	if (falzy(data) || typeof data != "string") {
		throw new Error("invalid data");
	}

	return new Base64(data);
};

harden("Base64", Base64, sxty4);

module.exports = sxty4;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN4dHk0LnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZmFsenkiLCJyZXF1aXJlIiwiaGFyZGVuIiwiQmFzZTY0Iiwic3h0eTQiLCJkYXRhIiwiRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeURBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1FLFNBQVNGLFFBQVMscUJBQVQsQ0FBZjtBQUNBOztBQUVBLElBQU1HLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsSUFBaEIsRUFBc0I7QUFDbkM7Ozs7Ozs7O0FBUUEsS0FBSUwsTUFBT0ssSUFBUCxLQUFpQixPQUFPQSxJQUFQLElBQWUsUUFBcEMsRUFBOEM7QUFDN0MsUUFBTSxJQUFJQyxLQUFKLENBQVcsY0FBWCxDQUFOO0FBQ0E7O0FBRUQsUUFBUyxJQUFJSCxNQUFKLENBQVlFLElBQVosQ0FBVDtBQUNBLENBZEQ7O0FBZ0JBSCxPQUFRLFFBQVIsRUFBa0JDLE1BQWxCLEVBQTBCQyxLQUExQjs7QUFFQUcsT0FBT0MsT0FBUCxHQUFpQkosS0FBakIiLCJmaWxlIjoic3h0eTQuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwic3h0eTRcIixcblx0XHRcdFwicGF0aFwiOiBcInN4dHk0L3N4dHk0LmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJzeHR5NC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJzeHR5NFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvblwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9zeHR5NC5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEJhc2UgNjQgc3RyaW5nIGVuY29kaW5nIGFuZCBkZWNvZGluZyB3aXRoIHVybCBzYWZldHkuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgQmFzZTY0ID0gcmVxdWlyZSggXCIuL2Jhc2U2NC5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5jb25zdCBzeHR5NCA9IGZ1bmN0aW9uIHN4dHk0KCBkYXRhICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZGF0YTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggZmFsenkoIGRhdGEgKSB8fCB0eXBlb2YgZGF0YSAhPSBcInN0cmluZ1wiICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZGF0YVwiICk7XG5cdH1cblxuXHRyZXR1cm4gKCBuZXcgQmFzZTY0KCBkYXRhICkgKTtcbn07XG5cbmhhcmRlbiggXCJCYXNlNjRcIiwgQmFzZTY0LCBzeHR5NCApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN4dHk0O1xuIl19
//# sourceMappingURL=sxty4.support.js.map
