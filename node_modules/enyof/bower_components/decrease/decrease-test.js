
const assert = require( "assert" );
const decrease = require( "./decrease.js" );

assert.deepEqual( decrease( [ 1, 2, 3, 4, 5 ] ), [ 1, 2, 3, 4 ], "should return [ 1, 2, 3, 4 ]" );

assert.deepEqual( decrease( [ 1, 2, 3, null ] ), [ 1, 2, 3 ], "should return [ 1, 2, 3 ]" );

assert.deepEqual( decrease( [ null, 1, 2, 3 ] ), [ 1, 2 ], "should return [ 1, 2 ]" );

assert.deepEqual( decrease( [ 1, 2, NaN, 3 ] ), [ 1, 2 ], "should return [ 1, 2 ]" );

let test = decrease( [ 1, 2, 3 ], function sum( previous, current ){
	return previous + current;
} );
assert.deepEqual( test, [ 7 ], "should return [ 7 ]" );

let test2 = decrease( [ 1, 2, 3 ], function sum( previous, current ){
	return previous + current;
}, 0 );
assert.deepEqual( test2, [ 6 ], "should return [ 6 ]" );

console.log( "ok" );
