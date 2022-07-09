const gridContainer = document.querySelector(".grid-container");
const clearBtn = document.querySelector(".clear");
const newBtn = document.querySelector(".new");

// function for creating grid
function createGrid(number) {
  for (let i = 0; i < number * number; i++) {
    const div = document.createElement("div");
    div.style.width = 660 / number + "px";
    div.style.height = 660 / number + "px";
    gridContainer.appendChild(div).className = "cell";
  }

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "lightblue";
    });
  });
}

// remove color
function clearColor() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = null;
  });
}

// start new grid
function newGrid() {
  let num = prompt("Please enter grid number [1 - 100]: ");

  if (num >= 1 && num <= 100) {
    while (gridContainer.hasChildNodes()) {
      gridContainer.removeChild(gridContainer.lastChild);
    }
    createGrid(num);
  } else {
    alert("Please enter number between 1 and 100: ");
    newGrid();
  }
}

createGrid(16);
clearBtn.addEventListener("click", clearColor);
newBtn.addEventListener("click", newGrid);
