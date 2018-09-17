
const assert = require( "assert" );
const raze = require( "./raze.js" );


assert.deepEqual( raze( [ 1, 2, 3 ] ), [ 1, 2, 3 ], "should be equal" );

assert.deepEqual( raze( [ { "name": "simple" } ] ), [ { "name": "simple" } ], "should be equal" );

assert.deepEqual( raze( ), [ ], "should be empty array" );

assert.deepEqual( raze( null ), [ ], "should be empty array" );

assert.deepEqual( raze( NaN ), [ ], "should be empty array" );

assert.deepEqual( raze( Infinity ), [ Infinity ], "should contain Infinity" );

assert.deepEqual( raze( true ), [ true ], "should contain true" );

assert.deepEqual( raze( [ ] ), [ ], "should be empty array" );

assert.deepEqual( raze( { } ), [ { } ], "should contain empty object" );

assert.deepEqual( raze( Symbol.for( "hello" ) ), [ Symbol.for( "hello" ) ], "should contain hello symbol" );

let duration = Date.now( );

assert.deepEqual( raze( Object ), [ Object ], "should contain Object function" );

console.log( "ok", Date.now( ) - duration, "ms" );
