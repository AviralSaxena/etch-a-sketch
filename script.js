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
        }
}

createGrid(16);