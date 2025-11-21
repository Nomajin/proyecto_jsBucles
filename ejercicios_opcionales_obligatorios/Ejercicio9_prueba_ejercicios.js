// 9. Realiza una calculadora de menú. El algoritmo mostrará un menú de operadores aritméticas (+-*/,raíz) y 
// seguidamente a la elección de una operación solicitará los 2 operandos, mostrando el resultado por pantalla e 
// informando de nuevo con el menú.
// El menú además de las operadores básicas tendrá que tener una opción de salida que se indicará con la letra q.

let prompt = require('prompt-sync')();

console.log ( ' ' );
console.log ( ' Bienvenido a la Calculadora, por favor, exponiendole las operadores que se muestran...');
console.log ( ' ' );

console.log ( '+. Suma');
console.log ( '-. Resta');
console.log ( '*. Multiplicacion');
console.log ( '/. Division');
console.log ( '√. Raiz'); // Alt + v
console.log ( 'q. Salir de la Calculadora');
console.log ( ' ' );

let operador = prompt (' ¿ Que opcion quiere elegir ? ');
operador = String (operador);

if (operador === '+') { 

    console.log ( ' ' );

    let Primer_operando = prompt (' Primer operando =  ');
    Primer_operando = Number (Primer_operando);  // Indicar tipo Number para no devolver tipo String
    console.log ( ' ' );

    let Segundo_operando = prompt (' Segundo operando = ');
    Segundo_operando = Number (Segundo_operando); // Indicar tipo Number para no devolver tipo String
    console.log ( ' ' );

    let suma = Primer_operando + Segundo_operando;
    suma = Number (suma);  // Indicar tipo Number para no devolver tipo String

    console.log ( `El resultado de la suma es  ${suma} ` );

    console.log ( ' ' );

}

if (operador === '-') { 

    console.log ( ' ' );

    let Primer_operando = prompt (' Primer operando =  ');
    Primer_operando = Number (Primer_operando); // Indicar tipo Number para no devolver tipo String
    console.log ( ' ' );

    let Segundo_operando = prompt (' Segundo operando = ');
    Segundo_operando = Number (Segundo_operando); // Indicar tipo Number para no devolver tipo String
    console.log ( ' ' );

    let resta = Primer_operando - Segundo_operando;
    resta = Number (resta); // Indicar tipo Number para no devolver tipo String

    console.log ( `El resultado de la resta es  ${resta} ` );

    console.log ( ' ' );

}

if (operador === '*') { 

    console.log ( ' ' );

    let Primer_operando = prompt (' Primer operando =  ');
    Primer_operando = Number (Primer_operando); // Indicar tipo Number para no devolver tipo String
    console.log ( ' ' );

    let Segundo_operando = prompt (' Segundo operando = ');
    Segundo_operando = Number (Segundo_operando); // Indicar tipo Number para no devolver tipo String
    console.log ( ' ' );

    let multiplicacion = Primer_operando * Segundo_operando;
    multiplicacion = Number (multiplicacion); // Indicar tipo Number para no devolver tipo String

    console.log ( `El resultado de la multiplicacion es  ${multiplicacion} ` );

    console.log ( ' ' );

}

if (operador === '/') { 

    console.log ( ' ' );

    let Primer_operando = prompt (' Primer operando =  ');
    Primer_operando = Number (Primer_operando); // Indicar tipo Number para no devolver tipo String
    console.log ( ' ' );

    let Segundo_operando = prompt (' Segundo operando = ');
    Segundo_operando = Number (Segundo_operando); // Indicar tipo Number para no devolver tipo String
    console.log ( ' ' );

    let división = Primer_operando / Segundo_operando;
    división = Number (división); // Indicar tipo Number para no devolver tipo String

    console.log ( `El resultado de la división es  ${división} ` );

    console.log ( ' ' );

}

if (operador === '√') { 

    console.log ( ' ' );

    let operando = prompt (' Operando =  ');
    operando = Number (operando); // Indicar tipo Number para no devolver tipo String
    console.log ( ' ' );

    let Raiz = Math.sqrt (operando); // Indicar tipo Number para no devolver tipo String
    Raiz = Number (Raiz);

    console.log ( `El resultado de la raiz es  ${Raiz} ` );

    console.log ( ' ' );

}

if (operador === 'q') { 

    console.log ( ' ' );

    console.log ( 'Hasta la proxima');

    console.log ( ' ' );

}




