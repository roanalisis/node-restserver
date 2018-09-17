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
              			"package": "shft",
              			"path": "shft/shft.js",
              			"file": "shft.js",
              			"module": "shft",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/shft.git",``
              			"test": "shft-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Get remaining elements starting from the given index.
              
              		Default index is 1. This will always return a new array.
              
              		Refer to the documentation of Array.prototype.splice for more information.
              	@end-module-documentation
              
              	@include:
              		{
              			"arid": "arid",
              			"raze": "raze"
              		}
              	@end-include
              */

var arid = require("arid");
var raze = require("raze");

var shft = function shft(array, index) {
	/*;
                                        	@meta-configuration:
                                        		{
                                        			"array:required": Array,
                                        			"index:required": "number"
                                        		}
                                        	@end-meta-configuration
                                        */

	if (arid(array)) {
		return [];
	}

	if (typeof index != "number" || index === 0) {
		index = 1;
	}

	return raze(array).splice(index);
};

module.exports = shft;

//# sourceMappingURL=shft.support.js.map