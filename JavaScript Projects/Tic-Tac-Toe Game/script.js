document.addEventListener("DOMContentLoaded", function () {

    let boxes = document.querySelectorAll(".box");
    let winBox = document.querySelector(".winingBox");
    let gamebox = document.querySelector(".gameContainer");
    let resetGame = document.querySelectorAll(".reset");
    let winMassages = document.querySelector(".winingMassage");
    let hideBox = document.querySelector("#hideBox");
    let newGame = document.querySelector(".newGame");

    console.log(hideBox);
    console.log(winBox);

    // newGame.style.display = "none";
    winBox.style.display = "none";
    let player_X = true;

    const winngPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8]
    ]

    const resetGameAll = () => {
        player_X = true;
        enableBoxes();
        winBox.style.display = "none";
        gamebox.style.display = "flex";
        hideBox.style.display = "block";
    };

    resetGame.forEach((btn) => btn.addEventListener("click", resetGameAll))

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (player_X) {
                box.innerText = "X"; //Player 1 (X)
                player_X = false;
            }
            else {
                box.innerText = "O"; //Player 2 (O)
                player_X = true;
            }
            box.disabled = true;
            checkWinpatterns();
        })
    })

    const disableBoxes = () => {
        for (let box of boxes) {
            box.disabled = true;
        }
    };
    const enableBoxes = () => {
        for (let box of boxes) {
            box.disabled = false;
            box.innerText = "";
        }
    };

    const showWinner = (winner) => {
        winBox.style.display = "flex";
        gamebox.style.display = "none";
        hideBox.style.display = "none";
        newGame.style.display = "flex";
        winMassages.innerText = (winner === "Tie") ? "It's a\n Tie !!" : `!! Winner !!\n!! ${winner} !!`;
        disableBoxes();
    };

    const checkWinpatterns = () => {
        for (let pattern of winngPatterns) {
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
                if (pos1Val === pos2Val && pos2Val === pos3Val) {
                    showWinner(pos1Val);
                    return;
                }
            }
        }
        const allFilled = Array.from(boxes).every(box => box.innerText !== "");
        if (allFilled) {
            showWinner("Tie");
        }

    }

})
