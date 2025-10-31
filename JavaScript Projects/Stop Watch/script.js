/** @format */

document.addEventListener("DOMContentLoaded", () => {
	let start_btn = document.querySelector(".start_btn");
	let reset_btn = document.querySelector(".reset_btn");
	let stop_btn = document.querySelector(".stop_btn");
	let time_btn = document.querySelector(".time_btn");
	let countDown = document.getElementById("countDown");
	let resetValue = document.querySelector(".resetValue");

	let startTime = 0;
	countDown.innerText = `${startTime}`;
	let intervalId;

	const start_btnFunction = () => {
		countDown.innerText = `${startTime++}`;

		intervalId = setInterval(() => {
			countDown.innerText = `${startTime++}`;
		}, 1000);
	};

	const stop_btnFunction = () => {
		if (startTime !== 0) {
			const newPara = document.createElement("p");
			newPara.innerHTML = `<p>Your Stop Time is ${countDown.innerText}</p>`;
			resetValue.append(newPara);
			clearInterval(intervalId);
		}
	};

	const reset_btnFunction = () => {
		startTime = 0;
		countDown.innerText = `${startTime}`;
		clearInterval(intervalId);
		resetValue.innerHTML = ``;
	};
	const time_btnFunction = () => {
		if (startTime !== 0) {
			const newPara = document.createElement("p");
			newPara.innerHTML = `<p>Your Display Time is ${countDown.innerText}</p>`;
			resetValue.append(newPara);
		}
	};

	start_btn.addEventListener("click", start_btnFunction);
	reset_btn.addEventListener("click", reset_btnFunction);
	stop_btn.addEventListener("click", stop_btnFunction);
	time_btn.addEventListener("click", time_btnFunction);
});
