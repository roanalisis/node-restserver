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
              			"package": "clazof",
              			"path": "clazof/clazof.js",
              			"file": "clazof.js",
              			"module": "clazof",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/clazof.git",
              			"test": "clazof-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Functional instanceof.
              
              		This will walk the inheritance tree.
              
              		Multiple blueprint is strictly evaluated, so if one of them is falsy
              			then this will return false.
              	@end-module-documentation
              
              	@include:
              		{
              			"annon": "annon",
              			"falzy": "falzy",
              			"fname": "fname",
              			"portel": "portel",
              			"protype": "protype",
              			"raze": "raze",
              			"stringe": "stringe",
              			'wauker': "wauker"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var annon = require("annon");
var falzy = require("falzy");
var fname = require("fname");
var portel = require("portel");
var protype = require("protype");
var raze = require("raze");
var stringe = require("stringe");
var wauker = require("wauker");

var clazof = function clazof(entity, blueprint) {
	/*;
                                                 	@meta-configuration:
                                                 		{
                                                 			"entity:required": [
                                                 				"object",
                                                 				"function",
                                                 				"*"
                                                 			],
                                                 			"blueprint:required": [
                                                 				"function",
                                                 				"string",
                                                 				"..."
                                                 			]
                                                 		}
                                                 	@end-meta-configuration
                                                 */

	if (arguments.length > 2) {
		return raze(arguments).splice(1).
		filter(function (blueprint) {return protype(blueprint, FUNCTION, STRING);}).
		every(function (blueprint) {return clazof(entity, blueprint);});
	}

	if (!protype(blueprint, FUNCTION + STRING)) {
		throw new Error("invalid blueprint");
	}

	if (falzy(entity) || !protype(entity, OBJECT + FUNCTION)) {
		entity = portel(entity);
	}

	if (
	(typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) == "object" &&
	typeof blueprint == "function" && (
	entity instanceof blueprint || entity.instanceOf(blueprint)))
	{
		return true;
	}

	if (
	typeof entity == "function" &&
	typeof blueprint == "function" && (
	annon(entity) || annon(blueprint)))
	{
		return false;
	}

	return wauker(entity).concat([Function, Object]).
	some(function (constructor) {
		return (
			fname(constructor) == fname(blueprint) ||
			stringe(constructor) == stringe(blueprint));

	});
};

module.exports = clazof;

//# sourceMappingURL=clazof.support.js.map