const gridContainer = document.querySelector('.gridContainer');
let currentSideLength = 16;

function createGrid(sideLength) {
    gridContainer.innerHTML = '';

    gridContainer.style.gridTemplateColumns = `repeat(${sideLength}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${sideLength}, 1fr)`;

    for (let i = 0; i < sideLength * sideLength; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener('mouseover', () => {
            if (colorModeActive) {
                gridItem.style.backgroundColor = `Red`;
            } else if (eraserModeActive) {
                gridItem.style.backgroundColor = 'White';
            } else if (rainbowModeActive) {
                gridItem.style.backgroundColor = getRandomColor();
            }
        });
    }
}

function getRandomColor(){
    let r = Math.floor(Math.random()*256);  
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return `rgb(${r}, ${g}, ${b})`;
};

createGrid(currentSideLength);

const gridSizeSlider = document.getElementById('gridSizeSlider');
const gridSizeLabel = document.getElementById('gridSizeLabel');
const colorModeButton = document.getElementById('color-mode-button');
const eraserModeButton = document.getElementById('eraser-mode-button');
const resetButton = document.getElementById('reset-button');
const rainbowModeButton = document.getElementById('rainbow-mode-button');

let colorModeActive = true;
let eraserModeActive = false;
let rainbowModeActive = false;

gridSizeSlider.addEventListener('input', () => {
    currentSideLength = parseInt(gridSizeSlider.value);
    gridSizeLabel.textContent = `Grid Size: ${currentSideLength}x${currentSideLength}`;
    createGrid(currentSideLength);
});

colorModeButton.addEventListener('click', () => {
    colorModeActive = true;
    eraserModeActive = false;
    rainbowModeActive = false;
});

eraserModeButton.addEventListener('click', () => {
    colorModeActive = false;
    eraserModeActive = true;
    rainbowModeActive = false;
});

resetButton.addEventListener('click', () => {
    colorModeActive = true; 
    eraserModeActive = false;
    rainbowModeActive = false;
    createGrid(currentSideLength);
});

rainbowModeButton.addEventListener('click',() => {
    colorModeActive = false; 
    eraserModeActive = false;
    rainbowModeActive = true;
});