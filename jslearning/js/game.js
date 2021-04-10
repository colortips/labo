const game_window = document.querySelector('.game__container')
const racket = document.querySelector('.game__racket');
const btn_left = document.querySelector('.button__left');
const btn_right = document.querySelector('.button__right');
var left_clicked = false;
var right_clicked = false;
var loaded = false;
// const ball = document.querySelector('.game__ball');

// var rect = ball.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);

keyCodes = { left: 37, up: 38, right: 39, down: 40 };
keys = [];

window.addEventListener('keydown', function (evt) {
    keys[evt.keyCode] = true;
});

window.addEventListener('keyup', function (evt) {
    keys[evt.keyCode] = false;
});
function left() {
    left_clicked = true;
}
function right() {
    right_clicked = true;
}
function stop() {
    left_clicked = false;
    right_clicked = false;
}
var racket_x = game_window.clientWidth/2 - racket.clientWidth/2;
// var ball_x = 0;
// var ball_y = 0;
setInterval(function () {
    // update position - left/right
    if (keys[keyCodes.left] || left_clicked) {
        if (racket_x > 0) racket_x -= 2;
    } else if (keys[keyCodes.right] || right_clicked) {
        if (racket_x < game_window.clientWidth - racket.clientWidth) racket_x += 2;
    }

    // set racket position
    racket.style.transform = "translate(" + racket_x + "px, -10px)";
    // racket.style.left = racket_x + "px";
    // if (ball_y < game_window.clientHeight - ball.clientHeight - racket.clientHeight - 10) ball_y += 1;

    // set ball position
    //    ball.style.transform = "translate("+ball_x+"px,"+ball_y+"px)"; 

}, 1 / 30);

var mousePosition;
var offset = [0, 0];
var isDown = false;

racket.addEventListener('mousedown', function (e) {
    isDown = true;
    offset = [
        racket.offsetLeft - e.clientX,
        racket.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function () {
    isDown = false;
}, true);
document.addEventListener('mousemove', function (event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x: event.clientX,
            y: event.clientY

        };
        if ((mousePosition.x + offset[0] - racket.clientWidth) > -game_window.clientWidth/2 &&
         (mousePosition.x + offset[0] - racket.clientWidth) < game_window.clientWidth /2 - racket.clientWidth) {
            // racket.style.left = (mousePosition.x + offset[0] - racket.clientWidth / 2) + 'px';
        }
        // racket.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);