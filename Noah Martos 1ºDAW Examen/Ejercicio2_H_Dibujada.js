/* Dibuja la letra H con trazo 3 y hueco proporcional (1.5 puntos)
Escribe programa que dibuje en pantalla la letra H mayúscula formada por asteriscos,
donde el ancho del trazo (tanto de las barras verticales como de la barra horizontal central)
sea siempre de 3 asteriscos.
● La función recibirá como parámetro la altura total de la H (número de filas).
● La altura deberá ser un número entero impar mayor o igual que 5, de forma que
exista una fila central donde se dibujará la barra horizontal.
● Si la altura es par o menor que 5 no dibujará nada.
● Si la altura es válida dibujará la letra H.

*/

const prompt = require('prompt-sync')();

const altura = Number (prompt ('Introduzca la altura: '));


function dibujarH(altura) {

  const ancho_normal = "*".repeat(3);
  let huecoEnBloques = (altura - 1)/2 ;
  let nºEspacios = " ".repeat(huecoEnBloques * 3);
  let nºEspacios_con_bloques = "*".repeat((huecoEnBloques * 3) + 2);


  for (let contador = 0; contador < (altura-1) /2; contador++) {
    
    console.log(` ${ancho_normal} ${nºEspacios} ${ancho_normal} `);
  
  }

  for (let contador = 0; contador < 1; contador++) {
    console.log(` ${ancho_normal}${nºEspacios_con_bloques}${ancho_normal}`);

    
  }

   for (let contador = 0; contador < (altura-1) /2; contador++) {
    
    console.log(` ${ancho_normal} ${nºEspacios} ${ancho_normal} `);
  
  }
  
}

if (altura % 2 === 0 || altura < 5) {

    console.log(` No puedo dibujar nada`);
 
} else {

    console.log ( ` ${  dibujarH ( altura ) } `)

}
