var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config');
var app = express();
app.set('port', (process.env.PORT || 8090));
app.use('/static', express.static(__dirname + '/dist'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.get('/', function(req, res, next) {
    res.send('3CT');
});

app.listen(app.get('port'), () => {
    console.log('Servidor inicializado');
});