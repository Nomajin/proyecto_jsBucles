//https://www.npmjs.com/package/prompt-sync
//Para instalar prompt-sync: npm i prompt-sync

//3. Algoritmo que nos calcule la suma de los N primeros números naturales. N se leerá por teclado.


const prompt = require('prompt-sync')();

formatoOK = true;

let N = prompt('Introduzca un numero');

N = Number(N);

let contador = 0;

let acumulador = 0;


// Inicializa acumulador a 0

while (contador < N) {

    acumulador = acumulador + contador;

    contador ++;
}

console.log(`${acumulador}`)