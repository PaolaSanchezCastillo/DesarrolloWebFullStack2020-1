// generar el proyecto 
// npm init -y 
// 

// 1er paso es alzar el servidor
// 1.1 utilizar express 

const express = require('express');
const routeAdministrator = require('./RouteAdministrator');
// 2do paso utilizar la app basica regresada por express 

const app = express(); //regresa una aplicacion (cascaron) de express 

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    // Una promesa en javascript es im objeto que representa la terminacion o 
    // el fracaso de una funcion asincrona 
    // las promesas devuelven funciones de tipo callback 

}


// HACER UNA FUNCION QUE IMITE UN ERROR DE CONEXION 

//async function conexionDB() {
//    return new Promise((resolve, reject) => setTimeout(reject(new Error('La conexion a mi BD LOCAL no pudo ser lograda')), 3000)); //
//}



app.get('/src/:userId', (req, res) => { // el primer parametro de get es la ruta que va a leer el servidor  
    // el segundo parametro es la funcion que tendra la peticion y la respuesta

    res.json({
        id: req.params.userId,
        nombre: 'Paola',
        edad: 26

    });


});

// aqui se debe especificar el uso de la funcion asincrona del callback

app.get('/src', routeAdministrator(async(req, res) => { // el primer parametro de get es la ruta que va a leer el servidor  
    // el segundo parametro es la funcion que tendra la peticion y la respuesta

    // await conexionDB();
    await sleep(4000);
}));


app.listen(8090, () =>
    console.log('Servidor levantado en el puerto 8090'));