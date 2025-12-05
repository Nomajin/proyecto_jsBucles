let n = 5;  
let linea = "";

// Parte superior
for (let i = 1; i <= n; i++) {
    linea = "";

    // espacios a la izquierda
    for (let j = 1; j <= n - i; j++) {
        linea += " ";
    }

    // asteriscos y espacios interiores
    for (let j = 1; j <= (2 * i - 1); j++) {
        if (j === 1 || j === (2 * i - 1)) {
            linea += "*";     // bordes
        } else {
            linea += " ";     // hueco interior
        }
    }

    console.log(linea);
}

// Parte inferior
for (let i = n - 1; i >= 1; i--) {
    linea = "";

    // espacios a la izquierda
    for (let j = 1; j <= n - i; j++) {
        linea += " ";
    }

    // asteriscos y huecos
    for (let j = 1; j <= (2 * i - 1); j++) {
        if (j === 1 || j === (2 * i - 1)) {
            linea += "*";
        } else {
            linea += " ";
        }
    }

    console.log(linea);
}