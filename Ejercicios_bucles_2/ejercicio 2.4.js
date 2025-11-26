//4. Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares. 
// Es decir, si insertamos un 5, tendremos la suma de 2+4+6+8+10.

const prompt = require('prompt-sync')();

let n = prompt ('Introduzca n: ') //devuelve string
n = Number (n);

if (!Number.isNaN(n)) {
    // n es number

    let contador = 0;

    let acumulador = 1;

    while (contador < n) {

    console.log ( ` contador = ${contador} `)
    console.log ( ` contador = ${ acumulador}`)

        if (contador % 2 === 0) {
            //contador es par

            console.log (`contador par`);

            acumulador = acumulador + contador;
        }

        ++contador;
        
    }

    console.log ( ` Total de nº1 pares ${acumulador} `)

} else {
    console.log(`n no es un numero`)
}
