var slider = document.getElementById("myRange");
var wave = document.getElementById("wave");
wave.style.transform = "translatey("+slider.value+"%)";

slider.oninput = function() {
	wave.style.transform = "translatey("+slider.value+"%)";
}