
const grid = document.querySelector('.grid');
const gridSize = 600;


function createGrid (userInput){
    for (let i = 0; i < userInput**2; i++){
        let newPixels = document.createElement('div');
        newPixels.classList.add('pixel');
        newPixels.style.height = gridSize/userInput + 'px';
        newPixels.style.width = gridSize/userInput + 'px';
        grid.appendChild(newPixels);
    }
};

createGrid(60);

// change pixels to black when mouse goes over
const pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', () => {
    pixel.style.backgroundColor = 'black';
    });
});

// clear grid by changing pixels back to white
const clearButton = document.querySelector('.clearAll');
clearButton.addEventListener('click', () => {
    pixels.forEach((pixel) => {
    pixel.style.backgroundColor = 'white';
    });
});

 
