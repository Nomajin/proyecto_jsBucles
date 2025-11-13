//1. Desarrollar un algoritmo que permita ingresar la cantidad de hijos de N personas de una empresa, donde ninguno de ellos es pareja de otro, 
// validando que este valor no sea negativo. Se declararán las variables junto con su tipo y ámbito bloque.

//Por tanto, se pedirá el número de personas, cada pareja sólo cuenta una, y a continuación, se solicitará el número de hijos por cada persona.

//Luego mostrar un cuadro resumen con la cantidad de personas que tienen hijos y los que no. 
// Además, mostrar el promedio de hijos por persona, número máximo de hijos, el número mínimo de hijos. 


const prompt = require('prompt-sync')();

const N = Number (prompt('Introduze el numero de trabajadores'));

let Hijos = 0;
Hijos = Number (Hijos);


const contador = 0;
 

let Hijos_Max = 0;
 Hijos_Max = Number (Hijos_Max);

 let Hijos_Min = Infinity;
 Hijos_Min = Number (Hijos_Min);

let Suma_Hijos;
Suma_Hijos = Number (Suma_Hijos);


for (let contador = 1; contador <= N; contador++) {

    Hijos = Number (prompt('Cuantos hijos tiene:'));
    contador++;
    Suma_Hijos = Suma_hijos + Hijos;

    if (Hijos > Hijos_Max) {
        Hijos_Max = Hijos;
        
    }

    if (Hijos > Hijos_Min) {
        Hijos_Min= Hijos;
        
    }





}

media = sumaHijos / contador;
console.log ("Empleados")





if ( Number.isNaN(Hijos) ) {

    //si no es un numero
}