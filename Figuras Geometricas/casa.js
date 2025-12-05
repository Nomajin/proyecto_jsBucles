function dibujarCasa() {
    const alturaTecho = 5;
    const anchoCasa = 11;

    // Dibujar techo (triángulo)
    for (let i = 0; i < alturaTecho; i++) {
        let espacios = " ".repeat(alturaTecho - i - 1);
        let asteriscos = "*".repeat(2 * i + 1);
        console.log(espacios + asteriscos + espacios);
    }

    // Dibujar cuerpo de la casa (rectángulo)
    const alturaCasa = 5;
    for (let i = 0; i < alturaCasa; i++) {
        let linea = "*" + " ".repeat(anchoCasa - 4) + "*";
        console.log(linea);
    }

    // Dibujar base de la casa
    console.log("*".repeat(anchoCasa - 2));
}

dibujarCasa();