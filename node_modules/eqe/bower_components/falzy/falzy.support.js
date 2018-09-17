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
              			"package": "falzy",
              			"path": "falzy/falzy.js",
              			"file": "falzy.js",
              			"module": "falzy",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/falzy.git",
              			"test": "falzy-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Check if the value is undefined, null, empty string, and NaN.
              	@end-module-documentation
              
              	@note:
              		This module should not have a dependency and should remain as simple as possible.
              	@end-note
              */

var falzy = function falzy(value) {
	/*;
                                   	@meta-configuration:
                                   		{
                                   			"value:required": "*"
                                   		}
                                   	@end-meta-configuration
                                   */

	if (typeof value == "number") {
		return isNaN(value);
	}

	return typeof value == "undefined" || value === null || value === "";
};

module.exports = falzy;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbHp5LnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZmFsenkiLCJ2YWx1ZSIsImlzTmFOIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEQSxJQUFNQSxRQUFRLFNBQVNBLEtBQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ3BDOzs7Ozs7OztBQVFBLEtBQUksT0FBT0EsS0FBUCxJQUFnQixRQUFwQixFQUE4QjtBQUM3QixTQUFPQyxNQUFPRCxLQUFQLENBQVA7QUFDQTs7QUFFRCxRQUFTLE9BQU9BLEtBQVAsSUFBZ0IsV0FBaEIsSUFBK0JBLFVBQVUsSUFBekMsSUFBaURBLFVBQVUsRUFBcEU7QUFDQSxDQWREOztBQWdCQUUsT0FBT0MsT0FBUCxHQUFpQkosS0FBakIiLCJmaWxlIjoiZmFsenkuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZmFsenlcIixcblx0XHRcdFwicGF0aFwiOiBcImZhbHp5L2ZhbHp5LmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJmYWx6eS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZmFsenkuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJmYWx6eS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENoZWNrIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG51bGwsIGVtcHR5IHN0cmluZywgYW5kIE5hTi5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBub3RlOlxuXHRcdFRoaXMgbW9kdWxlIHNob3VsZCBub3QgaGF2ZSBhIGRlcGVuZGVuY3kgYW5kIHNob3VsZCByZW1haW4gYXMgc2ltcGxlIGFzIHBvc3NpYmxlLlxuXHRAZW5kLW5vdGVcbiovXG5cbmNvbnN0IGZhbHp5ID0gZnVuY3Rpb24gZmFsenkoIHZhbHVlICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwidmFsdWU6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0eXBlb2YgdmFsdWUgPT0gXCJudW1iZXJcIiApe1xuXHRcdHJldHVybiBpc05hTiggdmFsdWUgKTtcblx0fVxuXG5cdHJldHVybiAoIHR5cGVvZiB2YWx1ZSA9PSBcInVuZGVmaW5lZFwiIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBcIlwiICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhbHp5O1xuIl19
//# sourceMappingURL=falzy.support.js.map
