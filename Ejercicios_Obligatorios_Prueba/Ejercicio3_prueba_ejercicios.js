/* El  juego de adivinar un número. El valor a adivinar lo tendremos puesto en una variable el valor que nosotros queramos.

El número será entre 1 y 100. El programa debe dar pistas de si el número a adivinar es mayor o menor que el introducido.

Tendremos que hacer los siguientes subprocesos (funciones):

leerNumero(): Pide un numero y hasta que el usuario no escribe un valor entre 1 y 100,   vuelve a pedir el valor.

comprobarValor(numeroUsuario, numeroCorrecto): comprueba si el número es correcto; 
éste  devuelve un número que puede ser:  0:
los dos numeros son iguales  1: el numeroUsuario es mayor que el numeroCorrecto 
 
-1: el numeroUsuario es menor que el numeroCorrecto. (3,3 puntos) */

let prompt = require('prompt-sync')();

let N = Infinity;
N = Number (N);
let N_secreto = 43;
N_secreto = Number (N_secreto);


    while (N >= 1 && N <= 100 || N === Infinity) {

        N = Number (prompt( ' Dime un numero entre 1 y 100 = ') )

        if (N < N_secreto) {

            console.log( '-1 ( El numero es mayor  )' );
        }

         if (N > N_secreto) {

            console.log( '1 ( El numero es menor )' );
        }
         if (N === N_secreto) {

            console.log( '0 ( Has acertado )' );
            break;
            
        }
        
    }



