var target = document.querySelector(".word");
var def = document.querySelector(".def");
target.addEventListener("mouseover", mOver, false);
target.addEventListener("mouseout", mOut, false);

function mOver() {
    def.classList.add("hover");
}

function mOut() {
    def.classList.remove("hover");
}