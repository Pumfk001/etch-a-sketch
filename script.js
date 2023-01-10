
const grid = document.querySelector('.grid');


function createGrid (userInput){

for (let i = 0; i < userInput**2; i++){

let pixels = document.createElement('div');
pixels.classList.add('pixel');
grid.appendChild(pixels);
}
};

createGrid(16);

console.log(500/16);

