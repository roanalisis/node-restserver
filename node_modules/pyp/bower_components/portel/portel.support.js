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
              			"package": "portel",
              			"path": "portel/portel.js",
              			"file": "portel.js",
              			"module": "portel",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/portel.git",
              			"test": "portel-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Transform non-object entity to object entity.
              	@end-module-documentation
              
              	@include:
              		{
              			"blon": "blon",
              			"fno": "fno",
              			"glyo": "glyo",
              			"ndfo": "ndfo",
              			"nol": "nol",
              			"numo": "numo",
              			"objo": "objo",
              			"protype": "protype",
              			"stro": "stro"
              		}
              	@end-include
              */

var blon = require("blon");
var fno = require("fno");
var glyo = require("glyo");
var ndfo = require("ndfo");
var nol = require("nol");
var numo = require("numo");
var objo = require("objo");
var protype = require("protype");
var stro = require("stro");

var portel = function portel(entity) {
	/*;
                                      	@meta-configuration:
                                      		{
                                      			"entity:required": "*"
                                      		}
                                      	@end-meta-configuration
                                      */

	switch (protype(entity).type) {
		case BOOLEAN:
			return blon(entity);

		case FUNCTION:
			return fno(entity);

		case NUMBER:
			return numo(entity);

		case OBJECT:
			if (entity === null) {
				return nol(entity);
			}

			return objo(entity);

		case STRING:
			return stro(entity);

		case SYMBOL:
			return glyo(entity);

		case UNDEFINED:
			return ndfo(entity);

		default:
			throw new Error("cannot transform to object type");}

};

module.exports = portel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRlbC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImJsb24iLCJyZXF1aXJlIiwiZm5vIiwiZ2x5byIsIm5kZm8iLCJub2wiLCJudW1vIiwib2JqbyIsInByb3R5cGUiLCJzdHJvIiwicG9ydGVsIiwiZW50aXR5IiwidHlwZSIsIkJPT0xFQU4iLCJGVU5DVElPTiIsIk5VTUJFUiIsIk9CSkVDVCIsIlNUUklORyIsIlNZTUJPTCIsIlVOREVGSU5FRCIsIkVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRUEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxNQUFNRCxRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUcsT0FBT0gsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNSSxNQUFNSixRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1LLE9BQU9MLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTU0sT0FBT04sUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNTyxVQUFVUCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNUSxPQUFPUixRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNUyxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZDOzs7Ozs7OztBQVFBLFNBQVFILFFBQVNHLE1BQVQsRUFBa0JDLElBQTFCO0FBQ0MsT0FBS0MsT0FBTDtBQUNDLFVBQU9iLEtBQU1XLE1BQU4sQ0FBUDs7QUFFRCxPQUFLRyxRQUFMO0FBQ0MsVUFBT1osSUFBS1MsTUFBTCxDQUFQOztBQUVELE9BQUtJLE1BQUw7QUFDQyxVQUFPVCxLQUFNSyxNQUFOLENBQVA7O0FBRUQsT0FBS0ssTUFBTDtBQUNDLE9BQUlMLFdBQVcsSUFBZixFQUFxQjtBQUNwQixXQUFPTixJQUFLTSxNQUFMLENBQVA7QUFDQTs7QUFFRCxVQUFPSixLQUFNSSxNQUFOLENBQVA7O0FBRUQsT0FBS00sTUFBTDtBQUNDLFVBQU9SLEtBQU1FLE1BQU4sQ0FBUDs7QUFFRCxPQUFLTyxNQUFMO0FBQ0MsVUFBT2YsS0FBTVEsTUFBTixDQUFQOztBQUVELE9BQUtRLFNBQUw7QUFDQyxVQUFPZixLQUFNTyxNQUFOLENBQVA7O0FBRUQ7QUFDQyxTQUFNLElBQUlTLEtBQUosQ0FBVyxpQ0FBWCxDQUFOLENBM0JGOztBQTZCQSxDQXRDRDs7QUF3Q0FDLE9BQU9DLE9BQVAsR0FBaUJaLE1BQWpCIiwiZmlsZSI6InBvcnRlbC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJwb3J0ZWxcIixcblx0XHRcdFwicGF0aFwiOiBcInBvcnRlbC9wb3J0ZWwuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInBvcnRlbC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJwb3J0ZWxcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3BvcnRlbC5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInBvcnRlbC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFRyYW5zZm9ybSBub24tb2JqZWN0IGVudGl0eSB0byBvYmplY3QgZW50aXR5LlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJibG9uXCI6IFwiYmxvblwiLFxuXHRcdFx0XCJmbm9cIjogXCJmbm9cIixcblx0XHRcdFwiZ2x5b1wiOiBcImdseW9cIixcblx0XHRcdFwibmRmb1wiOiBcIm5kZm9cIixcblx0XHRcdFwibm9sXCI6IFwibm9sXCIsXG5cdFx0XHRcIm51bW9cIjogXCJudW1vXCIsXG5cdFx0XHRcIm9iam9cIjogXCJvYmpvXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInN0cm9cIjogXCJzdHJvXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYmxvbiA9IHJlcXVpcmUoIFwiYmxvblwiICk7XG5jb25zdCBmbm8gPSByZXF1aXJlKCBcImZub1wiICk7XG5jb25zdCBnbHlvID0gcmVxdWlyZSggXCJnbHlvXCIgKTtcbmNvbnN0IG5kZm8gPSByZXF1aXJlKCBcIm5kZm9cIiApO1xuY29uc3Qgbm9sID0gcmVxdWlyZSggXCJub2xcIiApO1xuY29uc3QgbnVtbyA9IHJlcXVpcmUoIFwibnVtb1wiICk7XG5jb25zdCBvYmpvID0gcmVxdWlyZSggXCJvYmpvXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3Qgc3RybyA9IHJlcXVpcmUoIFwic3Ryb1wiICk7XG5cbmNvbnN0IHBvcnRlbCA9IGZ1bmN0aW9uIHBvcnRlbCggZW50aXR5ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRzd2l0Y2goIHByb3R5cGUoIGVudGl0eSApLnR5cGUgKXtcblx0XHRjYXNlIEJPT0xFQU46XG5cdFx0XHRyZXR1cm4gYmxvbiggZW50aXR5ICk7XG5cblx0XHRjYXNlIEZVTkNUSU9OOlxuXHRcdFx0cmV0dXJuIGZubyggZW50aXR5ICk7XG5cblx0XHRjYXNlIE5VTUJFUjpcblx0XHRcdHJldHVybiBudW1vKCBlbnRpdHkgKTtcblxuXHRcdGNhc2UgT0JKRUNUOlxuXHRcdFx0aWYoIGVudGl0eSA9PT0gbnVsbCApe1xuXHRcdFx0XHRyZXR1cm4gbm9sKCBlbnRpdHkgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG9iam8oIGVudGl0eSApO1xuXG5cdFx0Y2FzZSBTVFJJTkc6XG5cdFx0XHRyZXR1cm4gc3RybyggZW50aXR5ICk7XG5cblx0XHRjYXNlIFNZTUJPTDpcblx0XHRcdHJldHVybiBnbHlvKCBlbnRpdHkgKTtcblxuXHRcdGNhc2UgVU5ERUZJTkVEOlxuXHRcdFx0cmV0dXJuIG5kZm8oIGVudGl0eSApO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgdHJhbnNmb3JtIHRvIG9iamVjdCB0eXBlXCIgKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwb3J0ZWw7XG4iXX0=
//# sourceMappingURL=portel.support.js.map
