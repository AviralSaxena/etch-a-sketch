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

        gridItem.darknessLevel = 0;

        gridItem.addEventListener('mouseover', () => {
            if (colorModeActive) {
                gridItem.style.backgroundColor = `Red`;
            } else if (eraserModeActive) {
                gridItem.style.backgroundColor = 'White';
            } else if (rainbowModeActive) {
                gridItem.style.backgroundColor = getRandomColor();
            }

            if (darkModeActive) {
                darkSquare(gridItem);
            }
        });
    }
}

function getRandomColor(){
    let r = Math.floor(Math.random()*256);  
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return `rgba(${r}, ${g}, ${b})`;
};

function darkSquare(square) {
    square.darknessLevel += 0.1;
    if (square.darknessLevel > 1) {
        square.darknessLevel = 1;
    }
    square.style.backgroundColor = `rgba(0, 0, 0, ${square.darknessLevel})`;
};

function setActive(buttonElement) {
    
    colorModeButton.classList.remove('active');
    eraserModeButton.classList.remove('active');
    resetButton.classList.remove('active');
    rainbowModeButton.classList.remove('active');
    darkModeButton.classList.remove('active');

    buttonElement.classList.add('active');
}

createGrid(currentSideLength);

const gridSizeSlider = document.getElementById('gridSizeSlider');
const gridSizeLabel = document.getElementById('gridSizeLabel');
const colorModeButton = document.getElementById('color-mode-button');
const eraserModeButton = document.getElementById('eraser-mode-button');
const resetButton = document.getElementById('reset-button');
const rainbowModeButton = document.getElementById('rainbow-mode-button');
const darkModeButton = document.getElementById('dark-mode-button');

let colorModeActive = true;
let eraserModeActive = false;
let rainbowModeActive = false;
let darkModeActive = false;

gridSizeSlider.addEventListener('input', () => {
    currentSideLength = parseInt(gridSizeSlider.value);
    gridSizeLabel.textContent = `Grid Size: ${currentSideLength}x${currentSideLength}`;
    createGrid(currentSideLength);
});

colorModeButton.addEventListener('click', () => {
    colorModeActive = true;
    eraserModeActive = false;
    rainbowModeActive = false;
    setActive(colorModeButton);
});

eraserModeButton.addEventListener('click', () => {
    colorModeActive = false;
    eraserModeActive = true;
    rainbowModeActive = false;
    setActive(eraserModeButton);
});

resetButton.addEventListener('click', () => {
    colorModeActive = true; 
    eraserModeActive = false;
    rainbowModeActive = false;
    darkModeActive = false;
    setActive(colorModeButton);
    createGrid(currentSideLength);
});

rainbowModeButton.addEventListener('click',() => {
    colorModeActive = false; 
    eraserModeActive = false;
    rainbowModeActive = true;
    setActive(rainbowModeButton);
});

darkModeButton.addEventListener('click', () => {
    darkModeActive = !darkModeActive;
    setActive(darkModeButton);
});