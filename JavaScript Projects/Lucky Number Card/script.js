let winningNumber = 15;
let userEnterNumber = prompt("Guess The Game Number: ");

while (userEnterNumber != winningNumber) {
    userEnterNumber= prompt("Guess Again!");
}

alert("Congratulations, You Enter Right Number !")