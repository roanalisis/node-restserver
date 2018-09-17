
const assert = require( "assert" );
const een = require( "./een.js" );
const eqe = require( "eqe" );

assert.equal( een( [ 1, 2, 3 ], 2 ), true, "should return true" );

assert.equal( !een( [ 1, 2, 3 ], 4 ), true, "should return true" );

assert.equal( !een( [ 1, 2, 3, [ 4 ] ], [ 4 ] ), true, "should return true" );

let source = [ 1, 2, 3, 7 ];
let target = [ 1, 2, 3, 4, 5, 6 ];

source.forEach( ( value ) => {
	!een( target, value, ( element, value ) => eqe( element, value ) ) &&
	target.push( value );
} );

assert.deepEqual( een( target, 7 ), true, "should return true" );

assert.equal( een( [ ] ), false, "should return false" );

assert.equal( een( "hello", "hello" ), true, "should return true" );

assert.equal( een( "hello", "world" ), false, "should return false" );

console.log( "ok" );
