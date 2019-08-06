var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomKnop = document.querySelector(".randomKnop")
const h3 = document.querySelector("h3");

function randomCode() {
	var letters = "0123456789ABCDEF".split("");
	var color = "#";
	for (var i = 0; i < 6; i++ ) {
	color += letters[Math.round(Math.random() * 15)];
	}
	return color;
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

function initialGradientValues() {
    color1.value = "#11b6ed";
    color2.value = "#efefef";
    css.textContent = window.getComputedStyle(body).getPropertyValue("background-image")+ ";";
 
} 

function setBackground() {
	color1.value = randomCode();
	color2.value = randomCode();
	setGradient()
}

h3.onclick = function() {
  document.execCommand("copy");
}

h3.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", h3.textContent);
    alert(event.clipboardData.getData("text") 
    + " is gekopieerd naar het klembord.")
  }
});

window.onload = initialGradientValues();

color1.addEventListener("input", setGradient);
	
color2.addEventListener("input", setGradient);

randomKnop.addEventListener('click', setBackground);


