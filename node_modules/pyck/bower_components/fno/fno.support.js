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
              			"package": "fno",
              			"path": "fno/fno.js",
              			"file": "fno.js",
              			"module": "fno",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/fno.git",
              			"test": "fno-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              	 	Function object class wrapper.
              	@end-module-documentation
              
              	@include:
              		{
              			"ehm": "ehm",
              			"harden": "harden"
              		}
              	@end-include
              */

var harden = require("harden");

var Meta = require("ehm")();



//: @client:
var Procedure = require("./procedure.support.js");
//: @end-client

var fno = function fno(entity) {
	/*;
                                	@meta-configuration:
                                		{
                                			"entity:required": "function"
                                		}
                                	@end-meta-configuration
                                */

	if (
	typeof entity != "function" ||
	!(entity instanceof Function))
	{
		throw new Error("invalid function entity");
	}

	return Meta.create(Procedure, entity);
};

harden("Procedure", Procedure, fno);
harden("Procedure", Procedure, Meta);

module.exports = fno;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZuby5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImhhcmRlbiIsInJlcXVpcmUiLCJNZXRhIiwiUHJvY2VkdXJlIiwiZm5vIiwiZW50aXR5IiwiRnVuY3Rpb24iLCJFcnJvciIsImNyZWF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFTLEtBQVQsR0FBYjs7OztBQUlBO0FBQ0EsSUFBTUUsWUFBWUYsUUFBUyx3QkFBVCxDQUFsQjtBQUNBOztBQUVBLElBQU1HLE1BQU0sU0FBU0EsR0FBVCxDQUFjQyxNQUFkLEVBQXNCO0FBQ2pDOzs7Ozs7OztBQVFBO0FBQ0MsUUFBT0EsTUFBUCxJQUFpQixVQUFqQjtBQUNHLEdBQUdBLGtCQUFrQkMsUUFBckIsQ0FGSjtBQUdDO0FBQ0EsUUFBTSxJQUFJQyxLQUFKLENBQVcseUJBQVgsQ0FBTjtBQUNBOztBQUVELFFBQU9MLEtBQUtNLE1BQUwsQ0FBYUwsU0FBYixFQUF3QkUsTUFBeEIsQ0FBUDtBQUNBLENBakJEOztBQW1CQUwsT0FBUSxXQUFSLEVBQXFCRyxTQUFyQixFQUFnQ0MsR0FBaEM7QUFDQUosT0FBUSxXQUFSLEVBQXFCRyxTQUFyQixFQUFnQ0QsSUFBaEM7O0FBRUFPLE9BQU9DLE9BQVAsR0FBaUJOLEdBQWpCIiwiZmlsZSI6ImZuby5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJmbm9cIixcblx0XHRcdFwicGF0aFwiOiBcImZuby9mbm8uanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImZuby5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJmbm9cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9mbm8uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJmbm8tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0IFx0RnVuY3Rpb24gb2JqZWN0IGNsYXNzIHdyYXBwZXIuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImVobVwiOiBcImVobVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5cbmNvbnN0IE1ldGEgPSByZXF1aXJlKCBcImVobVwiICkoICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IFByb2NlZHVyZSA9IHJlcXVpcmUoIFwiLi9wcm9jZWR1cmUuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuY29uc3QgZm5vID0gZnVuY3Rpb24gZm5vKCBlbnRpdHkgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZihcblx0XHR0eXBlb2YgZW50aXR5ICE9IFwiZnVuY3Rpb25cIlxuXHRcdHx8ICEoIGVudGl0eSBpbnN0YW5jZW9mIEZ1bmN0aW9uIClcblx0KXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBmdW5jdGlvbiBlbnRpdHlcIiApO1xuXHR9XG5cblx0cmV0dXJuIE1ldGEuY3JlYXRlKCBQcm9jZWR1cmUsIGVudGl0eSApO1xufTtcblxuaGFyZGVuKCBcIlByb2NlZHVyZVwiLCBQcm9jZWR1cmUsIGZubyApO1xuaGFyZGVuKCBcIlByb2NlZHVyZVwiLCBQcm9jZWR1cmUsIE1ldGEgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmbm87XG4iXX0=
//# sourceMappingURL=fno.support.js.map
