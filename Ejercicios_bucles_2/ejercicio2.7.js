
//Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el mínimo y la media de todos ellos.


const prompt = require('prompt-sync')();

let max = 0;
let min = Infinity;
let N;
contador = 0;
acumulador = 0;

while (N != 0) {
    
    prompt('Dime numeros');

    if (N != 0) {

        if ( N > max) {

        max = N;
        }

        if ( N < min) {

        min = N;
        }
        
    }
    

    acumulador = acumulador + N;
    contador++;
}

console.log(` El maximo es: ${ max}, el minimo es ${min}, La media es ${acumulador/contador}`)


