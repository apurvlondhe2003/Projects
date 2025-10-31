/** @format */
document.addEventListener("DOMContentLoaded", () => {
	const apiBody = document.querySelector(".api_body");
	const apiUrl = "https://icanhazdadjoke.com/";

	const fetchData = () => {
		fetch(apiUrl, { headers: { Accept: "application/json" } })
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				const Eng_Joke = data.joke;
				apiBody.innerHTML = `<p>${Eng_Joke}</p>`;
			})
			.catch((error) => {
				console.log("Error", error);
			});
	};

	fetchData();
	// Add event listener to fetch a new joke when the button is clicked
	document.getElementById("fetchJoke").addEventListener("click", fetchData);
});
