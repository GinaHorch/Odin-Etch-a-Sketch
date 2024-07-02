document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#grid-container');
    const button = document.querySelector('#new-grid-button');
    const gridSize = 400;

    const clearGrid = () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    
    const createGrid = (size) => {
        clearGrid();
        
        const itemSize = gridSize / size;

        for (let i = 0; i < size * size; i++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.style.width = `${itemSize}px`;
            div.style.height = `${itemSize}px`;
            div.dataset.opacity = 0;

            div.addEventListener('mouseover', () => {
                if (!div.style.backgroundColor) {
                    div.style.backgroundColor = getRandomColor();
                }

                let currentOpacity = parseFloat(div.dataset.opacity);
                if (currentOpacity < 1) {
                    currentOpacity += 0.1;
                    div.dataset.opacity = currentOpacity;
                    div.style.opacity = currentOpacity;
                }
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
const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

createGrid(16);
});