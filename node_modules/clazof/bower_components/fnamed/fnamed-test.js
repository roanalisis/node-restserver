
const assert = require( "assert" );
const fnamed = require( "./fnamed.js" );

assert.equal( fnamed( function test( ){ } ), true, "should return true" );

assert.equal( fnamed( Error ), true, "should return true" );

assert.equal( fnamed( function( ){ } ), false, "should return false" );

assert.equal( fnamed( ( ) => { } ), false, "should return false" );

assert.equal( fnamed( ( entity ) => ( typeof entity == "string" ) ), false, "should return false" );

assert.equal( fnamed( "function hello( ){ }" ), false, "should return false" );

console.log( "ok" );
