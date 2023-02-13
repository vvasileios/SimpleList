//reference and stores it in the button variable.
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

//returns the length of the input field value3
function inputLength() {
	return input.value.length;
}

//This function creates a new list item (li) element
function createListElement() {
	let li = document.createElement("li");
	//adds a text node to the list item
	li.appendChild(document.createTextNode(input.value));
	//creates a new button element
	let deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Delete";
	deleteButton.style.marginLeft = "10px";
	deleteButton.addEventListener("click", function() {
		li.remove();
	});
	li.appendChild(deleteButton);
	li.addEventListener("click", function() {
		li.classList.toggle("done");
	});
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);