console.log('Escribe tu nombre'); // salida de texto 

var entrada = process.openStdin(); // la variable entrada invoca a process
// openStdin() funcion que permite un buffer de entrada de datos


// addListener lee la entrada y hace algo con ella
entrada.addListener("data", function(nombre) {
    console.log('Tu nombre es: ' + nombre.toString().trim() + ' como estas? ');
    process.exit();
});