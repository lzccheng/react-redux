var http = require('http');
var port = 5400;

var server = http.createServer(function(req,res){
  res.setHeader('Content-Type','text/html');
  res.end('index');
});
server.listen(port);
