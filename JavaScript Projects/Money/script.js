document.addEventListener("DOMContentLoaded", () => {
    const BASE_URl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
    const dropDowns = document.querySelectorAll(".dropdown select");
    const getExchange = document.querySelector(".getExchange");
    const inputAmount = document.querySelector("#inputAmmount");
    const fromCurr = document.querySelector(".fromSelectOption");
    const toCurr = document.querySelector(".toSelectOption");
    const massage = document.querySelector(".massage");
    const resetButton = document.querySelector(".resetButton");
    const submitImg = document.querySelector("#submitImg");

    const updateFlag = (element) => {
        let currCode = element.value;
        let countryCode = countryList[currCode];
        let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
        let img = element.parentElement.querySelector("img");
        if (countryCode && countryCode !== "FROM" && countryCode !== "TO") {
            img.src = newSrc;
            img.style.display = "inline-block";
        }
        else {
            img.style.display = "none";
        }
    }
    for (let select of dropDowns) {
        let defaultOption = document.createElement("option");
        if (select.name === "from") {
            defaultOption.innerText = "FROM";
            defaultOption.value = "FROM";
        } else {
            defaultOption.innerText = "TO";
            defaultOption.value = "TO";
        }
        defaultOption.selected = true;
        defaultOption.disabled = true;
        // defaultOption.hidden = true;
        select.append(defaultOption);

        for (let currCode in countryList) {
            if (currCode === "FROM" || currCode === "TO") continue;
            let newOption = document.createElement("option");
            newOption.innerText = currCode;
            newOption.value = currCode;
            select.append(newOption);
        }
        select.addEventListener("change", (evt) => {
            updateFlag(evt.target);
        });
        updateFlag(select);
    }

    const exchangeResult = async (evt) => {
        evt.preventDefault();

        if (fromCurr.value === "FROM" || toCurr.value === "TO") {
            massage.style.display = "block";
            massage.innerText = "Please select both currencies.";
            return;
        }

        if (inputAmount.value === "" || inputAmount.value < 1) {
            inputAmount.value = "1";
        }
        const URL = `${BASE_URl}/${fromCurr.value.toLowerCase()}.json`;
        try {
            massage.innerText = "Fetching rate...";
            let response = await fetch(URL);
            let data = await response.json();
            let rate = await data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
            let finalAmount = inputAmount.value * rate;
            massage.style.display= "block";
            massage.innerText = `${inputAmount.value} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
        }
        catch (error) {
            massage.innerText = "Something went wrong. Please try again.";
        }
    }

    submitImg.addEventListener("click", exchangeResult);
    getExchange.addEventListener("click", exchangeResult);

    resetButton.addEventListener("click", function () {
            inputAmount.value = "";
            massage.innerText = "";
            fromCurr.value = "FROM";
            toCurr.value = "TO";
            massage.style.display= "none";
            updateFlag(fromCurr);
            updateFlag(toCurr);
            document.querySelectorAll(".flagImg").forEach(img => {
                img.style.display = "none";
            });
        })
})
