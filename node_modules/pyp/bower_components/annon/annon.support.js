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
              			"package": "annon",
              			"path": "annon/annon.js",
              			"file": "annon.js",
              			"module": "annon",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/annon.git",
              			"test": "annon-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Checks if function is anonymous.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"fnamed": "fnamed",
              			"protype": "protype"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var falzy = require("falzy");
var fnamed = require("fnamed");
var protype = require("protype");

var annon = function annon(method) {
	/*;
                                    	@meta-configuration:
                                    		{
                                    			"method:required": [
                                    				"function",
                                    				"string"
                                    			]
                                    		}
                                    	@end-meta-configuration
                                    */

	if ((typeof method === "undefined" ? "undefined" : (0, _typeof3.default)(method)) == STRING && falzy(method)) {
		return true;
	}

	if (falzy(method) || !protype(method, FUNCTION + STRING)) {
		return false;
	}

	return fnamed(method) === false;
};

module.exports = annon;

//# sourceMappingURL=annon.support.js.map