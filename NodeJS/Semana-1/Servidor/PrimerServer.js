var http = require('http'); //Servicio http 

http.createServer(function(req, res) {
    res.writeHead(
        200, {
            'Content-type': 'text/html'
             });

    res.end('Hello World');

}).listen(8090);