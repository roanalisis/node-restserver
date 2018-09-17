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
              			"package": "nafe",
              			"path": "nafe/nafe.js",
              			"file": "nafe.js",
              			"module": "nafe",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/nafe.git",
              			"test": "nafe-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Checks if function is native.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"stringe": "stringe"
              		}
              	@end-include
              */

var falzy = require("falzy");
var stringe = require("stringe");

var NATIVE_FUNCTION_PATTERN = /\{\s*\[\s*native\s+code\s*\]\s*\}$/i;

var nafe = function nafe(procedure) {
	/*;
                                     	@meta-configuration:
                                     		{
                                     			"procedure:required": "function"
                                     		}
                                     	@end-meta-configuration
                                     */

	if (falzy(procedure) || typeof procedure != "function") {
		return false;
	}

	try {
		return NATIVE_FUNCTION_PATTERN.test(stringe(procedure));

	} catch (error) {
		return false;
	}
};

module.exports = nafe;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hZmUuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJzdHJpbmdlIiwiTkFUSVZFX0ZVTkNUSU9OX1BBVFRFUk4iLCJuYWZlIiwicHJvY2VkdXJlIiwidGVzdCIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFVBQVVELFFBQVMsU0FBVCxDQUFoQjs7QUFFQSxJQUFNRSwwQkFBMEIscUNBQWhDOztBQUVBLElBQU1DLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxTQUFmLEVBQTBCO0FBQ3RDOzs7Ozs7OztBQVFBLEtBQUlMLE1BQU9LLFNBQVAsS0FBc0IsT0FBT0EsU0FBUCxJQUFvQixVQUE5QyxFQUEwRDtBQUN6RCxTQUFPLEtBQVA7QUFDQTs7QUFFRCxLQUFHO0FBQ0YsU0FBT0Ysd0JBQXdCRyxJQUF4QixDQUE4QkosUUFBU0csU0FBVCxDQUE5QixDQUFQOztBQUVBLEVBSEQsQ0FHQyxPQUFPRSxLQUFQLEVBQWM7QUFDZCxTQUFPLEtBQVA7QUFDQTtBQUNELENBbkJEOztBQXFCQUMsT0FBT0MsT0FBUCxHQUFpQkwsSUFBakIiLCJmaWxlIjoibmFmZS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJuYWZlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJuYWZlL25hZmUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm5hZmUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwibmFmZVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbmFmZS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcIm5hZmUtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRDaGVja3MgaWYgZnVuY3Rpb24gaXMgbmF0aXZlLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcInN0cmluZ2VcIjogXCJzdHJpbmdlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IHN0cmluZ2UgPSByZXF1aXJlKCBcInN0cmluZ2VcIiApO1xuXG5jb25zdCBOQVRJVkVfRlVOQ1RJT05fUEFUVEVSTiA9IC9cXHtcXHMqXFxbXFxzKm5hdGl2ZVxccytjb2RlXFxzKlxcXVxccypcXH0kL2lcblxuY29uc3QgbmFmZSA9IGZ1bmN0aW9uIG5hZmUoIHByb2NlZHVyZSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInByb2NlZHVyZTpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggcHJvY2VkdXJlICkgfHwgdHlwZW9mIHByb2NlZHVyZSAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR0cnl7XG5cdFx0cmV0dXJuIE5BVElWRV9GVU5DVElPTl9QQVRURVJOLnRlc3QoIHN0cmluZ2UoIHByb2NlZHVyZSApICk7XG5cblx0fWNhdGNoKCBlcnJvciApe1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYWZlO1xuIl19
//# sourceMappingURL=nafe.support.js.map
