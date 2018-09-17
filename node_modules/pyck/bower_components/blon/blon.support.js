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
              			"package": "blon",
              			"path": "blon/blon.js",
              			"file": "blon.js",
              			"module": "blon",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/blon.git",
              			"test": "blon-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Boolean object class wrapper.
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
var State = require("./state.support.js");
//: @end-client

var blon = function blon(entity) {
	/*;
                                  	@meta-configuration:
                                  		{
                                  			"entity:required": "boolean"
                                  		}
                                  	@end-meta-configuration
                                  */

	if (typeof entity != "boolean") {
		throw new Error("invalid boolean entity");
	}

	return Meta.create(State, entity);
};

harden("State", State, blon);
harden("State", State, Meta);

module.exports = blon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb24uc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwiTWV0YSIsIlN0YXRlIiwiYmxvbiIsImVudGl0eSIsIkVycm9yIiwiY3JlYXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFTLEtBQVQsR0FBYjs7OztBQUlBO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxvQkFBVCxDQUFkO0FBQ0E7O0FBRUEsSUFBTUcsT0FBTyxTQUFTQSxJQUFULENBQWVDLE1BQWYsRUFBdUI7QUFDbkM7Ozs7Ozs7O0FBUUEsS0FBSSxPQUFPQSxNQUFQLElBQWlCLFNBQXJCLEVBQWdDO0FBQy9CLFFBQU0sSUFBSUMsS0FBSixDQUFXLHdCQUFYLENBQU47QUFDQTs7QUFFRCxRQUFPSixLQUFLSyxNQUFMLENBQWFKLEtBQWIsRUFBb0JFLE1BQXBCLENBQVA7QUFDQSxDQWREOztBQWdCQUwsT0FBUSxPQUFSLEVBQWlCRyxLQUFqQixFQUF3QkMsSUFBeEI7QUFDQUosT0FBUSxPQUFSLEVBQWlCRyxLQUFqQixFQUF3QkQsSUFBeEI7O0FBRUFNLE9BQU9DLE9BQVAsR0FBaUJMLElBQWpCIiwiZmlsZSI6ImJsb24uc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYmxvblwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiYmxvbi9ibG9uLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJibG9uLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImJsb25cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Jsb24uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJibG9uLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Qm9vbGVhbiBvYmplY3QgY2xhc3Mgd3JhcHBlci5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZWhtXCI6IFwiZWhtXCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcblxuY29uc3QgTWV0YSA9IHJlcXVpcmUoIFwiZWhtXCIgKSggKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgU3RhdGUgPSByZXF1aXJlKCBcIi4vc3RhdGUuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuY29uc3QgYmxvbiA9IGZ1bmN0aW9uIGJsb24oIGVudGl0eSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcImJvb2xlYW5cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHR5cGVvZiBlbnRpdHkgIT0gXCJib29sZWFuXCIgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBib29sZWFuIGVudGl0eVwiICk7XG5cdH1cblxuXHRyZXR1cm4gTWV0YS5jcmVhdGUoIFN0YXRlLCBlbnRpdHkgKTtcbn07XG5cbmhhcmRlbiggXCJTdGF0ZVwiLCBTdGF0ZSwgYmxvbiApO1xuaGFyZGVuKCBcIlN0YXRlXCIsIFN0YXRlLCBNZXRhICk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmxvbjtcbiJdfQ==
//# sourceMappingURL=blon.support.js.map
