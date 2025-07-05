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

    const player1 = () => {
        player1Name = prompt("Enter Player 1 Name: ");
    }
    const player2 = () => {
        player2Name = prompt("Enter Player 2 Name: ");
    }
    // newGame.style.display = "none";
    winBox.style.display = "none";
    let player_X = true;
    player1();
    player2();

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
        gamebox.style.display = "grid";
        hideBox.style.display = "block";
        // player1();
        // player2();
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
        if (winner === "X") {
            if (player1Name == "") {
                winMassages.innerText = `!! Winner !!\n!! PLAYER 1 !!\n!! ${winner} !!`;
            }
            else {
                winner = player1Name.toUpperCase();
                winMassages.innerText = `!! Winner !!\n!! PLAYER 1 !!\n!! ${winner} !!`;
            }
        }
        else if (winner === "O") {
            if (player2Name == "") {
                winMassages.innerText = `!! Winner !!\n!! PLAYER 2 !!\n!! ${winner} !!`;
            }
            else {
                winner = player2Name.toUpperCase();
                winMassages.innerText = `!! Winner !!\n!! PLAYER 2 !!\n!! ${winner} !!`;
            }
        }
        else if (winner === "Tie") {
            winMassages.innerText = `It's a\n TIE !!`;
        };

        // winMassages.innerText = (winner === "Tie") ? "It's a\n Tie !!" : `!! Winner !!\n!! ${winner} !!`;
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
