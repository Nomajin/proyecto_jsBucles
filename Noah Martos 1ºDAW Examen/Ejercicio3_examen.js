/* Se desea programar un pequeño juego de caja fuerte en el que el ordenador “piensa” un
código secreto de 2 dígitos y el usuario tiene que descubrirlo.
● No hay límite de intentos: el usuario puede probar hasta acertar.
● El código secreto está formado por 2 números (dígitos) de 0 a 9, por ejemplo 3 7,
0 4, 9 9.
● El programa elegirá un código secreto formado por dos dígitos entre 0 y 9 cada
uno.
● En cada intento, el usuario deberá introducir dos números enteros entre 0 y 9 (el
primer dígito y el segundo dígito de la clave).
● El programa indicará, para cada uno de los dos dígitos, si el dígito del intento es:
○ igual al dígito secreto,
○ mayor que el dígito secreto,
○ o menor que el dígito secreto.
● El juego termina cuando el usuario acierta los dos dígitos en el mismo intento (la
caja fuerte se abre).
*/

const prompt = require('prompt-sync')();

min = Number(prompt('Dime el minimo: '))

max = Number(prompt('Dime el maximo: '))

numero_secreto1 = Math.floor(Math.random ( )*max);
numero_secreto2 = Math.floor(Math.random ( )*max);


numero_usuario1 = Infinity;
numero_usuario2 = Infinity;

 console.log ( numero_secreto1);
console.log ( numero_secreto2);
    





while (numero_usuario1 != numero_secreto1 && numero_usuario2 != numero_secreto2 ) {

    numero_usuario1 = (prompt(' Adivina el codigo secreto1'));
    numero_usuario2 = (prompt(' Adivina el codigo secreto2'));


   
    if ( numero_usuario1 === numero_secreto1 && numero_usuario2 === numero_secreto2 )

            console.log ( 'enhorabuena, has acertado')



    if (numero_usuario1 < 0 || numero_usuario1 > 10) {
         console.log ( 'Numero fuera del rango')

    }

     if (numero_usuario2 < 0 || numero_usuario2 > 10) {

        console.log ( 'Numero fuera del rango')

    }





}

  

    





