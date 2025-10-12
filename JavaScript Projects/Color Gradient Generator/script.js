/** @format */

document.addEventListener("DOMContentLoaded", () => {
	let leftButton = document.getElementById("leftButton");
	let rightButton = document.getElementById("rightButton");
	let genGradButton = document.getElementById("genGradButton");
	let copyCode = document.getElementById("copyClipBoard");
	let leftAngle = document.getElementById("leftAngle");
	let rightAngle = document.getElementById("rightAngle");
	let topAngle = document.getElementById("topAngle");
	let bottomAngle = document.getElementById("bottomAngle");

	const HexValues = () => {
		let hexValue = "0123456789abcdef";
		let colors = "#";
		for (let i = 0; i < 6; i++) {
			colors = colors + hexValue[Math.floor(Math.random() * 16)];
		}
		return colors;
	};

	let rgbColor1 = HexValues();
	let rgbColor2 = HexValues();
	let angle = "right";

	const bgc = (rgbColor1, rgbColor2, angle) => {
		leftButton.innerText = `${rgbColor1}`;
		leftButton.style.backgroundColor = `${rgbColor1}`;

		rightButton.innerText = `${rgbColor2}`;
		rightButton.style.backgroundColor = `${rgbColor2}`;

		genGradButton.style.backgroundImage = `linear-gradient(to ${angle}, ${rgbColor1}, ${rgbColor2})`;

		document.body.style.backgroundImage = `linear-gradient(to ${angle}, ${rgbColor1} , ${rgbColor2})`;
		copyCode.innerText = `background-image: linear-gradient\n(to ${angle}, ${rgbColor1}, ${rgbColor2})`;
	};

	bgc(rgbColor1, rgbColor2, angle);

	const leftButtonHandle = () => {
		rgbColor1 = HexValues();
		bgc(rgbColor1, rgbColor2, angle);
	};

	const rightButtonHandle = () => {
		rgbColor2 = HexValues();
		bgc(rgbColor1, rgbColor2, angle);
	};

	const genGradButtonHandle = () => {
		rgbColor1 = HexValues();
		rgbColor2 = HexValues();
		bgc(rgbColor1, rgbColor2, angle);
	};

	const copyCodeHandle = () => {
		navigator.clipboard.writeText(copyCode.innerText);

		// Toast create
		let toast = document.createElement("div");
		toast.innerText = "✅ Copied to Clipboard!";
		toast.className = "toastMsg";
		document.body.appendChild(toast);

		// 2.5s baad remove kar do
		setTimeout(() => {
			toast.remove();
		}, 2500);
		// alert(`Copied the Text: \n\n${copyCode.innerText}`);
	};

	const leftAngleHandle = () => {
		angle = "left";
		bgc(rgbColor1, rgbColor2, angle);
	};

	const rightAngleHandle = () => {
		angle = "right";
		bgc(rgbColor1, rgbColor2, angle);
	};

	const topAngleHandle = () => {
		angle = "top";
		bgc(rgbColor1, rgbColor2, angle);
	};

	const bottomAngleHandle = () => {
		angle = "bottom";
		bgc(rgbColor1, rgbColor2, angle);
	};

	leftButton.addEventListener("click", leftButtonHandle);
	rightButton.addEventListener("click", rightButtonHandle);
	genGradButton.addEventListener("click", genGradButtonHandle);
	copyCode.addEventListener("click", copyCodeHandle);
	leftAngle.addEventListener("click", leftAngleHandle);
	rightAngle.addEventListener("click", rightAngleHandle);
	topAngle.addEventListener("click", topAngleHandle);
	bottomAngle.addEventListener("click", bottomAngleHandle);
});
