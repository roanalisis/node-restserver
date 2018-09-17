
const assert = require( "assert" );
const plough = require( "./plough.js" );

assert.deepEqual( plough( ), [ ], "should return [ ]" );

assert.deepEqual( plough( [ ] ), [ ], "should return [ ]" );

assert.deepEqual( plough( [ 1, 2, 3, [ 4, 5, 6 ] ] ), [ 1, 2, 3, 4, 5, 6 ],
	"should return [ 1, 2, 3, 4, 5, 6 ]" );

( function ( ){
	assert.deepEqual( plough( arguments ), [ "hello", "world", 1, 2, 3, "yeah", 4, 5, 6 ],
	"should return [ 'hello', 'world', 1, 2, 3, 'yeah', 4, 5, 6 ]" );
} )( [ "hello", [ "world" ], 1, 2, 3 ], [ "yeah", 4, 5, 6 ] );

console.log( "ok" );
