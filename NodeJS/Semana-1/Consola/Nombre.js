const readline = require('readline-sync');

function pedirNombre() {
    let nombre = readline.question('Escribe tu nombre ');
    console.log('Hola ', nombre);
}



exports.pedirNombre = pedirNombre;

/* function pedirNombre() {
    var entrada = '';
    entrada = process.openStdin();
    console.log('Escribe tu nombre'); // salida de texto 
    // la variable entrada invoca a process
    // openStdin() funcion que permite un buffer de entrada de datos
    // addListener lee la entrada y hace algo con ella
    entrada.addListener("data", function(nombre) {
        console.log('Tu nombre es: ' + nombre.toString().trim() + ' como estas? ');
        process.exit();
    }); */