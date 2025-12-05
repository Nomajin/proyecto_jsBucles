const prompt = require('prompt-sync')();

const altura = Number (prompt ('Introduzca la altura: '));


for (let contador = 1; contador <= altura; contador++) {

        const espacios = " ".repeat(altura - contador); // cantidad de espacios a la izquierda
        const estrellas = "*".repeat(2 * contador - 1); // cantidad de estrellas

        console.log(espacios + estrellas);
     


}