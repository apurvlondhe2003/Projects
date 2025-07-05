document.addEventListener("DOMContentLoaded", function () {
    const user_input = document.getElementById("user-input");
    const search_button = document.getElementById("search-button");
    const statsContainer = document.querySelector(".stats-container");
    const easy_progress = document.querySelector(".easy-progress");
    const medium_progress = document.querySelector(".medium-progress");
    const hard_progress = document.querySelector(".hard-progress");
    const easy_lable = document.getElementById("easy-lable");
    const medium_lable = document.getElementById("medium-lable");
    const hard_lable = document.getElementById("hard-lable");
    const stats_card_container = document.querySelector(".stats-card");

    function validation_username(username) {
        if (username.trim() === "") {
            alert("Username cannot be empty!!!!");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if (!isMatching) {
            alert("invalid User Name");
        }
        return isMatching;
    }


    async function fetchUserDetails(username) {
        try {
            search_button.textContent = "Searching...";
            search_button.disabled = true;

            const response = await fetch(`https://leetcode-stats.tashif.codes/${username}`);
            if (!response.ok) throw new Error('User not found');
            const parseData = await response.json();
            console.log("Logging data ", parseData);

            displayuserData(parseData);
        }
        catch (error) {
            statsContainer.innerHTML = `<h2>No Data Found</h2>`;
        }
        finally {
            search_button.textContent = "Search";
            search_button.disabled = false;
        }
    }

    function updateProgress(solved, total, lable, circle) {
        const progressDegree = (solved / total) * 100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        lable.textContent = `${solved}/${total}`;
    }

    function displayuserData(data) {
        updateProgress(data.easySolved, data.totalEasy, easy_lable, easy_progress);
        updateProgress(data.mediumSolved, data.totalMedium, medium_lable, medium_progress);
        updateProgress(data.hardSolved, data.totalHard, hard_lable, hard_progress);
        const cardsData = [
            { lable: "Overall Easy Submission: ", value: `${data.easySolved} / ${data.totalEasy}` },
            { lable: "Overall Medium Submission: ", value: `${data.mediumSolved} / ${data.totalMedium}` },
            { lable: "Overall Hard Submission: ", value: `${data.hardSolved} / ${data.totalHard}` },
            { lable: "Overall Total Submission: ", value: data.totalSolved },
            { lable: "Overall Ranking: ", value: data.ranking },
            { lable: "Overall Acceptance Rate: ", value: `${data.acceptanceRate}%` },
        ];
        console.log("Card Ka Data: ", cardsData);
        stats_card_container.innerHTML = cardsData.map(data =>
            `<div class="card">
                <h3>${data.lable}</h3>
                <h2>${data.value}</h2>
                </div>`
        ).join("")

    }
    search_button.addEventListener('click', function () {
        const username = user_input.value;
        console.log("Loggin User Name: ", username);
        if (validation_username(username)) {
            fetchUserDetails(username);
        }
    })
})