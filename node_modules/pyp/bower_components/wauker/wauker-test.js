
const assert = require( "assert" );
const wauker = require( "./wauker.js" );

assert.deepEqual( wauker( Array ).map( ( constructor ) => constructor.name ),
	[ "Array" ], "should be equal to [ 'Array' ]" );

assert.deepEqual( wauker( RangeError ).map( ( constructor ) => constructor.name ),
	[ "RangeError", "Error" ], "should be equal to [ 'RangeError', 'Error' ]" );

class Orange {
	constructor( ){ }
}

class Apple extends Orange {
	constructor( ){ super( ); }
}

class Pear extends Apple {
	constructor( ){ super( ); }
}

assert.deepEqual( wauker( Pear ).map( ( constructor ) => constructor.name ),
	[ "Pear", "Apple", "Orange" ], "should be equal to [ 'Pear', 'Apple', 'Orange' ]" );

assert.deepEqual( wauker( new Pear( ) ).map( ( constructor ) => constructor.name ),
	[ "Pear", "Apple", "Orange" ], "should be equal to [ 'Pear', 'Apple', 'Orange' ]" );

assert.deepEqual( wauker( ), [ ], "should be equal to [ ]" );

assert.deepEqual( wauker( "hello" ), [ ], "should be equal to [ ]" );

assert.deepEqual( wauker( 123 ), [ ], "should be equal to [ ]" );

assert.deepEqual( wauker( { } ), [ ], "should be equal to [ ]" );

assert.deepEqual( wauker( function( ){ } ), [ ], "should be equal to [ ]" );

assert.deepEqual( wauker( ( ) => { } ), [ ], "should be equal to [ ]" );

console.log( "ok" );
