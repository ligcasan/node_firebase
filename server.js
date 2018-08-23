var http = require('http');
var ger = require('ger');
var admin = require('firebase-admin');

function onRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Content-Type');
  console.log(ger);
  console.log(admin)
  response.end();
}

http.createServer(onRequest).listen(8000);
