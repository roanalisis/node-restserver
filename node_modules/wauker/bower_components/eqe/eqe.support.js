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
              			"package": "eqe",
              			"path": "eqe/eqe.js",
              			"file": "eqe.js",
              			"module": "eqe",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/eqe.git",
              			"test": "eqe-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Shallow equal.
              
              		For cases of function, two functions are equal if their contents are equal and
              			both are not native. This is important because, functions tend to have
              			different references but same look, which may be implied that they are
              			created using a factory function and thus may produce different references
              			although they have the same content.
              	@end-module-documentation
              
              	@include:
              		{
              			"nafe": "nafe",
              			"stringe": "stringe"
              		}
              	@end-include
              */

var nafe = require("nafe");
var stringe = require("stringe");

var eqe = function eqe(source, target) {
	/*;
                                        	@meta-configuration:
                                        		{
                                        			"source:required": "*",
                                        			"target:required": "*"
                                        		}
                                        	@end-meta-configuration
                                        */

	try {
		if (typeof source == "function" && typeof target == "function" &&
		!nafe(source) && !nafe(target))
		{
			return stringe(source) == stringe(target) || source === target;
		}

		return source === target;

	} catch (error) {
		return false;
	}
};

module.exports = eqe;

//# sourceMappingURL=eqe.support.js.map