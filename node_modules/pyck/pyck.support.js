"use strict"; /*;
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
              			"package": "pyck",
              			"path": "pyck/pyck.js",
              			"file": "pyck.js",
              			"module": "pyck",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/pyck.git",
              			"test": "pyck-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Pick elements based on condition.
              
              		Conditions may be type, function, class or actual value to be compared.
              
              		Setting state will further check if the element is non-null, non-undefined,
              			non-empty string, object or array, not Infinity and NaN if state is true otherwise
              			it will check for falsy values.
              
              		If condition is a function it should return a boolean result else,
              			this will throw an error.
              	@end-module-documentation
              
              	@include:
              		{
              			"condev": "condev",
              			"raze": "raze",
              			"zelf": "zelf"
              		}
              	@end-include
              */

var condev = require("condev");
var raze = require("raze");
var zelf = require("zelf");

var pyck = function pyck(list, condition, state) {
	/*;
                                                  	@meta-configuration:
                                                  		{
                                                  			"list:required": [
                                                  				"Arguments",
                                                  				"[*]"
                                                  			],
                                                  			"condition:required": [
                                                  				"string",
                                                  				"function",
                                                  				RegExp,
                                                  				BOOLEAN,
                                                  				FUNCTION,
                                                  				NUMBER,
                                                  				OBJECT,
                                                  				STRING,
                                                  				UNDEFINED,
                                                  				SYMBOL,
                                                  				"*",
                                                  				"[*]"
                                                  			],
                                                  			"state": "boolean"
                                                  		}
                                                  	@end-meta-configuration
                                                  */

	var filter = condev.bind(zelf(this));

	return raze(list).filter(function (element) {return filter(element, condition, state);});
};

module.exports = pyck;

//# sourceMappingURL=pyck.support.js.map