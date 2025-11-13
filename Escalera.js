


const prompt = require('prompt-sync')();

const ancho = Number (prompt ('Introduzca ancho: '));

const pisos = Number (prompt("Introduzca num pisos:"))

let validacion = true;

if ( Number.isNaN(ancho) || ancho % 2 !==0) {

    //si no es numero o es impar => No valida
}

if ( Number.isNaN(pisos)) {

    //si no es numero
    validacion = false;
}


if ( validacion ) {
    pintarEscalera(ancho, pisos);

}

//HOIST = las funciones se mueven automaticamente al principio del src
function pintarEscalera(ancho, pisos) {

     for ( let contador = 0; contador < pisos; contador++) {
            //contador es indice piso
         for ( let contador2 = 0; contador2 < 3; contador2++) {
                //contador2 es indice de altura de escalon
         process.stdout.write('-'.repeat((ancho/2)*(pisos-1-contador)));
         process.stdout.write('*'.repeat(ancho))
         process.stdout.write('\n');
         }

     }
    
    //Pinto Escalera
    
}