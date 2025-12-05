// Solicitar número de empleados N y validar que sea mayor que 0
const prompt = require('prompt-sync')();


var N = 0;
while (N <= 0) {
    N = prompt("Ingrese el número de empleados:");
    N = Number(N); // Convertir a número
    if (isNaN(N) || N <= 0) {
        console.log("Número inválido. Debe ser mayor que 0.");
        N = 0; // Reiniciar para que siga el bucle
    }
}

// Inicialización de variables
var menosDe1000 = 0;
var entre1000y2000 = 0;
var masDe2000 = 0;
var sumaSueldos = 0;
var sueldoMaximo = -Infinity;
var sueldoMinimo = Infinity;

// Lectura de sueldos con validación
for (var i = 0; i < N; i++) {
    var sueldo = -1;
    while (sueldo < 0) {
        sueldo = prompt("Ingrese el sueldo del empleado " + (i + 1) + " en euros:");
        sueldo = Number(sueldo);
        if (isNaN(sueldo) || sueldo < 0) {
            console.log("Sueldo inválido. Debe ser mayor o igual a 0.");
            sueldo = -1; // Reiniciar para que siga el bucle
        }
    }

    sumaSueldos = sumaSueldos + sueldo;

    // Contadores según rango de sueldo
    if (sueldo < 1000) {
        menosDe1000 = menosDe1000 + 1;
    } else if (sueldo <= 2000) {
        entre1000y2000 = entre1000y2000 + 1;
    } else {
        masDe2000 = masDe2000 + 1;
    }

    // Actualización de máximo y mínimo
    if (sueldo > sueldoMaximo) {
        sueldoMaximo = sueldo;
    }
    if (sueldo < sueldoMinimo) {
        sueldoMinimo = sueldo;
    }
}

// Cálculo del sueldo medio
var sueldoMedio = sumaSueldos / N;

// Mostrar el resumen en consola
console.log("---- Resumen de sueldos ----");
console.log("Cantidad de empleados que cobran menos de 1000 €: " + menosDe1000);
console.log("Cantidad de empleados que cobran entre 1000 € y 2000 €: " + entre1000y2000);
console.log("Cantidad de empleados que cobran más de 2000 €: " + masDe2000);
console.log("Sueldo medio: " + sueldoMedio + " €");
console.log("Sueldo máximo: " + sueldoMaximo + " €");
console.log("Sueldo mínimo: " + sueldoMinimo + " €");