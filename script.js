document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const diceResult = document.getElementById("diceResult");
    const rollDiceBtn = document.getElementById("rollDice");

    const gridSize = 5;
    let playerPosition = 0;  // Start at first cell

    // Create board grid
    function createBoard() {
        for (let i = 0; i < gridSize * gridSize; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.index = i;

            if (i === 0) {
                const player = document.createElement("div");
                player.classList.add("player");
                cell.appendChild(player);
            }

            board.appendChild(cell);
        }
    }

    // Roll dice function
    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    // Move player function
    function movePlayer(steps) {
        let cells = document.querySelectorAll(".cell");
        let newPosition = playerPosition + steps;

        if (newPosition >= gridSize * gridSize) {
            alert("You Win!");
            playerPosition = 0;  // Restart game
        } else {
            playerPosition = newPosition;
        }

        // Update board
        cells.forEach(cell => cell.innerHTML = "");
        let player = document.createElement("div");
        player.classList.add("player");
        cells[playerPosition].appendChild(player);
    }

    // Button click event to roll dice
    rollDiceBtn.addEventListener("click", () => {
        let result = rollDice();
        diceResult.textContent = result;
        movePlayer(result);
    });

    createBoard();
});
