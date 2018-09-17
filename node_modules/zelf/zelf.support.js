"use strict"; /*;
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
              			"package": "zelf",
              			"path": "zelf/zelf.js",
              			"file": "zelf.js",
              			"module": "zelf",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/zelf.git",
              			"test": "zelf-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Returns window for client, global for server and if nothing match, return itself.
              	@end-module-documentation
              
              	@include:
              		{
              			"asea": "asea"
              		}
              	@end-include
              */

var asea = require("asea");

var zelf = function zelf(self) {
	/*;
                                	@meta-configuration:
                                		{
                                			"self:required": "object"
                                		}
                                	@end-meta-configuration
                                */

	self = self || this;

	if (asea.SERVER && (self === global || typeof self == "undefined" || self === null)) {
		return global;
	}

	if (asea.CLIENT && (self === window || typeof self == "undefined" || self === null)) {
		return window;
	}

	if (asea.SERVER && typeof self == "undefined") {
		return global;
	}

	if (asea.CLIENT && typeof self == "undefined") {
		return window;
	}

	return self;
};

module.exports = zelf;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplbGYuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc2VhIiwicmVxdWlyZSIsInplbGYiLCJzZWxmIiwiU0VSVkVSIiwiZ2xvYmFsIiwiQ0xJRU5UIiwid2luZG93IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1DLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxJQUFmLEVBQXFCO0FBQ2pDOzs7Ozs7OztBQVFBQSxRQUFPQSxRQUFRLElBQWY7O0FBRUEsS0FBSUgsS0FBS0ksTUFBTCxLQUFpQkQsU0FBU0UsTUFBVCxJQUFtQixPQUFPRixJQUFQLElBQWUsV0FBbEMsSUFBaURBLFNBQVMsSUFBM0UsQ0FBSixFQUF1RjtBQUN0RixTQUFPRSxNQUFQO0FBQ0E7O0FBRUQsS0FBSUwsS0FBS00sTUFBTCxLQUFpQkgsU0FBU0ksTUFBVCxJQUFtQixPQUFPSixJQUFQLElBQWUsV0FBbEMsSUFBaURBLFNBQVMsSUFBM0UsQ0FBSixFQUF1RjtBQUN0RixTQUFPSSxNQUFQO0FBQ0E7O0FBRUQsS0FBSVAsS0FBS0ksTUFBTCxJQUFlLE9BQU9ELElBQVAsSUFBZSxXQUFsQyxFQUErQztBQUM5QyxTQUFPRSxNQUFQO0FBQ0E7O0FBRUQsS0FBSUwsS0FBS00sTUFBTCxJQUFlLE9BQU9ILElBQVAsSUFBZSxXQUFsQyxFQUErQztBQUM5QyxTQUFPSSxNQUFQO0FBQ0E7O0FBRUQsUUFBT0osSUFBUDtBQUNBLENBNUJEOztBQThCQUssT0FBT0MsT0FBUCxHQUFpQlAsSUFBakIiLCJmaWxlIjoiemVsZi5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInplbGZcIixcblx0XHRcdFwicGF0aFwiOiBcInplbGYvemVsZi5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiemVsZi5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ6ZWxmXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy96ZWxmLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiemVsZi10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFJldHVybnMgd2luZG93IGZvciBjbGllbnQsIGdsb2JhbCBmb3Igc2VydmVyIGFuZCBpZiBub3RoaW5nIG1hdGNoLCByZXR1cm4gaXRzZWxmLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc2VhXCI6IFwiYXNlYVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xuXG5jb25zdCB6ZWxmID0gZnVuY3Rpb24gemVsZiggc2VsZiApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInNlbGY6cmVxdWlyZWRcIjogXCJvYmplY3RcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0c2VsZiA9IHNlbGYgfHwgdGhpcztcblxuXHRpZiggYXNlYS5TRVJWRVIgJiYgKCBzZWxmID09PSBnbG9iYWwgfHwgdHlwZW9mIHNlbGYgPT0gXCJ1bmRlZmluZWRcIiB8fCBzZWxmID09PSBudWxsICkgKXtcblx0XHRyZXR1cm4gZ2xvYmFsO1xuXHR9XG5cblx0aWYoIGFzZWEuQ0xJRU5UICYmICggc2VsZiA9PT0gd2luZG93IHx8IHR5cGVvZiBzZWxmID09IFwidW5kZWZpbmVkXCIgfHwgc2VsZiA9PT0gbnVsbCApICl7XG5cdFx0cmV0dXJuIHdpbmRvdztcblx0fVxuXG5cdGlmKCBhc2VhLlNFUlZFUiAmJiB0eXBlb2Ygc2VsZiA9PSBcInVuZGVmaW5lZFwiICl7XG5cdFx0cmV0dXJuIGdsb2JhbDtcblx0fVxuXG5cdGlmKCBhc2VhLkNMSUVOVCAmJiB0eXBlb2Ygc2VsZiA9PSBcInVuZGVmaW5lZFwiICl7XG5cdFx0cmV0dXJuIHdpbmRvdztcblx0fVxuXG5cdHJldHVybiBzZWxmO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB6ZWxmO1xuIl19
//# sourceMappingURL=zelf.support.js.map
