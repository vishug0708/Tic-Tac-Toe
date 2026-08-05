let currentPlayer = "X";
let array = Array(9).fill(null);
const msg = document.querySelector(".msg");
const cols = document.querySelectorAll('.col');
const resetButton = document.querySelector('button');

function checkWinner() {
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
        msg.textContent = `Winner is ${currentPlayer}`;
        msg.style.color = "green";
        msg.style.fontSize = "20px";

        cols.forEach(col => {
            col.style.pointerEvents = 'none';
        });
        return;
    }

    if (!array.some(e => e === null)) {
        msg.textContent = "Draw!!!";
        msg.style.color = "red";
        msg.style.fontSize = "20px";

        cols.forEach(col => {
            col.style.pointerEvents = 'none';
        });
        return;
    }
}

function handleClick(el) {
    const id = Number(el.id);
    if (array[id] != null) return;
    array[id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
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
});