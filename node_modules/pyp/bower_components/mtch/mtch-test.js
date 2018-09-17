
const assert = require( "assert" );
const mtch = require( "./mtch.js" );

assert.equal( mtch( "hello world", /hello/, 0 ), "hello", "should return 'hello'" );

assert.deepEqual( mtch( "hello world", /hello/ ), [ "hello" ], "should return [ 'hello' ]" );

console.log( "ok" );
