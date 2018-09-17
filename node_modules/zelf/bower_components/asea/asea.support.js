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
              			"package": "asea",
              			"path": "asea/asea.js",
              			"file": "asea.js",
              			"module": "asea",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com:volkovasystems/asea.git",
              			"test": "asea-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Determines if you're on a server environment or a client environment.
              
              		Returns unsupported if the environment cannot be determined.
              	@end-module-documentation
              
              	@include:
              		{
              			"harden": "harden"
              		}
              	@end-include
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var harden = require("harden");

harden("CLIENT", (0, _symbol2.default)("client"));
harden("SERVER", (0, _symbol2.default)("server"));
harden("UNSUPPORTED", (0, _symbol2.default)("unsupported"));

var asea = function asea() {
	if (asea.CLIENT) {
		return CLIENT;

	} else if (asea.SERVER) {
		return SERVER;

	} else {
		return UNSUPPORTED;
	}
};

harden("CLIENT",
typeof window != "undefined" &&
typeof document != "undefined" &&
typeof window.constructor == "function" &&
typeof document.constructor == "function" &&
window.constructor.name == "Window" &&
document.constructor.name == "HTMLDocument",
asea);

harden("SERVER",
typeof module != "undefined" &&
typeof global != "undefined" &&
!!module.exports &&
!!global.process &&
!!global.process.env,
asea);

harden("UNSUPPORTED",
asea.CLIENT === false &&
asea.SERVER === false,
asea);

