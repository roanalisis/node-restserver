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
*/

const harden = require( "harden" );

harden( "CLIENT", Symbol( "client" ) );
harden( "SERVER", Symbol( "server" ) );
harden( "UNSUPPORTED", Symbol( "unsupported" ) );

const asea = function asea( ){
	if( asea.CLIENT ){
		return CLIENT;

	}else if( asea.SERVER ){
		return SERVER;

	}else{
		return UNSUPPORTED;
	}
};

harden( "CLIENT", (
	typeof window != "undefined" &&
	typeof document != "undefined" &&
	typeof window.constructor == "function" &&
	typeof document.constructor == "function" &&
	window.constructor.name == "Window" &&
	document.constructor.name == "HTMLDocument"
), asea );

harden( "SERVER", (
	typeof module != "undefined" &&
	typeof global != "undefined" &&
	!!module.exports &&
	!!global.process &&
	!!global.process.env
), asea );

harden( "UNSUPPORTED", (
	asea.CLIENT === false &&
	asea.SERVER === false
), asea );

module.exports = asea;
