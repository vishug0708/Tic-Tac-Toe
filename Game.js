let currentPlayer = "X";
let array = Array(9).fill(null);
const msg = document.querySelector(".msg");
const cols = document.querySelectorAll('.col');
const resetButton = document.querySelector('button');
const winningLine = document.querySelector(".winning-line");

function checkWinner() {
    let winningCombination = null;

    if (
        (array[0] !== null && array[0] == array[1] && array[1] == array[2]) ||
        (array[3] !== null && array[3] == array[4] && array[4] == array[5]) ||
        (array[6] !== null && array[6] == array[7] && array[7] == array[8]) ||
        (array[0] !== null && array[0] == array[3] && array[3] == array[6]) ||
        (array[1] !== null && array[1] == array[4] && array[4] == array[7]) ||
        (array[2] !== null && array[2] == array[5] && array[5] == array[8]) ||
        (array[0] !== null && array[0] == array[4] && array[4] == array[8]) ||
        (array[2] !== null && array[2] == array[4] && array[4] == array[6])
    ) {
        if (array[0] !== null && array[0] == array[1] && array[1] == array[2]) {
            winningCombination = "row-1";
        } else if (array[3] !== null && array[3] == array[4] && array[4] == array[5]) {
            winningCombination = "row-2";
        } else if (array[6] !== null && array[6] == array[7] && array[7] == array[8]) {
            winningCombination = "row-3";
        } else if (array[0] !== null && array[0] == array[3] && array[3] == array[6]) {
            winningCombination = "col-1";
        } else if (array[1] !== null && array[1] == array[4] && array[4] == array[7]) {
            winningCombination = "col-2";
        } else if (array[2] !== null && array[2] == array[5] && array[5] == array[8]) {
            winningCombination = "col-3";
        } else if (array[0] !== null && array[0] == array[4] && array[4] == array[8]) {
            winningCombination = "diagonal-1";
        } else if (array[2] !== null && array[2] == array[4] && array[4] == array[6]) {
            winningCombination = "diagonal-2";
        }

        msg.textContent = `Winner is ${currentPlayer}`;
        msg.style.color = "green";
        msg.style.fontSize = "20px";

        cols.forEach(col => {
            col.style.pointerEvents = 'none';
        });

        winningLine.className = `winning-line show ${winningCombination}`;

        return true;
    }

    if (!array.some(e => e === null)) {
        msg.textContent = "Draw!!!";
        msg.style.color = "red";
        msg.style.fontSize = "20px";

        cols.forEach(col => {
            col.style.pointerEvents = 'none';
        });

        return true;
    }

    return false;
}

function handleClick(el) {
    const id = Number(el.id);

    if (array[id] != null) return;

    array[id] = currentPlayer;
    el.innerText = currentPlayer;

    const gameOver = checkWinner();

    if (gameOver) return;

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

resetButton.addEventListener('click', () => {
    currentPlayer = "X";
    array = Array(9).fill(null);

    msg.textContent = "";
    msg.style.color = "black";
    msg.style.fontSize = "16px";

    cols.forEach(col => {
        col.innerText = "";
        col.style.pointerEvents = 'auto';
    });

    winningLine.className = "winning-line";
});
