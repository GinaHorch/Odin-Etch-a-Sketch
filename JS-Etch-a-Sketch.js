document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#grid-container');
    const button = document.querySelector('#new-grid-button');

    const clearGrid = () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    
    const createGrid = (size) => {
        clearGrid();
        const gridSize = 400;
        const itemSize = gridSize / size;

        for (let i = 0; i < size * size; i++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.style.width = `${itemSize}px`
            div.style.height = `${itemSize}px`
            
            div.addEventListener('mouseover', () => {
                div.classList.add('hovered');
            });
            container.appendChild(div);
    }
}

button.addEventListener('click', () => {
    let size = prompt("Enter the number of squares per side to the new grid (max 100):");
    size = parseInt(size);
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});
createGrid(16);
});