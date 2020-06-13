const path = require('path'); // rutas de proyecto
const webpack = require('webpack'); // configuracion de la compilacion
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Modo de desarrollo
    entry: './Client/Index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './Client/Index-Bootstrap.html'
        })
    ]

};