const prompt = require('prompt-sync')();

/* Ejercicio 1

for (let contador = 0; contador <= 10; contador++) {

    console.log (contador);

}
*/

/* Ejercicio 2

for (let contador = 0; contador <= 10; contador++) {

    console.log (contador * contador);
    
    
}

*/

/* Ejercicio 3

const N = Number (prompt('Que numero eliges? '));

let Acumulador = 0;
for (let contador = 0; contador <= N; contador++) {

    Acumulador = Acumulador + contador;
    console.log (Acumulador);

}

*/

/* Ejercicio 4

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
*/

/* Ejercicio 5

let acumulador1 = 0
let contador = 0
let n;

let Media;

    while ( n != -1 ) {

        n = prompt ('Introduzca n: ');
        n = Number (n);

        if (n != -1) {

        acumulador2 = n;


        acumulador1 = acumulador1 + acumulador2;

            console.log (` Acumulador  es ${ acumulador1} `);

        contador ++;

          
        }
       
    } 

 Media = acumulador1 / contador;

  console.log (` contador ${contador} `)

  console.log (`La media de todos los numero es ${Media} `)

*/  

/* Ejercicio 6

const clave = 2020;
let intentos = 3;

while ( intentos != 0) {

    let clavesugerida = Number (prompt(' Que clave crees que es la correcta? '));

    if ( clavesugerida != clave) {

        intentos --;

        console.log (' Lo siento, no es correcto');

        console.log (' Te quedan ' + intentos + ' intentos' );

    } else {

    console.log (' Enhorabuena, has acertado');

        intentos = 0;

    }

    if (intentos=== 0) {

        console.log (' La clave era ' + clave );
        
    }
    
}

*/

/* Ejercicio 7

let max = 0;
let min = Infinity;

let N;

let contador = 0;
let Acumulador = 0;


while (N != 0) {

    N = Number (prompt(' Dime un numero: '));

    if (N != 0) {

        Acumulador = Acumulador + N;

    if (N > max) {

        max = N;
    }

    if (N < min) {

        min = N;
    }
        contador ++;
     } 
}

let Media = Acumulador/contador;

console.log (Acumulador);
console.log (max);
console.log (min);
console.log (Media);

*/


/* Ejercicio 8 y 9

let lado = Number (prompt('De cuanto quieres el lado?: '));

for (let contador = 1; contador <= lado; contador++) {

    if (contador === 2 || contador === 3) {

        console.log ("*" + " ".repeat(lado - 2) + "*");
 
    } else {

        console.log ("*".repeat(lado) );

    }
    
}

*/

// Ejercicio 10
function limpiarPantalla() {
    console.clear(); // Limpiar Pantalla
}

function obtenerHoraActual() {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    const ss = String(d.getSeconds()).padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
}

function reloj() {
    limpiarPantalla();
    console.log(obtenerHoraActual());

    setTimeout(reloj, 1000); // Esperar 1 Segundos
}

reloj();