// 10.Se necesita un sistema que calcula el salario semanal de n trabajadores, el cual depende de su puesto 
// (licenciado, técnico y obrero), del turno (primero, segundo y tercero) y las horas trabajadas.
//Donde los del primer turno ganan 200€ adicionales a su salario, los del segundo 100€ y los del tercero 300€; 
// El obrero gana 30€ por hora, el técnico 50€ y el licenciado 100€.

let prompt = require('prompt-sync')();

console.log ( ' ' );
console.log ( ' Bienvenido al sistema salarial, para poder recibir su sueldo, responda a las siguientes preguntas ...');
console.log ( ' ' );

let trabajo = prompt (' ¿ Cual es tu puesto de trabajo ? ');
trabajo = String (trabajo);

console.log ( ' ' );

let turno = prompt (' ¿ En que turno has trabajado ? ');
turno = String (turno);

console.log ( ' ' );

let HºTrabajadas = prompt (' ¿ Cuantas horas has trabajado? ');
HºTrabajadas = Number (HºTrabajadas);

if (trabajo === 'licenciado' && turno === 'primero') {
    
    let primer_turno = 200;
    primer_turno = Number (primer_turno); // Indicar tipo Number para no devolver tipo String
    let Sueldo = (100 * HºTrabajadas) + primer_turno;
    console.log ( ' ' );
    console.log ( ` Tu sueldo es de ${Sueldo} € ` );

}

if (trabajo === 'licenciado' && turno === 'segundo') {
       
    let segundo_turno = 100;
    segundo_turno = Number (segundo_turno); // Indicar tipo Number para no devolver tipo String
    let Sueldo = (100 * HºTrabajadas) + segundo_turno;
    console.log ( ' ' );
    console.log ( ` Tu sueldo es de ${Sueldo} € ` );

}

if (trabajo === 'licenciado' && turno === 'tercero') {
    
    let tercero_turno = 300;
    tercero_turno = Number (tercero_turno); // Indicar tipo Number para no devolver tipo String
    let Sueldo = (100 * HºTrabajadas) + tercero_turno;
    console.log ( ' ' );
    console.log ( ` Tu sueldo es de ${Sueldo} € ` );
}

if (trabajo === 'tecnico' && turno === 'primero') {
    
    let primer_turno = 200;
    primer_turno = Number (primer_turno); // Indicar tipo Number para no devolver tipo String
    let Sueldo = (50 * HºTrabajadas) + primer_turno;
    console.log ( ' ' );
    console.log ( ` Tu sueldo es de ${Sueldo} € ` );

}

if (trabajo === 'tecnico' && turno === 'segundo') {
    
    let segundo_turno = 100;
    segundo_turno = Number (segundo_turno); // Indicar tipo Number para no devolver tipo String
    let Sueldo = (50 * HºTrabajadas) + segundo_turno;
    console.log ( ' ' );
    console.log ( ` Tu sueldo es de ${Sueldo} € ` );

}

if (trabajo === 'tecnico' && turno === 'tercero') {

    let tercero_turno = 300;
    tercero_turno = Number (tercero_turno); // Indicar tipo Number para no devolver tipo String
    let Sueldo = (50 * HºTrabajadas) + tercero_turno;
    console.log ( ' ' );
    console.log ( ` Tu sueldo es de ${Sueldo} € ` );
   
}

if (trabajo === 'obrero' && turno === 'primero') {
    
    let primer_turno = 200;
    primer_turno = Number (primer_turno); // Indicar tipo Number para no devolver tipo String
    let Sueldo = (30 * HºTrabajadas) + primer_turno;
    console.log ( ' ' );
    console.log ( ` Tu sueldo es de ${Sueldo} € ` );

}

if (trabajo === 'obrero' && turno === 'segundo') {
    
    let segundo_turno = 100;
    segundo_turno = Number (segundo_turno); // Indicar tipo Number para no devolver tipo String
    let Sueldo = (30 * HºTrabajadas) + segundo_turno;
    console.log ( ' ' );
    console.log ( ` Tu sueldo es de ${Sueldo} € ` );

}

if (trabajo === 'obrero' && turno === 'tercero') {
    
    let tercero_turno = 300;
    tercero_turno = Number (tercero_turno); // Indicar tipo Number para no devolver tipo String
    let Sueldo = (30 * HºTrabajadas) + tercero_turno;
    console.log ( ' ' );
    console.log ( ` Tu sueldo es de ${Sueldo} € ` );

}





