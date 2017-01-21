var express = require('express');
var server = express();

var port = 8080;

server.get('/', function(request, response){
  response.sendfile('index.html', {root: __dirname + '/public/html'})
});

server.listen(port, function(){
  console.log("listening on port");
} );
