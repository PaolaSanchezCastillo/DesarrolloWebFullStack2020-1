const nombre = require('./Nombre.js');
const math = require('./Operaciones.js'); //mando a llamar al modulo operaciones
const readline = require('readline-sync');


//console.log(nombre);
nombre.pedirNombre();
console.log('Tienes las siguientes opciones');
console.log('Suma = a');
console.log('Resta = b');
console.log('Multiplicacion = b');
console.log('Division = c');

var opcion = readline.question('Que quiere hacer ');


if (opcion === 'a') {
    math.suma();
}
if (opcion === 'b') {
    math.resta();
}