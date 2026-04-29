//2. Escribe una función en la que dibuje una pirámide invertida en pantalla como la de la figura. 
// La altura se pasará como parámetro. Si se pasa una altura =0 o negativa, la función devolverá –1; 
// en caso contrario devolverá 0 (éxito) y pintará la pirámide.

const prompt = require('prompt-sync')();

const altura = Number (prompt ('Introduzca la altura: '));

// Divide y Venceras - Napoleon

let contador = 0;
while (contador < altura) {

        process.stdout.write(' '.repeat(contador)); //Escribir Sin salto de de Linea: \n 

        // Pinto la base

        for ( let i = 0; i < 2 * altura - 1 - 2 * contador; i++ ) {

            process.stdout.write('*'); //Escribir Sin salto de de Linea: \n
            // console.log('4'); //Escribir con salto de de Linea: \n
        }
        process.stdout.write('\n'); //Escribir Sin salto de de Linea: \n 
    
        contador++;
    }
