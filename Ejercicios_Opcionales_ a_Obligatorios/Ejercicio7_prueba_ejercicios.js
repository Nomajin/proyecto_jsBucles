// 7. Necesitamos un sistema que capture 20 números y después de capturarlos que haga la revisión de estos para indicarnos 
// cuantos son pares y cuántos son impares.

let prompt = require('prompt-sync')();

let contador = 1;
contador = Number (contador);

let secuenciador = 1;
secuenciador = Number (secuenciador);


let contador_pares = 0;
contador = Number (contador_pares);

let contador_impares = 0;
contador_impares = Number (contador_impares);



while (contador != 20) {

    let N = prompt (' Dime el numero ' + secuenciador + ': ');

    secuenciador++;
    contador++;
    

    if (N % 2 === 0) { // Revisa si el resto de dividir el numero indicado entre dos es 0

        contador_pares++;

    }

    if (N % 2 != 0) { // Revisa si el resto de dividir el numero indicado entre dos es distinto de 0

        contador_impares++;

    }

    if ( contador === 20) { // Muestra la cantidad de numeros pares e impares cuando el contador llega al fin del programa

        console.log ( ` Hay ${ contador_pares } numeros pares `);

        console.log ( ` Hay ${ contador_impares } numeros impares `);



    }

}