module.exports = asea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzZWEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwiYXNlYSIsIkNMSUVOVCIsIlNFUlZFUiIsIlVOU1VQUE9SVEVEIiwid2luZG93IiwiZG9jdW1lbnQiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtb2R1bGUiLCJnbG9iYWwiLCJleHBvcnRzIiwicHJvY2VzcyIsImVudiJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7O0FBRUFELE9BQVEsUUFBUixFQUFrQixzQkFBUSxRQUFSLENBQWxCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixzQkFBUSxRQUFSLENBQWxCO0FBQ0FBLE9BQVEsYUFBUixFQUF1QixzQkFBUSxhQUFSLENBQXZCOztBQUVBLElBQU1FLE9BQU8sU0FBU0EsSUFBVCxHQUFnQjtBQUM1QixLQUFJQSxLQUFLQyxNQUFULEVBQWlCO0FBQ2hCLFNBQU9BLE1BQVA7O0FBRUEsRUFIRCxNQUdNLElBQUlELEtBQUtFLE1BQVQsRUFBaUI7QUFDdEIsU0FBT0EsTUFBUDs7QUFFQSxFQUhLLE1BR0Q7QUFDSixTQUFPQyxXQUFQO0FBQ0E7QUFDRCxDQVZEOztBQVlBTCxPQUFRLFFBQVI7QUFDQyxPQUFPTSxNQUFQLElBQWlCLFdBQWpCO0FBQ0EsT0FBT0MsUUFBUCxJQUFtQixXQURuQjtBQUVBLE9BQU9ELE9BQU9FLFdBQWQsSUFBNkIsVUFGN0I7QUFHQSxPQUFPRCxTQUFTQyxXQUFoQixJQUErQixVQUgvQjtBQUlBRixPQUFPRSxXQUFQLENBQW1CQyxJQUFuQixJQUEyQixRQUozQjtBQUtBRixTQUFTQyxXQUFULENBQXFCQyxJQUFyQixJQUE2QixjQU45QjtBQU9HUCxJQVBIOztBQVNBRixPQUFRLFFBQVI7QUFDQyxPQUFPVSxNQUFQLElBQWlCLFdBQWpCO0FBQ0EsT0FBT0MsTUFBUCxJQUFpQixXQURqQjtBQUVBLENBQUMsQ0FBQ0QsT0FBT0UsT0FGVDtBQUdBLENBQUMsQ0FBQ0QsT0FBT0UsT0FIVDtBQUlBLENBQUMsQ0FBQ0YsT0FBT0UsT0FBUCxDQUFlQyxHQUxsQjtBQU1HWixJQU5IOztBQVFBRixPQUFRLGFBQVI7QUFDQ0UsS0FBS0MsTUFBTCxLQUFnQixLQUFoQjtBQUNBRCxLQUFLRSxNQUFMLEtBQWdCLEtBRmpCO0FBR0dGLElBSEg7O0FBS0FRLE9BQU9FLE9BQVAsR0FBaUJWLElBQWpCIiwiZmlsZSI6ImFzZWEuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYXNlYVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiYXNlYS9hc2VhLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJhc2VhLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImFzZWFcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tOnZvbGtvdmFzeXN0ZW1zL2FzZWEuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJhc2VhLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RGV0ZXJtaW5lcyBpZiB5b3UncmUgb24gYSBzZXJ2ZXIgZW52aXJvbm1lbnQgb3IgYSBjbGllbnQgZW52aXJvbm1lbnQuXG5cblx0XHRSZXR1cm5zIHVuc3VwcG9ydGVkIGlmIHRoZSBlbnZpcm9ubWVudCBjYW5ub3QgYmUgZGV0ZXJtaW5lZC5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuXG5oYXJkZW4oIFwiQ0xJRU5UXCIsIFN5bWJvbCggXCJjbGllbnRcIiApICk7XG5oYXJkZW4oIFwiU0VSVkVSXCIsIFN5bWJvbCggXCJzZXJ2ZXJcIiApICk7XG5oYXJkZW4oIFwiVU5TVVBQT1JURURcIiwgU3ltYm9sKCBcInVuc3VwcG9ydGVkXCIgKSApO1xuXG5jb25zdCBhc2VhID0gZnVuY3Rpb24gYXNlYSggKXtcblx0aWYoIGFzZWEuQ0xJRU5UICl7XG5cdFx0cmV0dXJuIENMSUVOVDtcblxuXHR9ZWxzZSBpZiggYXNlYS5TRVJWRVIgKXtcblx0XHRyZXR1cm4gU0VSVkVSO1xuXG5cdH1lbHNle1xuXHRcdHJldHVybiBVTlNVUFBPUlRFRDtcblx0fVxufTtcblxuaGFyZGVuKCBcIkNMSUVOVFwiLCAoXG5cdHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIiAmJlxuXHR0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJlxuXHR0eXBlb2Ygd2luZG93LmNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIiAmJlxuXHR0eXBlb2YgZG9jdW1lbnQuY29uc3RydWN0b3IgPT0gXCJmdW5jdGlvblwiICYmXG5cdHdpbmRvdy5jb25zdHJ1Y3Rvci5uYW1lID09IFwiV2luZG93XCIgJiZcblx0ZG9jdW1lbnQuY29uc3RydWN0b3IubmFtZSA9PSBcIkhUTUxEb2N1bWVudFwiXG4pLCBhc2VhICk7XG5cbmhhcmRlbiggXCJTRVJWRVJcIiwgKFxuXHR0eXBlb2YgbW9kdWxlICE9IFwidW5kZWZpbmVkXCIgJiZcblx0dHlwZW9mIGdsb2JhbCAhPSBcInVuZGVmaW5lZFwiICYmXG5cdCEhbW9kdWxlLmV4cG9ydHMgJiZcblx0ISFnbG9iYWwucHJvY2VzcyAmJlxuXHQhIWdsb2JhbC5wcm9jZXNzLmVudlxuKSwgYXNlYSApO1xuXG5oYXJkZW4oIFwiVU5TVVBQT1JURURcIiwgKFxuXHRhc2VhLkNMSUVOVCA9PT0gZmFsc2UgJiZcblx0YXNlYS5TRVJWRVIgPT09IGZhbHNlXG4pLCBhc2VhICk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXNlYTtcbiJdfQ==
//# sourceMappingURL=asea.support.js.map
