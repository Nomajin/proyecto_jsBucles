// 10.Se necesita un sistema que calcula el salario semanal de n trabajadores, el cual depende de su puesto 
// (licenciado, técnico y obrero), del turno (primero, segundo y tercero) y las horas trabajadas.
//Donde los del primer turno ganan 200€ adicionales a su salario, los del segundo 100€ y los del tercero 300€; 
// El obrero gana 30€ por hora, el técnico 50€ y el licenciado 100€.


let prompt = require('prompt-sync')();

console.log ( ' ' );
console.log ( ' Bienvenido al sistema salarial, para poder recibir su sueldo, responda a las siguientes preguntas ...');
console.log ( ' ' );

function leerpuesto(respuesta) {

    let puesto;
    do {

        puesto = prompt (respuesta);

        if ( puesto != 'licenciado' && puesto != 'tecnico' && puesto != 'obrero') {

            console.log ( ' Introduzca uno de los siguuentes valores ' );



        }
        
    } while (puesto != 'licenciado' && puesto != 'tecnico' && puesto != 'obrero');
    
}