//4.  Se necesita un sistema que lea los votos obtenidos por tres candidatos a alcalde en la ciudad de Mijas y 
// calcule e imprima al ganador,
//  junto con el porcentaje obtenido de votos de él y los restantes candidatos. (sin anti-pattern)

const prompt = require('prompt-sync')();

//mediante prompt informando de candidato lee
// el numero de votos y lo introduce

function leerVotosCandidatoConValidacion(candidato) {
    let votos;

    do {
        votos = Number (prompt(`Introduzca votos del candidato ${candidato} `));
        if (Number.isNaN(votos)) {
            console.log ( 'Formato de numero de votos incorrecto');
        }
    } while (Number.isNaN(votos));

    return votos;

    //Fundamental retornar algo!!

    
}

let contador =1;

let suma = 0;
let Votos_1 = 0
let Votos_2 = 0;
let Votos_3 = 0;
let votos = 0;
let max = -Infinity;
let alcalde;

while ( contador <= 3) {

    let votos = leerVotosCandidatoConValidacion ('Candidato' + contador);

    suma = suma + votos;

    if (votos > max) {
        alcalde = 'Candidato' + contador;
        max = votos
    }

    switch (contador) {
        case 1:
            Votos_1 = votos;
            break;

        case 2:
            Votos_2 = votos;
            break;

        case 3:
            Votos_3 = votos;
            break;
    
        default:
            break;
    }

    contador++;
}

console.log (`
    Votos totales ${suma}

    Votos Candidato_1
     ${Votos_1} Votos
     ${Votos_1*100/suma} %

     Votos Candidato_2
     ${Votos_2} Votos
     ${Votos_2*100/suma} %

     Votos Candidato_3
     ${Votos_3} Votos
     ${Votos_3*100/suma} %
     
     El Alcalde es ${alcalde}
    `);