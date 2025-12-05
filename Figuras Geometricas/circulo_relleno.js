function dibujarCirculo(radio) {
    for (let y = 0; y <= 2 * radio; y++) {
        let linea = "";
        for (let x = 0; x <= 2 * radio; x++) {
            // Calculamos la distancia al centro
            let distancia = Math.sqrt((x - radio) ** 2 + (y - radio) ** 2);
            if (distancia > radio - 0.5 && distancia < radio + 0.5) {
                linea += "*";
            } else {
                linea += " ";
            }
        }
        console.log(linea);
    }
}

// Dibujamos un círculo de radio 10
dibujarCirculo(10);