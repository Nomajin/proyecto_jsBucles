//5. Se necesita un programa para calcular el factorial de un número dado, 
// que corresponda a la fórmula: N! = N*(N-1)*(N-2)* ... *(N-(N-1)).

let prompt = require('prompt-sync')();

formatoOk = true;

let N_1 = prompt (' Dime un numero para saber su factorial = ');
N_1 = Number (N_1);

if (Number.isNaN(N_1)) {
    console.log ( 'Formato numero incorrecto')
    formatoOk = false;
}

// Factorial se inicializa en uno para que vaya multiplicando desde el numero que damos hasta 1
let N_factorial = 1;

if (formatoOk === true) {

    for ( let contador = N_1; contador > 1; contador --) {

        N_factorial = N_factorial * contador;

        console.log ( `Su factorial es = ${N_factorial}` );


    }

}




