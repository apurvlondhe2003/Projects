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
countryList
    const updateFlag = (element) => {
        let currCode = element.value;
        let countryCode = countryList[currCode];
        const info = countryList[currCode];
        let img = element.parentElement.querySelector("img");
        if (countryCode && countryCode !== "FROM" && countryCode !== "TO") {
            let newSrc = `https://flagsapi.com/${info.countryCode}/shiny/64.png`;
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
        select.append(defaultOption);

        for (let currCode of Object.keys(countryList)) {
            if (currCode === "FROM" || currCode === "TO") continue;
            const info = countryList[currCode];
            let newOption = document.createElement("option");
            newOption.innerText = info && info.countryName ? `${info.countryName}` : currCode;
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
            massage.style.color = "red";
            massage.innerText = "Please select both currencies.";
            return;
        }


        if (inputAmount.value === "" || inputAmount.value < 1) {
            inputAmount.value = "1";
        }
        if (inputAmount.value > 10000) {
            massage.style.display = "block";
            massage.style.color = "red";
            massage.innerText ="Enter Amount Between\n 1 TO 10000";
        }
        else {
            const URL = `${BASE_URl}/${fromCurr.value.toLowerCase()}.json`;
            try {
                massage.style.display = "block";
                massage.style.color = "#1c90f6";
                massage.innerText = "Fetching rate...";
                let response = await fetch(URL);
                let data = await response.json();
                let rate = await data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
                let finalAmount = inputAmount.value * rate;
                const fromInfo = countryList[fromCurr.value];
                const toInfo = countryList[toCurr.value];
                massage.innerText = `${inputAmount.value} ${fromInfo?.countryName || ""} (${fromCurr.value}) \nTO\n  ${finalAmount.toFixed(2)} ${toInfo?.countryName || ""} (${toCurr.value})`;
                // massage.innerText = `${inputAmount.value} ${fromCurr.value} ${finalAmount.toFixed(2)} ${toCurr.value}`;
            }
            catch (error) {
                massage.innerText = "Something went wrong. Please try again.";
            }
        }

    }

    submitImg.addEventListener("click", exchangeResult);
    getExchange.addEventListener("click", exchangeResult);

    resetButton.addEventListener("click", function () {
        inputAmount.value = "";
        massage.innerText = "";
        fromCurr.value = "FROM";
        toCurr.value = "TO";
        massage.style.display = "none";
        updateFlag(fromCurr);
        updateFlag(toCurr);
        document.querySelectorAll(".flagImg").forEach(img => {
            img.style.display = "none";
        });
    })
})
