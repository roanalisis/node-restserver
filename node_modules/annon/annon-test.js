
const assert = require( "assert" );
const annon = require( "./annon.js" );

assert.equal( annon( function( ){ } ), true, "should be equal to true" );

assert.equal( annon( ( ) => { } ), true, "should be equal to true" );

assert.equal( annon( "" ), true, "should be equal to true" );

assert.equal( annon( function hello( ){ } ), false, "should be equal to false" );

assert.equal( annon( "test" ), false, "should be equal to false" );

console.log( "ok" );
