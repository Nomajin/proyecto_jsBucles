//8. Se necesita un sistema que despliegue un menú con 4 opciones, si se presiona la opción 1, 
// se calculará el área de un triángulo; si se presiona la opción 2, se calculará el área de un cuadrado; 
// si se presiona la opción 3, se calculará el área de un círculo; si se presiona la opción 4, 
// será la única forma de salir del sistema.


let prompt = require('prompt-sync')();

console.log ( ' ' );
console.log ( ' Bienvenido al Sistema, por favor, exponiendole las opciones que se muestran...');
console.log ( ' ' );

console.log ( '1. Calcular el Area de un Triangulo');
console.log ( '2. Calcular el Area de un Cuadrado');
console.log ( '3. Calcular el Area de un Circulo');
console.log ( '4. Salir del Sistema');
console.log ( ' ' );

let opcion_elegida = prompt (' ¿ Que opcion quiere elegir ? ');
opcion_elegida = Number (opcion_elegida);



if (opcion_elegida === 1) {

    console.log ( ' ' );

    let base = prompt (' ¿ Cual es la base ? ');

    console.log ( ' ' );

    let altura = prompt (' ¿ Cual es la altura ? ');

    let Area_Triangulo = (base * altura) / 2

    console.log ( ' ' );
    
    console.log ( ` El area de este Triangulo es ${Area_Triangulo} ` );
    
}

if (opcion_elegida === 2) {

    console.log ( ' ' );

    let lado = prompt (' ¿ Cual es el lado ? ');

    console.log ( ' ' );

    let Area_Cuadrado = lado * lado;

    console.log ( ' ' );

    console.log ( ` El area de este Cuadrado es ${Area_Cuadrado} ` );
}

if (opcion_elegida === 3) {
    
    console.log ( ' ' );

    let radio = prompt (' ¿ Cual es el radio ? ');

    console.log ( ' ' );

    let Area_Circulo = (radio * radio) * Math.PI;

    console.log ( ` El area de este Circulo es ${Area_Circulo} ` );
}

if (opcion_elegida === 4) {

    console.log ( ' ' );

    
    console.log ( 'Hasta la proxima');

}

