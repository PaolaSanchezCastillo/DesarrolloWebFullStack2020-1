const Operaciones = {}

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

//console.log("La suma es:", suma(5, 6));
//console.log("La resta es:", resta(8, 24));

// Con exports puedo exportar algunos elementos explicimente
//exports.suma = suma;
//exports.resta = resta;

// Para exportar las atributos, funciones, etc. 

module.exports = Operaciones;

Operaciones.suma = suma;
Operaciones.resta = resta;