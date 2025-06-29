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
            search_button.desable = true;

            // const response = await fatch(url);
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
            const targetUrl = 'https://leetcode.com/graphql/';
            const myHeader = new Headers();
            myHeader.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: "\n      query userSessionProgress($username: String!) {\n       allQuestionsCount {\n       difficulty\n        count\n     }\n     matchedUser(username: $username) {\n        submitStats {\n     acSubmissionNum{\n      difficulty\n        count\n     submissions\n       }\n     totalSubmissionNum {\n      difficulty\n        count\n     submissions\n       }\n     }\n     }\n     }\n",
                variables: { "username": `${username}` }
            })
            const requestOptions = {
                method: "POST",
                headers: myHeader,
                body: graphql,
                redirect: "follow"
            };

            const response = await fetch(proxyUrl + targetUrl, requestOptions);
            if (!response.ok) {
                throw new Error("Unable to fetch the User Details");
            }
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
    function displayuserData(parseData) {
        const totalQues = parseData.data.allQuestionsCount[0].count;
        const totalEasyQues = parseData.data.allQuestionsCount[1].count;
        const totalMediumQues = parseData.data.allQuestionsCount[2].count;
        const totalHardQues = parseData.data.allQuestionsCount[3].count;

        const solvedTotalQues = parseData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedEasyQues = parseData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedMediumQues = parseData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedHardQues = parseData.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateProgress(solvedEasyQues, totalEasyQues, easy_lable, easy_progress);
        updateProgress(solvedMediumQues, totalMediumQues, medium_lable, medium_progress);
        updateProgress(solvedHardQues, totalHardQues, hard_lable, hard_progress);

        const cardsData = [
            { lable: "Overall Total Submission: ", value: parseData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions },
            { lable: "Overall Easy Submission: ", value: parseData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions },
            { lable: "Overall Medium Submission: ", value: parseData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions },
            { lable: "Overall Hard Submission: ", value: parseData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions },
        ];

        console.log("Card Ka Data: ", cardsData);
        stats_card_container.innerHTML = cardsData.map(
            data =>
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