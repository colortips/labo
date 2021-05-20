const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const user = document.querySelector(".user--fill");
const gb = document.querySelector(".gb--fill");
const project = document.querySelector(".project--fill");
c1.addEventListener("mouseover", c1mOver, false);
c1.addEventListener("mouseout", mOut, false);
c2.addEventListener("mouseover", c2mOver, false);
c2.addEventListener("mouseout", mOut, false);
c3.addEventListener("mouseover", c3mOver, false);
c3.addEventListener("mouseout", mOut, false);

function c1mOver() {
	user.style.width = "5%";
	gb.style.width = "5%";
	project.style.width = "5%";
}
function c2mOver() {
	user.style.width = "20%";
	gb.style.width = "50%";
	project.style.width = "20%";
}
function c3mOver() {
	user.style.width = "100%";
	gb.style.width = "100%";
	project.style.width = "100%";
}
function mOut() { 
	user.style.width = "0%";
	gb.style.width = "0%";
	project.style.width = "0%";
	
}