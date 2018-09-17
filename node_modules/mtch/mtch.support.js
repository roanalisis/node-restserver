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
              			"package": "mtch",
              			"path": "mtch/mtch.js",
              			"file": "mtch.js",
              			"module": "mtch",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/mtch.git",
              			"test": "mtch-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Shorter string matching.
              
              		If index is given it will always return the matching index string
              			or empty string otherwise.
              
              		If no index is given it will return the result of the match procedure
              			or empty array otherwise.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"raze": "raze",
              			"stringe": "stringe",
              			"truly": "truly"
              		}
              	@end-include
              */

var falzy = require("falzy");
var raze = require("raze");
var stringe = require("stringe");
var truly = require("truly");

var EMPTY_STRING = "";

var mtch = function mtch(text, pattern, index) {
	/*;
                                                	@meta-configuration:
                                                		{
                                                			"text:required": "string",
                                                			"pattern:required": [
                                                				"string",
                                                				RegExp
                                                			],
                                                			"index": "number"
                                                		}
                                                	@end-meta-configuration
                                                */

	if (typeof pattern == "string") {
		pattern = new RegExp(pattern);
	}

	//: @note: Cannot use clazof here.
	if (!(pattern instanceof RegExp)) {
		throw new Error("invalid pattern");
	}

	if (truly(index) && typeof index != "number") {
		throw new Error("invalid index");
	}

	text = stringe(text);

	if (falzy(text)) {
		if (falzy(index)) {
			return EMPTY_STRING;
		}

		return [];
	}

	var result = raze(text.match(pattern));

	if (truly(index)) {
		return result[index] || EMPTY_STRING;
	}

	return result;
};

module.exports = mtch;

//# sourceMappingURL=mtch.support.js.map