var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");

list.forEach((list) => {
  list.addEventListener('click', () => {
    console.log("Click Worked!!");
    })
  })

  function list() {
    list.classList.toggle.class("done");
  }

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  } 
}

function addListAfterKeyPress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);