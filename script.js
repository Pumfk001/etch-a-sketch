
const grid = document.querySelector('.grid');
const gridSize = 500;


function createGrid (userInput){

for (let i = 0; i < userInput**2; i++){

let newPixels = document.createElement('div');
newPixels.classList.add('pixel');
newPixels.style.height = gridSize/userInput + 'px';
newPixels.style.width = gridSize/userInput + 'px';
grid.appendChild(newPixels);
}
};

createGrid(16);

const pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', () => {
    pixel.style.backgroundColor = 'black';
});
});





