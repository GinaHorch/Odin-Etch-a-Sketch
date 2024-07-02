document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#grid-container');
    const button = document.querySelector('#new-grid-button');

    const clearGrid = () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    
    const createGrid = (size) => {
        for (let i = 0; i < size * size; i++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.addEventListener('mouseover', () => {
                div.classList.add('hovered');
            });
            container.appendChild(div);
    }
}
createGrid(16);
});