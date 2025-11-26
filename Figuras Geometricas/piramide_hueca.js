//2. Escribe una función en la que dibuje una pirámide invertida en pantalla como la de la figura. 
// La altura se pasará como parámetro. Si se pasa una altura =0 o negativa, la función devolverá –1; 
// en caso contrario devolverá 0 (éxito) y pintará la pirámide.

const prompt = require('prompt-sync')();

const altura = Number (prompt ('Introduzca la altura: '));


let contador = 0;
while (contador < altura) {

    process.stdout.write(' '.repeat(altura - 1 - contador));

    if (contador === 0) {

        process.stdout.write('*');
        process.stdout.write('\n');
    } else if (contador === altura - 1) {

        process.stdout.write(' '.repeat( 2 * contador + 1 ));
        process.stdout.write('\n');

    } else {
        //contador > 1 && contador < altura
        process.stdout.write('*');
        process.stdout.write(' '.repeat( 2 * contador + 1 - 2));
        process.stdout.write('*');
        process.stdout.write('\n');
    }

    contador++;

    

   
    
}
