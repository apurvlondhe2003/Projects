document.addEventListener("DOMContentLoaded", function () {
    let darkButton = document.querySelector(".darkButton");
    let lightButton = document.querySelector(".lightButton");
    let body = document.querySelector(".main");

    let mode = lightButton;

    body.addEventListener("click", () => {
        if (mode === lightButton) {
            console.log("you are in Light mode");
            mode = darkButton;
            body.style.backgroundColor= "black";
            lightButton.style.display = "block";
            darkButton.style.display = "none";
        }
        else {
            console.log("you are in Dark mode");
            mode = lightButton;
            body.style.backgroundColor= "white";
            lightButton.style.display = "none";
            darkButton.style.display = "block";
        }
    })
})