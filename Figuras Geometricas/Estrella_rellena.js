const size = 15; // Tamaño de la cuadrícula
let grid = Array.from({ length: size }, () => Array(size).fill(' '));

const center = Math.floor(size / 2);
const radius = center;

// Función para dibujar un punto
function plot(x, y) {
    if (x >= 0 && x < size && y >= 0 && y < size) {
        grid[y][x] = '*';
    }
}

// Coordenadas de la estrella (5 puntas)
for (let i = 0; i < 5; i++) {
    const angle = (Math.PI / 2) + (i * 4 * Math.PI / 5); // cada punta
    const x = Math.round(center + radius * Math.cos(angle));
    const y = Math.round(center - radius * Math.sin(angle));
    plot(x, y);
}

// Imprimir la cuadrícula
for (let row of grid) {
    console.log(row.join(''));
}