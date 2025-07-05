document.addEventListener("DOMContentLoaded", () => {
    const choices = document.querySelectorAll(".choice");
    const massages = document.querySelector("#massage");
    let userScore = document.querySelector("#userScore");
    let computerScore = document.querySelector("#computerScore");

    userPoint = 0;
    computerPoint = 0;

    const genComChoice = () => {
        const options = ["rock", "paper", "scissor"];
        const randomIdx = Math.floor(Math.random() * 3);
        return options[randomIdx];
    }

    const drawGame = () => {
        massages.innerText = `Game was DRAW \n!!! Play Again !!!`;
        massages.style.color = "#222";
        massages.style.backgroundColor = "#ffffff00";
    }

    const showWinner = (userWin, userChoice, computerChoice,userScore, computerScore) => {
        if (userWin) {
            userPoint++;
            userScore.innerText = userPoint;
            massages.innerText = `!!! YOU WIN !!!\n Your ${userChoice.toUpperCase()} Beats ${computerChoice.toUpperCase()}`;
            massages.style.color = "white";
            massages.style.backgroundColor = "green";
        }
        else {
            computerPoint++;
            computerScore.innerText = computerPoint;
            massages.innerText = `!!! YOU LOST !!!\n${computerChoice.toUpperCase()} Beats your ${userChoice.toUpperCase()}`;
            massages.style.color = "white";
            massages.style.backgroundColor = "red";
        }
    }

    const palyGames = (userChoice) => {
        const computerChoice = genComChoice();
        if (userChoice === computerChoice) {
            drawGame();
        }
        else {
            let userWin = true;
            if (userChoice === "rock") {
                //paper, scissor;
                userWin = computerChoice === "paper" ? false : true;
            }
            else if (userChoice === "paper") {
                //rock, scissor;
                userWin = computerChoice === "scissor" ? false : true;
            }
            else {
                //rock, paper;
                userWin = computerChoice === "rock" ? false : true;
            }

            showWinner(userWin, userChoice, computerChoice,userScore,computerScore);
        }
    }

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            palyGames(userChoice);
        })
    })
})