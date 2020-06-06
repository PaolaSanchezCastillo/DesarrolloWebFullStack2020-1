var http = require('http');
var fecha = require('./Fecha');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write('La fecha actual es ' +
        fecha.regresaFecha());
    res.end(' Saludos');
}).listen(8090);