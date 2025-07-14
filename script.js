import { ramos } from './materias.js';
console.log("Ramos cargados:", ramos);

const grid = document.getElementById('grid');
const rows = 10;
const cols = 10;

for (let i = 0; i < rows * cols; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.addEventListener('click', () => {
    cell.style.backgroundColor = getRandomColor();
  });
  grid.appendChild(cell);
}

function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}
