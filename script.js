
const grid = document.querySelector('.grid');
const gridSize = 500;
let pixels

createGrid(40);


// removes current grid (if there is one) and creates a new one based on userInput
function createGrid (input){
    document.querySelectorAll('.pixel').forEach(pixel => pixel.remove());    
    for (let i = 0; i < input**2; i++){
        let newPixels = document.createElement('div');
        newPixels.classList.add('pixel');
        newPixels.style.height = gridSize/input + 'px';
        newPixels.style.width = gridSize/input + 'px';
        grid.appendChild(newPixels);
    }
    pixelListener();
};

// change pixels to black when mouse goes over
function pixelListener(){
    pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = 'black';
        });
    });
};

// clear grid by changing pixels back to white
document.querySelector('.clearAll').addEventListener('click', () => {
    pixels.forEach((pixel) => {
    pixel.style.backgroundColor = 'white';
    });
});

// prompt grid size on button click
document.querySelector('.gridSize').addEventListener('click',() => {
    let userInput = prompt("Input grid height (between 1 and 100)");
    console.log(userInput);
    if  (isNaN(userInput) || userInput === ''|| userInput === '0' || userInput === null){
        alert('Input must be a number, please try again');
        return;
    } else if(userInput > 100){
            alert('Input must be 100 or less, please try again',40);
            return;
                };
    createGrid(userInput);
});
 