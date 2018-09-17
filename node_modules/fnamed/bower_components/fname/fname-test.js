
const assert = require( "assert" );
const fname = require( "./fname.js" );

assert.equal( fname( "test" ), "test", "should return string 'test'" );

assert.equal( fname( function test( ){ } ), "test", "should return function name 'test'" );

assert.equal( fname( ( { test( ){ } } ).test ), "test", "should return function name 'test'" )

assert.equal( fname( Error ), "Error", "should return 'Error'" );

assert.equal( fname( ), "", "should return empty string" );

assert.equal( fname( function( ){ } ), "", "should return empty string" );

assert.equal( fname( ( ) => { } ), "", "should return empty string" );

assert.equal( fname( ( entity ) => ( typeof entity == "string" ) ), "", "should return empty string" );

console.log( "ok" );
