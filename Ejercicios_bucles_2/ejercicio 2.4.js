//4. Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares. 
// Es decir, si insertamos un 5, tendremos la suma de 2+4+6+8+10.
const prompt = require('prompt-sync')();

const N = Number (prompt('Que numero eliges? '));
let Acumulador = 0;
let contador = 0;


    while (contador <= N*2) {


        if (contador % 2 === 0) {
            //contador es par

            Acumulador = Acumulador + contador;

            console.log (`Numero Par ${Acumulador}`);

        }

     contador++;
        
    }

    console.log ( ` Total de nº1 pares ${Acumulador} `)
