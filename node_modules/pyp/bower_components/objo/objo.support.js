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
              			"package": "objo",
              			"path": "objo/objo.js",
              			"file": "objo.js",
              			"module": "objo",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/objo.git",
              			"test": "objo-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Object object class wrapper.
              	@end-module-documentation
              
              	@include:
              		{
              			"ehm": "ehm",
              			"harden": "harden"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var harden = require("harden");

var Meta = require("ehm")();



//: @client:
var Data = require("./data.support.js");
//: @end-client

var objo = function objo(entity) {
	/*;
                                  	@meta-configuration:
                                  		{
                                  			"entity:required": "object"
                                  		}
                                  	@end-meta-configuration
                                  */

	if ((typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) != "object") {
		throw new Error("invalid object entity");
	}

	return Meta.create(Data, entity);
};

harden("Data", Data, objo);
harden("Data", Data, Meta);

module.exports = objo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9iam8uc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwiTWV0YSIsIkRhdGEiLCJvYmpvIiwiZW50aXR5IiwiRXJyb3IiLCJjcmVhdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUyxLQUFULEdBQWI7Ozs7QUFJQTtBQUNBLElBQU1FLE9BQU9GLFFBQVMsbUJBQVQsQ0FBYjtBQUNBOztBQUVBLElBQU1HLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxNQUFmLEVBQXVCO0FBQ25DOzs7Ozs7OztBQVFBLEtBQUksUUFBT0EsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUFyQixFQUErQjtBQUM5QixRQUFNLElBQUlDLEtBQUosQ0FBVyx1QkFBWCxDQUFOO0FBQ0E7O0FBRUQsUUFBT0osS0FBS0ssTUFBTCxDQUFhSixJQUFiLEVBQW1CRSxNQUFuQixDQUFQO0FBQ0EsQ0FkRDs7QUFnQkFMLE9BQVEsTUFBUixFQUFnQkcsSUFBaEIsRUFBc0JDLElBQXRCO0FBQ0FKLE9BQVEsTUFBUixFQUFnQkcsSUFBaEIsRUFBc0JELElBQXRCOztBQUVBTSxPQUFPQyxPQUFQLEdBQWlCTCxJQUFqQiIsImZpbGUiOiJvYmpvLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm9iam9cIixcblx0XHRcdFwicGF0aFwiOiBcIm9iam8vb2Jqby5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwib2Jqby5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJvYmpvXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvb2Jqby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcIm9iam8tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRPYmplY3Qgb2JqZWN0IGNsYXNzIHdyYXBwZXIuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImVobVwiOiBcImVobVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5cbmNvbnN0IE1ldGEgPSByZXF1aXJlKCBcImVobVwiICkoICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IERhdGEgPSByZXF1aXJlKCBcIi4vZGF0YS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5jb25zdCBvYmpvID0gZnVuY3Rpb24gb2JqbyggZW50aXR5ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwib2JqZWN0XCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0eXBlb2YgZW50aXR5ICE9IFwib2JqZWN0XCIgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBvYmplY3QgZW50aXR5XCIgKTtcblx0fVxuXG5cdHJldHVybiBNZXRhLmNyZWF0ZSggRGF0YSwgZW50aXR5ICk7XG59O1xuXG5oYXJkZW4oIFwiRGF0YVwiLCBEYXRhLCBvYmpvICk7XG5oYXJkZW4oIFwiRGF0YVwiLCBEYXRhLCBNZXRhICk7XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqbztcbiJdfQ==
//# sourceMappingURL=objo.support.js.map
