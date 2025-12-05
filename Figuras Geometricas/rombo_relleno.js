let n = 5; // tamaño del rombo
let linea = "";

// Parte superior
for (let i = 1; i <= n; i++) {
    linea = "";

    // espacios
    for (let j = 1; j <= n - i; j++) {
        linea += " ";
    }

    // asteriscos
    for (let j = 1; j <= (2 * i - 1); j++) {
        linea += "*";
    }

    console.log(linea);
}

// Parte inferior
for (let i = n - 1; i >= 1; i--) {
    linea = "";

    // espacios
    for (let j = 1; j <= n - i; j++) {
        linea += " ";
    }

    // asteriscos
    for (let j = 1; j <= (2 * i - 1); j++) {
        linea += "*";
    }

    console.log(linea);
}