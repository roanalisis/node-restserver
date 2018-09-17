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
			"package": "zelf",
			"path": "zelf/zelf.js",
			"file": "zelf.js",
			"module": "zelf",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/zelf.git",
			"test": "zelf-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Returns window for client, global for server and if nothing match, return itself.
	@end-module-documentation

	@include:
		{
			"asea": "asea"
		}
	@end-include
*/

const asea = require( "asea" );

const zelf = function zelf( self ){
	/*;
		@meta-configuration:
			{
				"self:required": "object"
			}
		@end-meta-configuration
	*/

	self = self || this;

	if( asea.SERVER && ( self === global || typeof self == "undefined" || self === null ) ){
		return global;
	}

	if( asea.CLIENT && ( self === window || typeof self == "undefined" || self === null ) ){
		return window;
	}

	if( asea.SERVER && typeof self == "undefined" ){
		return global;
	}

	if( asea.CLIENT && typeof self == "undefined" ){
		return window;
	}

	return self;
};

module.exports = zelf;
