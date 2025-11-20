//4.  Se necesita un sistema que lea los votos obtenidos por tres candidatos a alcalde en la ciudad de Mijas y calcule e imprima al ganador,
//  junto con el porcentaje obtenido de votos de él y los restantes candidatos. (sin anti-pattern)

const prompt = require('prompt-sync')();

//mediante prompt informando de candidato lee
// el numero de votos y lo introduce

function leerVotosCandidatoConValidacion(candidato) {
    let num;

    do {
        num = Number (prompt(`Introduzca votos del candidato ${candidato} `));
        if (Number.isNaN(num)) {
            console.log ( 'Formato de numero de votos incorrecto');
        }
    } while (Number.isNaN(num));

    //Fundamental retornar algo!!

    
}

let contador =1;

let Votos_1 = 0
let Votos_2 = 0;
let Votos_3 = 0;
let max = -Infinity;

while ( contador <= 3) {

    let votos = leerVotosCandidatoConValidacion ('Candidato' + contador);

    suma = suma + votos;

    if (votos > max) {
        alcalde = 'Candidato' + contador;
        max = votos
    }

    switch (contador) {
        case 1:
            votos1 = votos;
            break;

        case 2:
            votos2 = votos;
            break;

        case 3:
            votos3 = votos;
            break;
    
        default:
            break;
    }

    contador++;
}

console.log (`
    Votos totales ${votos}
    Votos Candidato_1
     ${votos1} Votos
     ${votos1*100/suma}
     Votos Candidato_2
     ${votos2} Votos
     ${votos2*100/suma}
     Votos Candidato_3
     ${votos3} Votos
     ${votos3*100/suma}
    
    `);