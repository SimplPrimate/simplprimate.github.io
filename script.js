var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");
const randomNum = () => Math.floor(Math.random() *  255);

function randomizeColor() {
  body.style.background = 
    "linear-gradient(to right, " 
    + randomNum(); 
    + ", " 
    + randomNum(); 
    + ")";

    css.textContent = body.style.background + ";";
}

function setGradient() {
  body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomizeColor);