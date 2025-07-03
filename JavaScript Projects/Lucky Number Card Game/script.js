document.addEventListener("DOMContentLoaded", function () {
    let userEnterNumber = document.getElementById("user_Input");
    let submitButton = document.getElementById("submit");
    let reset = document.getElementById("reset");
    let notLuckyNumber = document.querySelector(".notLuckyNumber");
    let luckyNumber = document.querySelector(".luckyNumber");


    let winningNumber = 1404;

    submitButton.addEventListener("click", function () {
        let enterNumber = parseInt(userEnterNumber.value);

        if (/^\d{4}$/.test(enterNumber)) {
            if (enterNumber === winningNumber) {
                luckyNumber.style.display = "block"
            }
            else {
                notLuckyNumber.style.display = "block"
            }
        }
        else {
            alert("Please enter a valid 4-digit number.")
        }
    })

    reset.addEventListener("click", function () {
        userEnterNumber.value = "";
        luckyNumber.style.display = "none";
        notLuckyNumber.style.display = "none";
    })

    submitButton.addEventListener("click", () => {
        let enterNumber = parseInt(userEnterNumber.value);
        if (enterNumber != winningNumber) {
            setTimeout(() => {
                userEnterNumber.value = "";
                notLuckyNumber.style.display = "none";
            }, 3000);
        }
    })
})