const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // regrsa el cascaron vacio de la aplicacion

app.use(express.static(__dirname + '/public')); // especificando donde se encontrara mi archivo static HTML 

app.use(bodyParser.urlencoded({ extended: false })); // FALSE deine que parse solo elementos de tipo cadena 

app.post('/calculadora', (req, res) => {
    var num1 = req.body.numero1; // regresa lo que encuentra en el formualrio con el nombre (NAME) de numero1 (TEXTO)
    var num2 = req.body.numero2; // regresa lo que encuentra en el formualrio con el nombre (NAME) de numero2 (TEXTO)

    num1 = parseInt(num1); //modo de parse a tipo entero desde un text
    num2 = parseInt(num2); //modo de parse a tipo entero desde un text 

    var resultado = num1 + num2;
    var pagina = '<!DOCTYPE html><html lang="en"><head><title>Resultado</title></head><body>';
    pagina += '<h2>El resultado de la suma es ' + resultado + '</h2>';
    pagina += '</body></html>';
    res.send(pagina);

    //REUTILIZAR LOS MODULOS DE CALCULADORA PARA SOLO INVOCAR LAS FUNCIONES REALIZADAS PREVIAMENTE 
    // SE DEBERAN PODER RESOLVER LAS 4 OPERACIONES BASICAS
    //SUMA 1 
    //RESTA 2 
    //MULTIPLICACION 3 
    // var opcion = req.body.operacion; 
    // if(opcion === 'suma'){
    //  resultado =   suma(num1, num2); 

    //} 

    //DIVISION 4 

    // SELECT (CON LAS CUATRO OPCIONES )

    // LA CALCULADORA DEBERA DECIR QUE OPERACION SE SELECIONO Y CUAL ES EL RESULTADO




});

app.listen(9000, () => {
    console.log("Servidor Levantado en el puerto 9000")
});