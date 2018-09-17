const assert = require( "assert" );
const wichevr = require( "./wichevr.js" );

assert.equal( wichevr( "", false, true ), true, "should return true" );

assert.equal( wichevr( 1, "hello", true ), 1, "should return 1" );

assert.deepEqual( wichevr( false, [ ], [ 1, 2, 3 ] ), [ 1, 2, 3 ], "should be deeply equal" );

let test = function hello( ){ };
assert.deepEqual( wichevr( false, Symbol.for( "id" ), test ), test, "should return value of test variable" );

assert.equal( wichevr( null, Symbol.for( "hello" ) ), Symbol.for( "hello" ),
				"should be deeply equal" );

assert.deepEqual( wichevr( { }, Symbol.for( "cloaked" ), true ), { }, "should return empty object" );

class ClassA{
	constructor( ){ }
	method( ){ return "hello"; }
}

let testA = new ClassA( );
assert.deepEqual( wichevr( { }, testA ), { }, "should be deeply equal" );
assert.deepEqual( wichevr( testA, { } ), testA, "should be deeply equal" );

let test2 = function hello( ){ };
assert.deepEqual( wichevr( test2, "hello", true ), test2, "should return value of test variable" );

assert.equal( wichevr( "", false, "hello" ), "hello", "should return 'hello'" );

assert.deepEqual( wichevr( "", false, arguments ), arguments, "should return arguments" );

let test4 = function hello( ){ return "hello" };
assert.deepEqual( wichevr( test4,
					function procedure( ){ throw new Error( "no operation" ) } ),
					test4, "should be deeply equal" );

let test3 = function hello( ){ return "hello" };
assert.deepEqual( wichevr( test3, true, false ), test3, "should be deeply equal" );

assert.equal( wichevr( false, function hello( ){ return "hello" }, true ), true, "should return true" );

assert.equal( wichevr( "", "yeah", { } ), "yeah", "should have value 'yeah'" );

assert.deepEqual( wichevr( [ ], true ), [ ], "should be deeply equal" );

assert.equal( wichevr( true, [ ] ), true, "should return true" );

assert.equal( wichevr( Infinity, "", null ), Infinity, "should be equal" );

assert.deepEqual( wichevr( null, { } ), { }, "should be deeeply equal" );

assert.equal( wichevr( null, undefined, NaN.toString( ) ), NaN.toString( ), "should be equal" );

assert.equal( wichevr( 0, 1 ), 1, "should have value 1" );

assert.equal( wichevr( 0, "" ), "", "should have empty string" );

assert.deepEqual( wichevr( 0, { } ), { }, "should have empty object" );

assert.equal( wichevr( 0, { }, true ), true, "should have boolean true" );

assert.equal( wichevr( "yeah", 0, { } ), "yeah", "should have value 'yeah'" );

assert.deepEqual( wichevr( { }, 0, "yeah" ), { }, "should be equal" );

console.log( "ok" );
