
const assert = require( "assert" );
const pyck = require( "./pyck.js" );

assert.deepEqual( pyck( [ 1 ] ), [ ], "should be equal to empty array" );;

assert.deepEqual( pyck( [ 1, 2, 3, "hello" ], STRING ), [ "hello" ], "should be equal to [ 'hello' ]" );

assert.deepEqual( pyck( [ true, 2, 3, "hello" ], NUMBER, true ), [ 2, 3 ], "should be equal to [ 2, 3 ]" );

assert.deepEqual( pyck( [ { }, 1, 2, 3 ], OBJECT ), [ { } ], "should be equal to [ { } ]" );

assert.deepEqual( pyck( [ 1, 2, 3 ], [ 1 ] ), [ 1 ], "should be equal to [ 1 ]" );

assert.deepEqual( pyck( [ 1, 2, 3, [ 4, 5, 6, "a" ] ], NUMBER ), [ 1, 2, 3 ], "should be equal to [ 1, 2, 3 ]" );

assert.deepEqual( pyck( [ Date, 1, 2, 3 ], Date ), [ Date ], "should be equal to [ Date ]" );

assert.deepEqual( pyck( [ Array, 1, 2, 3, { } ], FUNCTION ), [ Array ], "should be equal to [ Array ]" );

( function( ){

	assert.deepEqual( pyck( arguments, BOOLEAN ), [ ], "should be equal to empty array" );

} )( 1, 2, "hello" );

console.log( "ok" );
