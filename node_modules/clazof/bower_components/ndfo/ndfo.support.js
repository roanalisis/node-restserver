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
              			"package": "ndfo",
              			"path": "ndfo/ndfo.js",
              			"file": "ndfo.js",
              			"module": "ndfo",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/ndfo.git",
              			"test": "ndfo-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Undefined object class wrapper.
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
var Undefined = require("./undefined.support.js");
//: @end-client

var ndfo = function ndfo(entity) {
	/*;
                                  	@meta-configuration:
                                  		{
                                  			"entity:required": undefined
                                  		}
                                  	@end-meta-configuration
                                  */

	if (typeof entity != "undefined") {
		return Meta.create(Undefined, undefined);
	}

	return Meta.create(Undefined, entity);
};

harden("Undefined", Undefined, ndfo);
harden("Undefined", Undefined, Meta);

module.exports = ndfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5kZm8uc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwiTWV0YSIsIlVuZGVmaW5lZCIsIm5kZm8iLCJlbnRpdHkiLCJjcmVhdGUiLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOztBQUVBLElBQU1DLE9BQU9ELFFBQVMsS0FBVCxHQUFiOzs7O0FBSUE7QUFDQSxJQUFNRSxZQUFZRixRQUFTLHdCQUFULENBQWxCO0FBQ0E7O0FBRUEsSUFBTUcsT0FBTyxTQUFTQSxJQUFULENBQWVDLE1BQWYsRUFBdUI7QUFDbkM7Ozs7Ozs7O0FBUUEsS0FBSSxPQUFPQSxNQUFQLElBQWlCLFdBQXJCLEVBQWtDO0FBQ2pDLFNBQU9ILEtBQUtJLE1BQUwsQ0FBYUgsU0FBYixFQUF3QkksU0FBeEIsQ0FBUDtBQUNBOztBQUVELFFBQU9MLEtBQUtJLE1BQUwsQ0FBYUgsU0FBYixFQUF3QkUsTUFBeEIsQ0FBUDtBQUNBLENBZEQ7O0FBZ0JBTCxPQUFRLFdBQVIsRUFBcUJHLFNBQXJCLEVBQWdDQyxJQUFoQztBQUNBSixPQUFRLFdBQVIsRUFBcUJHLFNBQXJCLEVBQWdDRCxJQUFoQzs7QUFFQU0sT0FBT0MsT0FBUCxHQUFpQkwsSUFBakIiLCJmaWxlIjoibmRmby5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJuZGZvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJuZGZvL25kZm8uanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm5kZm8uanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwibmRmb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbmRmby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcIm5kZm8tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRVbmRlZmluZWQgb2JqZWN0IGNsYXNzIHdyYXBwZXIuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImVobVwiOiBcImVobVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5cbmNvbnN0IE1ldGEgPSByZXF1aXJlKCBcImVobVwiICkoICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IFVuZGVmaW5lZCA9IHJlcXVpcmUoIFwiLi91bmRlZmluZWQuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuY29uc3QgbmRmbyA9IGZ1bmN0aW9uIG5kZm8oIGVudGl0eSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiB1bmRlZmluZWRcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0eXBlb2YgZW50aXR5ICE9IFwidW5kZWZpbmVkXCIgKXtcblx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIFVuZGVmaW5lZCwgdW5kZWZpbmVkICk7XG5cdH1cblxuXHRyZXR1cm4gTWV0YS5jcmVhdGUoIFVuZGVmaW5lZCwgZW50aXR5ICk7XG59O1xuXG5oYXJkZW4oIFwiVW5kZWZpbmVkXCIsIFVuZGVmaW5lZCwgbmRmbyApO1xuaGFyZGVuKCBcIlVuZGVmaW5lZFwiLCBVbmRlZmluZWQsIE1ldGEgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZGZvO1xuIl19
//# sourceMappingURL=ndfo.support.js.map
