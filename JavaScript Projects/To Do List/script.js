/** @format */
document.addEventListener("DOMContentLoaded", () => {
	let getInput = document.getElementById("inputBox");
	let addButton = document.getElementById("addButton");
	let todoListBox = document.getElementById("todoListBox");

	//** Display Todo List Data */
	const displayTodo = (Todo) => {
		const listDiv = document.createElement("div");
		listDiv.classList.add("listDiv");
		listDiv.innerHTML = `<li>${Todo}</li> <button class="deleteButton">Delete</button>`;
		todoListBox.append(listDiv);
	};

	//** Local Storage Data Get */
	const getTodoListData = () => {
		return JSON.parse(localStorage.getItem("Todo"));
	};

	const addNewLocalStorageData = (localTodoList) => {
		localStorage.setItem("Todo", JSON.stringify(localTodoList));
		getTodoListData();
	};

	//** Add Local Storage Data other wise Empty Array */
	localTodoList = getTodoListData() || [];

	//** Local Storage Data Display */
	const showTodoListData = () => {
		console.log(localTodoList);
		localTodoList.forEach((curElem) => {
			displayTodo(curElem);
		});
	};

	//** Add todo List Data */
	const addTodoData = (e) => {
		e.preventDefault();
		const todoListData = getInput.value.trim().toLowerCase();

		//** Check Duplicate Data & Empty Data to Local Storage & Display List */
		if (
			getInput.value !== "" &&
			!localTodoList.includes(todoListData)
		) {
			localTodoList.push(todoListData);
			localTodoList = [...new Set(localTodoList)];
			localStorage.setItem("Todo", JSON.stringify(localTodoList));
			displayTodo(todoListData);
		}

		getInput.value = "";
	};

	//** Remove Todo List Data One by One */
	const removeElem = (e) => {
		e.preventDefault();
		targetElem = e.target.previousElementSibling.innerText;
		targetParent = e.target.parentElement;

		localTodoList = localTodoList.filter((curElem) => {
			return curElem !== targetElem.toLowerCase();
		});

		addNewLocalStorageData(localTodoList);
		targetParent.remove();
	};

	//** Add todo List - Function Call */
	addButton.addEventListener("click", (e) => {
		addTodoData(e);
	});

	//** Local Storage Data Display - Function Call */
	showTodoListData();

	//** Remove Todo List Data One by One - Function Call */
	todoListBox.addEventListener("click", (e) => {
		if (e.target.classList.contains("deleteButton")) {
			console.log("Ok Code");
			removeElem(e);
		}
	});
});
