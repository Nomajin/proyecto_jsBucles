let n = 4; // altura de los lados inclinados
let linea = "";

// Parte superior inclinada
for (let i = 0; i < n; i++) {
    linea = "";

    // espacios a la izquierda
    for (let j = 0; j < n - 1 - i; j++) {
        linea += " ";
    }

    // asteriscos de la línea
    for (let j = 0; j < n + 2 * i; j++) {
        linea += "*";
    }

    console.log(linea);
}

// Parte media (base larga)
for (let i = 0; i < n; i++) {
    linea = "";

    // asteriscos de la línea
    for (let j = 0; j < 3 * n - 2; j++) {
        linea += "*";
    }

    console.log(linea);
}

// Parte inferior inclinada
for (let i = n - 1; i >= 0; i--) {
    linea = "";

    // espacios a la izquierda
    for (let j = 0; j < n - 1 - i; j++) {
        linea += " ";
    }

    // asteriscos de la línea
    for (let j = 0; j < n + 2 * i; j++) {
        linea += "*";
    }

    console.log(linea);
}