
const assert = require( "assert" );
const shft = require( "./shft.js" );

assert.deepEqual( shft( [ 1, 2, 3 ] ), [ 2, 3 ], "should return [ 2, 3 ]" );

assert.deepEqual( shft( [ 1, 2, 3, 4, 5 ], 2 ), [ 3, 4, 5 ], "should return [ 3, 4, 5 ]" );

assert.deepEqual( shft( [ 1, 2, 3, 4, 5 ], -2 ), [ 4, 5 ], "should return [ 4, 5 ]" );

( function( ){

	assert.deepEqual( shft( arguments, 2 ), [ "hello", Symbol.for( "hi" ) ], "should return [ 'hello', Symbol.for( 'hi' ) ]" );

} )( Symbol.for( "hello" ), 2, "hello", Symbol.for( "hi" ) );

console.log( "ok" )
