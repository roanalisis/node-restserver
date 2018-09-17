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
              			"package": "nol",
              			"path": "nol/nol.js",
              			"file": "nol.js",
              			"module": "nol",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/nol.git",
              			"test": "nol-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Null object class wrapper.
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
var Null = require("./null.support.js");
//: @end-client

var nol = function nol(entity) {
	/*;
                                	@meta-configuration:
                                		{
                                			"entity:required": null
                                		}
                                	@end-meta-configuration
                                */

	if (entity !== null) {
		return Meta.create(Null, null);
	}

	return Meta.create(Null, entity);
};

harden("Null", Null, nol);
harden("Null", Null, Meta);

module.exports = nol;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vbC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImhhcmRlbiIsInJlcXVpcmUiLCJNZXRhIiwiTnVsbCIsIm5vbCIsImVudGl0eSIsImNyZWF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUyxLQUFULEdBQWI7Ozs7QUFJQTtBQUNBLElBQU1FLE9BQU9GLFFBQVMsbUJBQVQsQ0FBYjtBQUNBOztBQUVBLElBQU1HLE1BQU0sU0FBU0EsR0FBVCxDQUFjQyxNQUFkLEVBQXNCO0FBQ2pDOzs7Ozs7OztBQVFBLEtBQUlBLFdBQVcsSUFBZixFQUFxQjtBQUNwQixTQUFPSCxLQUFLSSxNQUFMLENBQWFILElBQWIsRUFBbUIsSUFBbkIsQ0FBUDtBQUNBOztBQUVELFFBQU9ELEtBQUtJLE1BQUwsQ0FBYUgsSUFBYixFQUFtQkUsTUFBbkIsQ0FBUDtBQUNBLENBZEQ7O0FBZ0JBTCxPQUFRLE1BQVIsRUFBZ0JHLElBQWhCLEVBQXNCQyxHQUF0QjtBQUNBSixPQUFRLE1BQVIsRUFBZ0JHLElBQWhCLEVBQXNCRCxJQUF0Qjs7QUFFQUssT0FBT0MsT0FBUCxHQUFpQkosR0FBakIiLCJmaWxlIjoibm9sLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm5vbFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwibm9sL25vbC5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwibm9sLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm5vbFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbm9sLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwibm9sLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0TnVsbCBvYmplY3QgY2xhc3Mgd3JhcHBlci5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZWhtXCI6IFwiZWhtXCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcblxuY29uc3QgTWV0YSA9IHJlcXVpcmUoIFwiZWhtXCIgKSggKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgTnVsbCA9IHJlcXVpcmUoIFwiLi9udWxsLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cbmNvbnN0IG5vbCA9IGZ1bmN0aW9uIG5vbCggZW50aXR5ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IG51bGxcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBlbnRpdHkgIT09IG51bGwgKXtcblx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIE51bGwsIG51bGwgKTtcblx0fVxuXG5cdHJldHVybiBNZXRhLmNyZWF0ZSggTnVsbCwgZW50aXR5ICk7XG59O1xuXG5oYXJkZW4oIFwiTnVsbFwiLCBOdWxsLCBub2wgKTtcbmhhcmRlbiggXCJOdWxsXCIsIE51bGwsIE1ldGEgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2w7XG4iXX0=
//# sourceMappingURL=nol.support.js.map
