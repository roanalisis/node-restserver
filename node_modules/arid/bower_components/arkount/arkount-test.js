const assert = require( "assert" );
const arkount = require( "./arkount.js" );

assert.equal( arkount( [ 1, 2, 3 ] ), 3, "should return 3" );

assert.equal( arkount( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] ), 2, "should return 2" );

let array = [ ];
array[ 1000 ] = 10;
assert.equal( arkount( array ), 1, "should return 1" );

assert.equal( arkount( [ { "hello": "world", "name": "simple" },
				{ "option": { "merchant": "biyaheroes" } } ] ),
				2, "should return 2" );

let data = { };
data[ Symbol( "hello" ) ] = 12345;
assert.equal( arkount( [ data ] ), 1, "should return 1" );

assert.equal( arkount( ), 0, "should return 0" );

assert.equal( arkount( [ ] ), 0, "should return 0" );

console.log( "ok" );
