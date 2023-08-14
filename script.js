const gridContainer=document.querySelector('.gridContainer');

function createGrid(sideLength) {

    gridContainer.innerHTML = '';

    gridContainer.style.gridTemplateColumns=`repeat(${sideLength}, 1fr)`;
    gridContainer.style.gridTemplateRows=`repeat(${sideLength}, 1fr)`;

    for (let i=0; i<sideLength*sideLength; i++)
        {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridContainer.appendChild(gridItem);

            gridItem.addEventListener('mouseover', () => {
                gridItem.classList.add('newColor');
            });

            const eraserButton = document.getElementById('eraser-button');
            eraserButton.addEventListener('click',()=>{
                gridItem.addEventListener('mouseover', () => {
                    gridItem.classList.remove('newColor');
                });
            });
        }
}

createGrid(16);

const gridSizeLabel = document.getElementById('gridSizeLabel');

gridSizeSlider.addEventListener('change', () => {
    const newSideLength = parseInt(gridSizeSlider.value);
    gridSizeLabel.textContent = `Grid Size: ${newSideLength}x${newSideLength}`;
    createGrid(newSideLength);
});

const resetContainer = document.getElementById('reset-button');

resetContainer.addEventListener('click',()=>{
    const currentSideLength = parseInt(gridSizeSlider.value);
    createGrid(currentSideLength);
})