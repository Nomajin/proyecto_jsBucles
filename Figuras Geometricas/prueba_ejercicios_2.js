const prompt = require('prompt-sync')();

/* Ejercicio 11

const N1 = Number(prompt('Dime un primer numero: '))

const N2 = Number(prompt('Dime un segundo numero: '))

let suma = Number = N1 + N2;

if ( suma > 0){

    console.log(suma)

    console.log(' Esta suma es positiva')
}

if ( suma < 0){

    console.log(suma)

    console.log(' Esta suma es negativa')
}

if ( suma === 0){

    console.log(suma)

    console.log(' Esta suma es igual a cero')
}
*/


/* Ejercicio 12

const N = Number(prompt('Dime un numero: '))

if (N % 2 === 0 && N % 5 === 0  ) {


    console.log(' El numero es de divisible entre 2 y 5')
    
    } else {

        console.log(' El numero no es divisible');

    }

*/


/* Ejercicio 13

const Peso = Number(prompt('Dime tu Peso: '));

const Altura = Number(prompt('Dime tu Altura: '));

let Sobrepeso = Altura - 100;

if ( Peso > Sobrepeso ) {
    console.log (' Tienes sobrepeso ')

} else {
    console.log (' No tienes sobrepeso ')

}
*/


/* Ejercicio 14

let Acumulador = 0;

for (let contador = 3; contador <= 99;) {


   
    Acumulador = Acumulador + contador;
 console.log (Acumulador);
     

    contador = contador + 3;
    
}

*/


/* Ejercicio 15

for (let contador = 7; contador <= 51;) {

    console.log (contador);

    contador = contador + 2;
}

*/

/* Ejercicio 16

let N = Infinity;

let NºPositivos = 0;

let NºNegativos = 0;


while (N != 0) {

    N = Number(prompt('Dime un numero: '));

    if (N > 0) {

        NºPositivos++;

    }

     if (N < 0) {

        NºNegativos++;

    }

}

 console.log (` Hay ${NºPositivos} numeros positivos`);
 console.log (` Hay ${NºNegativos} numeros negativos`);
 
*/

let cajero;

cajero = Number(prompt('Dime un cajero '));



function ventas1(cajero) {

    let NºVentas1 = 0;

    let NºVentas_dia1 = 0;

    let NºVentas_dia2 = 0;

    let NºVentas_dia3 = 0;

    let venta1 = Infinity;

    let venta1_2 = Infinity;

    let venta1_3 = Infinity;

    let Acumulador1 = 0;

    let Acumulador2 = 0;

    let Acumulador3 = 0;


        while (venta1 > 0) {

             venta1 = Number(prompt('Dime las ventas del dia 1: '));
             console.log (` `);

            if (venta1 != 0) {
                
                Acumulador1 = Acumulador1 + venta1;

                NºVentas1++;

                NºVentas_dia1 ++;

            }

        }

        if (venta1===0) {

             while (venta1_2 > 0) {

             venta1_2 = Number(prompt('Dime las ventas del dia 2: '));
             console.log (` `);

                if (venta1_2 != 0) {

                    Acumulador2 = Acumulador2 + venta1_2;

                    NºVentas1++;

                    NºVentas_dia2++;

                }
            }

            
        }

        if (venta1_2===0) {

             while (venta1_3 > 0) {

                venta1_3 = Number(prompt('Dime las ventas del dia 3: '));
                console.log (` `);

                    if (venta1_3 != 0) {

                        Acumulador3 = Acumulador3 + venta1_3;

                        NºVentas1++;

                        NºVentas_dia3++;
            
                     }       
            }
 
        }

    let ventas_totales = Acumulador1 + Acumulador2 + Acumulador3;

    
    console.log (`Han habido ${NºVentas1} ventas `);

    console.log (`Han habido ${NºVentas_dia1} ventas en el primer dia `);

    console.log (`Han habido ${NºVentas_dia2} ventas en el segundo dia `);

    console.log (`Han habido ${NºVentas_dia3} ventas en el tercer dia `);

    console.log (`El total de ventas ha sido ${ventas_totales} € `);

}


    


    if ( cajero === 1) {

            console.log (ventas1 (cajero) );

    }

