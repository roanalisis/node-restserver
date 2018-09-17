const assert = require( "assert" );
const arid = require( "./arid.js" );

assert.equal( arid( [ ] ), true, "should return true" );

assert.equal( arid( [ 1, 2, 3 ] ), false, "should return false" );

console.log( "ok" );
