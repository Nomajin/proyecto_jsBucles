/* Se desea programar un pequeño simulador de cajero automático para gestionar el saldo de una cuenta bancaria.
El saldo inicial estará guardado en una variable (por ejemplo, comenzando en 0 o en el valor que se decida).
El programa mostrará repetidamente un menú con estas opciones:

1. Consultar saldo
2. Ingresar dinero
3. Retirar dinero
4. Salir

Mientras el usuario no elija la opción 4, el menú seguirá apareciendo.
Se deberán implementar, al menos, los siguientes funciones:

leerOpcionMenu():

Muestra el menú y pide una opción al usuario.
Valida que la opción esté entre 0 y 3; si no lo está, vuelve a pedirla.
Devuelve la opción seleccionada.

leerCantidadPositiva():

Pide una cantidad de dinero.
Hasta que el usuario no escriba un valor mayor que 0, vuelve a pedir el valor.
Devuelve la cantidad válida.

actualizarSaldo(saldo, cantidad, tipoOperacion):

Recibe el saldo actual, una cantidad y el tipo de operación ("ingreso" o "retiro").
Si es un ingreso, suma la cantidad al saldo y devuelve el nuevo saldo.
Si es un retiro:
Si la cantidad es mayor que el saldo actual, la función no cambia el saldo y devolverá por ejemplo -1 para indicar error (saldo insuficiente).
En caso contrario, resta la cantidad y devuelve el nuevo saldo. */

let prompt = require('prompt-sync')();

console.log ( ' ' );
console.log ( ' Bienvenido al sistema del cajero automatico, por favor, eliga una opcion...');
console.log ( ' ' );

console.log ( ' 1. Consultar saldo' );
console.log ( ' 2. Ingresar dinero' );
console.log ( ' 3. Retirar dinero' );
console.log ( ' 4. Salir' );


let opcion_elegida = 0;

function leerOpcionMenu (opcion_elegida) {

    let opcion;
    do {

        opcion = prompt (opcion_elegida);

        if ( opcion != 1 && opcion != 2 && opcion != 3 && opcion != 4) {

            console.log ( ' Introduzca uno de los siguentes valores ' );

        }
        
    } while (opcion != 1 && opcion != 2 && opcion != 3 && opcion != 4);

    return opcion;
}

let cantidad_elegida = 0;

function leerCantidadPositiva(cantidad_elegida) {

    let cantidad;

     do {
        
        console.log ( ' Introduzca el salario que quieres ingresar ' );
        cantidad = prompt (cantidad_elegida);

        if ( cantidad <= 0 ) {

            console.log ( ' Introduzca un valor mayor que 0' );

        }
        
    } while (cantidad === 0 );

    return cantidad;


}

function actualizarSaldo(saldo, cantidad, tipoOperacion) {



}


//main

console.log ( ` ${ leerOpcionMenu ( opcion_elegida ) } `)

console.log ( ` ${ leerCantidadPositiva (cantidad_elegida) } `)


    





