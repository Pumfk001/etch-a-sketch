
const grid = document.querySelector('.grid');
const gridSize = 500;


function createGrid (userInput){

for (let i = 0; i < userInput**2; i++){

let pixels = document.createElement('div');
pixels.classList.add('pixel');
pixels.style.height = gridSize/userInput + 'px';
pixels.style.width = gridSize/userInput + 'px';
grid.appendChild(pixels);
}
};

createGrid(16);


