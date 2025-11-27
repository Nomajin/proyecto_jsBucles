// Dada una secuencia de números leídos por teclado, que acabe con un –1, por ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,……,-1; 

// Realizar el algoritmo que calcule la media aritmética. Suponemos que el usuario no insertará números negativos.


const prompt = require('prompt-sync')();

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
