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
              			"package": "nmde",
              			"path": "nmde/nmde.js",
              			"file": "nmde.js",
              			"module": "nmde",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/nmde.git",
              			"test": "nmde-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Get string name property of entity.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"truly": "truly"
              		}
              	@end-include
              */

var falzy = require("falzy");
var truly = require("truly");

var EMPTY_NAME = "";

var nmde = function nmde(entity) {
	/*;
                                  	@meta-configuration:
                                  		{
                                  			"entity:required": [
                                  				"function",
                                  				"object",
                                  				"*"
                                  			]
                                  		}
                                  	@end-meta-configuration
                                  */

	if (falzy(entity)) {
		return EMPTY_NAME;
	}

	if (truly(entity.name) && typeof entity.name == "string") {
		return entity.name;
	}

	return EMPTY_NAME;
};

module.exports = nmde;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5tZGUuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJ0cnVseSIsIkVNUFRZX05BTUUiLCJubWRlIiwiZW50aXR5IiwibmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNRSxhQUFhLEVBQW5COztBQUVBLElBQU1DLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxNQUFmLEVBQXVCO0FBQ25DOzs7Ozs7Ozs7Ozs7QUFZQSxLQUFJTCxNQUFPSyxNQUFQLENBQUosRUFBcUI7QUFDcEIsU0FBT0YsVUFBUDtBQUNBOztBQUVELEtBQUlELE1BQU9HLE9BQU9DLElBQWQsS0FBd0IsT0FBT0QsT0FBT0MsSUFBZCxJQUFzQixRQUFsRCxFQUE0RDtBQUMzRCxTQUFPRCxPQUFPQyxJQUFkO0FBQ0E7O0FBRUQsUUFBT0gsVUFBUDtBQUNBLENBdEJEOztBQXdCQUksT0FBT0MsT0FBUCxHQUFpQkosSUFBakIiLCJmaWxlIjoibm1kZS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJubWRlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJubWRlL25tZGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm5tZGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwibm1kZVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbm1kZS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcIm5tZGUtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRHZXQgc3RyaW5nIG5hbWUgcHJvcGVydHkgb2YgZW50aXR5LlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcblxuY29uc3QgRU1QVFlfTkFNRSA9IFwiXCI7XG5cbmNvbnN0IG5tZGUgPSBmdW5jdGlvbiBubWRlKCBlbnRpdHkgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcIm9iamVjdFwiLFxuXHRcdFx0XHRcdFwiKlwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggZW50aXR5ICkgKXtcblx0XHRyZXR1cm4gRU1QVFlfTkFNRTtcblx0fVxuXG5cdGlmKCB0cnVseSggZW50aXR5Lm5hbWUgKSAmJiB0eXBlb2YgZW50aXR5Lm5hbWUgPT0gXCJzdHJpbmdcIiApe1xuXHRcdHJldHVybiBlbnRpdHkubmFtZTtcblx0fVxuXG5cdHJldHVybiBFTVBUWV9OQU1FO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBubWRlO1xuIl19
//# sourceMappingURL=nmde.support.js.map
