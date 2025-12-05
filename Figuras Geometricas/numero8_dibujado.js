// Donde Se pu

const prompt = require('prompt-sync')();

const altura = Number (prompt ('Introduzca la altura: '));


function dibujarOcho(altura) {
  const ancho = altura * 3;

  const solida = "*".repeat(ancho);
  const hueca = "*".repeat(altura) + " ".repeat(altura) + "*".repeat(altura);

  // Parte superior sólida (2 filas)
  for (let i = 0; i < 2; i++) {
    console.log(solida);
  }

  // Hueco superior (h filas)
  for (let i = 0; i < altura; i++) {
    console.log(hueca);
  }

  // Franja central sólida (2 filas)
  for (let i = 0; i < 2; i++) {
    console.log(solida);
  }

  // Hueco inferior (h filas)
  for (let i = 0; i < altura; i++) {
    console.log(hueca);
  }

  // Parte inferior sólida (2 filas)
  for (let i = 0; i < 2; i++) {
    console.log(solida);
  }
}
console.log ( ` ${  dibujarOcho ( altura ) } `)
