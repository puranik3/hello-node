var http = require( 'http' );
var express = require( 'express' );



var server = http.createServer( function( req, res ) {
	res.writeHead( 200, { 'Content-Type': 'text/plain' } );
  	res.end( 'hello, world' );
});

server.listen( 3000, function( err ) {
	if( err ) {
		console.log( 'some erroroccured starting the server' );
	}
	console.log( 'server started successfully, listening on port 3000' );
});
