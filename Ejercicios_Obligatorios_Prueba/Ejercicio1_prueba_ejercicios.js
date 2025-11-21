//1. Desarrollar un algoritmo que permita ingresar la cantidad de hijos de N personas de una empresa, 
// donde ninguno de ellos es pareja de otro, validando que este valor no sea negativo. 
// Se declararán las variables junto con su tipo y ámbito bloque.

//Por tanto, se pedirá el número de personas, cada pareja sólo cuenta una, y a continuación, 
// se solicitará el número de hijos por cada persona.

//Luego mostrar un cuadro resumen con la cantidad de personas que tienen hijos y los que no. 
// Además, mostrar el promedio de hijos por persona, número máximo de hijos, el número mínimo de hijos. 


const prompt = require('prompt-sync')();

const N = Number (prompt('Introduze el numero de trabajadores: '));

let Hijos = 0;
Hijos = Number (Hijos);

 
let Hijos_Max = 0;
Hijos_Max = Number (Hijos_Max);

let Hijos_Min = Infinity;
Hijos_Min = Number (Hijos_Min);

let Suma_Hijos = 0;
Suma_Hijos = Number (Suma_Hijos);

let Sin_Hijos;
Sin_Hijos = Number ( Sin_Hijos);


if ( N > 0 ) {

    for (let contador1 = 1; contador1 <= N; contador1++) {
    
        Hijos = Number (prompt('Cuantos hijos tiene: '));

        if (Hijos >= 0) {

            Suma_Hijos = Suma_Hijos + Hijos;

            if (Hijos > Hijos_Max) {
                Hijos_Max = Hijos;
                
            }

            if (Hijos < Hijos_Min) {
                Hijos_Min = Hijos;
                
            }
  
        }


    }

    Media = Suma_Hijos / N;

    console.log (` `);

    console.log (` Trabajadores ${N} `);

    console.log (` Total de hijos: ${Suma_Hijos} `);

    console.log (` Maximo de hijos: ${Hijos_Max} `);

    console.log (` Minimo de hijos: ${Hijos_Min} `);

    console.log (` Media de Hijos: ${Media} `);

        
}
