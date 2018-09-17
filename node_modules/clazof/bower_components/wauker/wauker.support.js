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
              			"package": "wauker",
              			"path": "wauker/wauker.js",
              			"file": "wauker.js",
              			"module": "wauker",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/wauker.git",
              			"test": "wauker-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Walks the inheritance tree.
              
              		This will return a list of inherited constructors.
              	@end-module-documentation
              
              	@include:
              		{
              			"een": "een",
              			"falzy": "falzy",
              			"fname": "fname"
              		}
              	@end-include
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var een = require("een");
var falzy = require("falzy");
var fname = require("fname");

var FUNCTION_CLASS = "Function";
var OBJECT_CLASS = "Object";

var wauker = function wauker(entity) {
	/*;
                                      	@meta-configuration:
                                      		{
                                      			"entity:required": [
                                      				"object",
                                      				"function"
                                      			]
                                      		}
                                      	@end-meta-configuration
                                      */

	var constructor = entity;
	if ((typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) == "object") {
		constructor = entity.constructor;
	}

	var name = fname(constructor);
	if (
	falzy(constructor) ||
	falzy(name) ||
	typeof constructor != "function" ||
	name === FUNCTION_CLASS ||
	name === OBJECT_CLASS)
	{
		return [];
	}

	var tree = [constructor];
	var prototype = constructor.prototype;
	while (prototype = (0, _getPrototypeOf2.default)(prototype)) {
		/*;
                                                               	@note:
                                                               		Discard root of the chain.
                                                               		The root of the chain can be the Function or Object class.
                                                               	@end-note
                                                               */
		constructor = prototype.constructor;
		var _name = fname(constructor);
		if (
		falzy(_name) ||
		_name === FUNCTION_CLASS ||
		_name === OBJECT_CLASS)
		{
			continue;
		}

		if (!een(tree, constructor)) {
			tree.push(constructor);
		}
	}

	return tree;
};

module.exports = wauker;

//# sourceMappingURL=wauker.support.js.map