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
                gridItem.classList.add('newColor');
            } else if (eraserModeActive) {
                gridItem.classList.remove('newColor');
            }
        });
    }
}

createGrid(currentSideLength);

const gridSizeSlider = document.getElementById('gridSizeSlider');
const gridSizeLabel = document.getElementById('gridSizeLabel');
const colorModeButton = document.getElementById('color-mode-button');
const eraserModeButton = document.getElementById('eraser-mode-button');
const resetButton = document.getElementById('reset-button');

let colorModeActive = true;
let eraserModeActive = false;

gridSizeSlider.addEventListener('input', () => {
    currentSideLength = parseInt(gridSizeSlider.value);
    gridSizeLabel.textContent = `Grid Size: ${currentSideLength}x${currentSideLength}`;
    createGrid(currentSideLength);
});

colorModeButton.addEventListener('click', () => {
    colorModeActive = true;
    eraserModeActive = false;
});

eraserModeButton.addEventListener('click', () => {
    colorModeActive = false;
    eraserModeActive = true;
});

resetButton.addEventListener('click', () => {
    createGrid(currentSideLength);
});
