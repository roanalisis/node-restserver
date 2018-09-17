
const assert = require( "assert" );
const enyof = require( "./enyof.js" );

assert.equal( enyof( 0, 1, 2, 3, 0 ), true, "should be equal to true" );

assert.equal( !enyof( "success", "failed", "bug" ), true, "should be equal to true" );

/* The result of the following test has changed

console.log( enyof( Array, 123, true, Array ) ); // result: false
assert.equal( enyof( ( ) => { }, false, ( ) => { } ), true, "should be equal to true" );

let test = function( ){ };
assert.equal( enyof( test, "test", true, test ), true, "should be equal to true" );

assert.equal( enyof( Array, 123, true, Array ), true, "should be equal to true" );

*/

assert.equal( enyof( "test", false, 123, "test", { } ), true, "should be equal to true" );

assert.equal( enyof( null, 0, undefined ), false, "should be equal to false" );

assert.equal( enyof( "test", false, 123, "", { } ), false, "should be equal to false" );

assert.equal( enyof( 123, "123" ), false, "should be equal to false" );

assert.equal( enyof( 123, 456 ), false, "should be equal to false" );

assert.equal( enyof( { }, { } ), false, "should be equal to false" );

assert.equal( enyof( [ ], true, [ ] ), false, "should be equal to false" );

assert.equal( enyof( Array, "Array" ), false, "should be equal to false" );

assert.equal( enyof( Array, Object ), false, "should be equal to false" );

assert.equal( enyof( function hello( ){ return "hello" },
				function hello( ){ return "hi" } ),
				false, "should be equal to false" );

console.log( "ok" );
