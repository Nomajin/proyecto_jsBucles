//6.  Se necesita un sistema que solicita dos números, los cuales son un rango, 
// de los cuales queremos que imprima el total de la suma de todos los números que se encuentran dentro de este rango.

let prompt = require('prompt-sync')();

formatoOk = true;

let N_1 = prompt (' Dime el primer numero: ');
N_1 = Number (N_1);

if (Number.isNaN(N_1)) {
    console.log ( 'Formato numero incorrecto')
    formatoOk = false;
}

let N_2 = prompt (' Dime el primer numero: ');
N_2 = Number (N_2);

if (Number.isNaN(N_2)) {
    console.log ( 'Formato numero incorrecto')
    formatoOk = false;
}

let Suma_Total = 0;
Suma_Total = Number (Suma_Total);


if (formatoOk === true) {

    if ( N_1 > N_2) {
        // Bucle que realiza una suma y cada vez que se reincia el bucle la vuelve ha hacer pero siendo N_1, 
        // uno menos ( N_1 - 1)
        for (let contador = N_1; contador >= N_2; contador--) { 
            
            Suma_Total = Suma_Total + contador;

          console.log ( ` ${ Suma_Total } `);


        }

    }

    if ( N_1 < N_2) {

         for (let contador = N_2; contador >= N_1; contador--) {
            
            Suma_Total = Suma_Total + contador;

          console.log ( ` ${ Suma_Total } `);


        }

    }

    if ( N_1 === N_2) {

        console.log ( `Su suma total es ${N_1} `);

        
    }



}

