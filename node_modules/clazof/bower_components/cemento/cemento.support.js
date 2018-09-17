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
              			"package": "cemento",
              			"path": "cemento/cemento.js",
              			"file": "cemento.js",
              			"module": "cemento",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/cemento.git",
              			"test": "cemento-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Harden properties of entity.
              
              		This will replace enumerable properties with non-enumerable.
              
              		This will freeze the object.
              	@end-module-documentation
              
              	@include:
              		{
              			"harden": "harden",
              			"kount": "kount",
              		}
              	@end-include
              */var _freeze = require("babel-runtime/core-js/object/freeze");var _freeze2 = _interopRequireDefault(_freeze);var _keys = require("babel-runtime/core-js/object/keys");var _keys2 = _interopRequireDefault(_keys);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var harden = require("harden");
var kount = require("kount");

var cemento = function cemento(entity, context) {
	/*;
                                                 	@meta-configuration:
                                                 		{
                                                 			"entity:required": "object",
                                                 			"context": "object"
                                                 		}
                                                 	@end-meta-configuration
                                                 */

	if ((typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) != "object" || !entity || kount(entity) == 0) {
		throw new Error("invalid entity");
	}

	var data = entity;
	context = context || entity;

	entity = harden.bind(context);

	(0, _keys2.default)(data).forEach(function (property) {
		var value = data[property];

		try {delete data[property];} catch (error) {}

		entity(property, value);
	});

	try {
		return (0, _freeze2.default)(context);

	} catch (error) {
		throw new Error("cannot freeze context, " + error.stack);
	}
};

module.exports = cemento;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbWVudG8uc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwia291bnQiLCJjZW1lbnRvIiwiZW50aXR5IiwiY29udGV4dCIsIkVycm9yIiwiZGF0YSIsImJpbmQiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJ2YWx1ZSIsImVycm9yIiwic3RhY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1FLFVBQVUsU0FBU0EsT0FBVCxDQUFrQkMsTUFBbEIsRUFBMEJDLE9BQTFCLEVBQW1DO0FBQ2xEOzs7Ozs7Ozs7QUFTQSxLQUFJLFFBQU9ELE1BQVAsdURBQU9BLE1BQVAsTUFBaUIsUUFBakIsSUFBNkIsQ0FBQ0EsTUFBOUIsSUFBd0NGLE1BQU9FLE1BQVAsS0FBbUIsQ0FBL0QsRUFBa0U7QUFDakUsUUFBTSxJQUFJRSxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlDLE9BQU9ILE1BQVg7QUFDQUMsV0FBVUEsV0FBV0QsTUFBckI7O0FBRUFBLFVBQVNKLE9BQU9RLElBQVAsQ0FBYUgsT0FBYixDQUFUOztBQUVBLHFCQUFhRSxJQUFiLEVBQW9CRSxPQUFwQixDQUE2QixVQUFFQyxRQUFGLEVBQWdCO0FBQzVDLE1BQUlDLFFBQVFKLEtBQU1HLFFBQU4sQ0FBWjs7QUFFQSxNQUFHLENBQUUsT0FBT0gsS0FBTUcsUUFBTixDQUFQLENBQTBCLENBQS9CLENBQStCLE9BQU9FLEtBQVAsRUFBYyxDQUFHOztBQUVoRFIsU0FBUU0sUUFBUixFQUFrQkMsS0FBbEI7QUFDQSxFQU5EOztBQVFBLEtBQUc7QUFDRixTQUFPLHNCQUFlTixPQUFmLENBQVA7O0FBRUEsRUFIRCxDQUdDLE9BQU9PLEtBQVAsRUFBYztBQUNkLFFBQU0sSUFBSU4sS0FBSiw2QkFBc0NNLE1BQU1DLEtBQTVDLENBQU47QUFDQTtBQUNELENBakNEOztBQW1DQUMsT0FBT0MsT0FBUCxHQUFpQlosT0FBakIiLCJmaWxlIjoiY2VtZW50by5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJjZW1lbnRvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJjZW1lbnRvL2NlbWVudG8uanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImNlbWVudG8uanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiY2VtZW50b1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvY2VtZW50by5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImNlbWVudG8tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRIYXJkZW4gcHJvcGVydGllcyBvZiBlbnRpdHkuXG5cblx0XHRUaGlzIHdpbGwgcmVwbGFjZSBlbnVtZXJhYmxlIHByb3BlcnRpZXMgd2l0aCBub24tZW51bWVyYWJsZS5cblxuXHRcdFRoaXMgd2lsbCBmcmVlemUgdGhlIG9iamVjdC5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcImtvdW50XCI6IFwia291bnRcIixcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3Qga291bnQgPSByZXF1aXJlKCBcImtvdW50XCIgKTtcblxuY29uc3QgY2VtZW50byA9IGZ1bmN0aW9uIGNlbWVudG8oIGVudGl0eSwgY29udGV4dCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XHRcImNvbnRleHRcIjogXCJvYmplY3RcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHR5cGVvZiBlbnRpdHkgIT0gXCJvYmplY3RcIiB8fCAhZW50aXR5IHx8IGtvdW50KCBlbnRpdHkgKSA9PSAwICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZW50aXR5XCIgKTtcblx0fVxuXG5cdGxldCBkYXRhID0gZW50aXR5O1xuXHRjb250ZXh0ID0gY29udGV4dCB8fCBlbnRpdHk7XG5cblx0ZW50aXR5ID0gaGFyZGVuLmJpbmQoIGNvbnRleHQgKTtcblxuXHRPYmplY3Qua2V5cyggZGF0YSApLmZvckVhY2goICggcHJvcGVydHkgKSA9PiB7XG5cdFx0bGV0IHZhbHVlID0gZGF0YVsgcHJvcGVydHkgXTtcblxuXHRcdHRyeXsgZGVsZXRlIGRhdGFbIHByb3BlcnR5IF07IH1jYXRjaCggZXJyb3IgKXsgfVxuXG5cdFx0ZW50aXR5KCBwcm9wZXJ0eSwgdmFsdWUgKTtcblx0fSApO1xuXG5cdHRyeXtcblx0XHRyZXR1cm4gT2JqZWN0LmZyZWV6ZSggY29udGV4dCApO1xuXG5cdH1jYXRjaCggZXJyb3IgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgZnJlZXplIGNvbnRleHQsICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2VtZW50bztcbiJdfQ==
//# sourceMappingURL=cemento.support.js.map
