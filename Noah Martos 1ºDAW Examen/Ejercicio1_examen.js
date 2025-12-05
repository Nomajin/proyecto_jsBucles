/*Desarrollar un script que permita registrar la temperatura diaria de una ciudad durante un
periodo indeterminado de días.
En lugar de pedir primero cuántos datos se van a introducir, se utilizará un valor centinela
para finalizar la entrada 

*/

const prompt = require('prompt-sync')();

formatoOk = true;

let temperatura = 0;

let Contador_Bajo_cero = 0;

let Contador_templado = 0;

let Contador_temperatura_alta = 0;

let temperatura_max = -Infinity;

let temperatura_min = Infinity;

let contador_dias = 0;

let Acumulador = 0;



while (temperatura != 999 ) {

    temperatura = Number(prompt('Dime una temperatura: '))

    if (temperatura >= -50 && temperatura <= 60) {

       
        Acumulador = Acumulador + temperatura;
       
        if (temperatura < 0) {

            Contador_Bajo_cero++;
        }

        if (temperatura >= 0 && temperatura <= 30) {

            Contador_templado++;
        }

        if (temperatura > 30) {

            Contador_temperatura_alta++;
        }

        if (temperatura > temperatura_max) {

            temperatura_max = temperatura;
        }

        if (temperatura < temperatura_min) {

            temperatura_min = temperatura;
        }
        
        contador_dias++;
    }
    
    if (temperatura < -50 || temperatura > 60) {
        console.log(' Temperatura no valida')
    }

    if (Number.isNaN(temperatura)) {
        console.log ( 'Formato numero incorrecto')
    
    }

     
   
}

let media = Acumulador / contador_dias;

if (contador_dias === 0) {

    console.log (` `);
    console.log (`No hay datos para calcular estadísticas `);

    
} else {

console.log (` `);
console.log (`Número total de días registrados: ${contador_dias}`);
console.log (`Número de días bajo cero: ${Contador_Bajo_cero}` )
console.log (`Número de días templados: ${Contador_templado}` )
console.log (`Número de días de calor: ${Contador_temperatura_alta}` )
console.log (`Temperatura media del periodo: ${media}` )
console.log (`Temperatura máxima: ${temperatura_max}` )
console.log (`Temperatura mínima: ${temperatura_min}` )

}



    




