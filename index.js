// script.js
const container = document.getElementById("container");
const resetButton = document.getElementById("reset");

// Function to create a grid with the specified number of rows and columns
function createGrid(rows, cols) {
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

// Initialize the grid with a default size of 16x16
createGrid(16, 16);

// Add a hover effect to change the square's color on mouseover
container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("square")) {
        // Set a random RGB color
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        event.target.style.backgroundColor = randomColor;
    }
});

// Reset the grid when the "Reset Grid" button is clicked
resetButton.addEventListener("click", () => {
    const newSize = prompt("Enter the number of squares per side (max 100):");
    const parsedSize = parseInt(newSize);

    if (!isNaN(parsedSize) && parsedSize > 0 && parsedSize <= 100) {
        clearGrid();
        createGrid(parsedSize, parsedSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

// Function to clear the grid
function clearGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        container.removeChild(square);
    }
)}
