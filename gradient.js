var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradiante");
var color3_1 = document.querySelector(".color3_1");
var color3_2 = document.querySelector(".color3_2");
var reset = document.getElementById("reset");

function initialBackground(){
	body.style.background = "linear-gradient(to right, red, yellow)";
	css.textContent = body.style.background + ";";
}

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function colorChange (){
	body.style.background = "linear-gradient(to right, " + color3_1.value + ", " + color3_2.value + ")";
	css.textContent = body.style.background + ";";
}

function resetBtn(event){
	var resetBotton = event.target;
	resetBotton.onclick = removeColor;
}

function removeColor(){
	color3_1.value = ""; 
	color3_2.value = "";
}

initialBackground();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3_1.addEventListener("input", colorChange);
color3_2.addEventListener("input", colorChange);
reset.addEventListener("click", resetBtn);

