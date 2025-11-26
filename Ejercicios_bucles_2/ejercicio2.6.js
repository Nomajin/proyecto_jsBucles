
//6.  Teniendo en cuenta que la clave es “eureka”, escribir un algoritmo que nos pida una clave. 
// Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrará un mensaje indicándonos que hemos agotado esos 3 intentos. 
// Si acertamos la clave, saldremos directamente del programa.


const prompt = require('prompt-sync')();

const clave = "Eureka";
let intentos= 3;

do {
    let inpClave = prompt ('Introduzca clave:'); //devuelve string
    if (clave===inpClave) {

        console.log("Has encontrado la contraseña");
        intentos = 0;
        
    } else {

        console.log(`Contraseña incorrecta, intentos: ${--intentos}`);


    }
} while (intentos >0);