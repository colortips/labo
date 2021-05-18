let frame = document.querySelector('.screen');
let foreground = document.querySelector('.foreground');
frame.addEventListener('mousemove', e => {
			foreground.style.height = e.offsetY +'px';
    });
frame.addEventListener('mouseleave', e => {
  foreground.style.height = '200px'
})