const sky = document.querySelector('.sky')

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function addSkyLine(nbr) {
    let skyLine = "";
    for (let i = 0; i < nbr; i++) {
        const size = getRandomInt(5) + 1;
        skyLine += `<div class="sky-line" style="
			width: ${size * 5}px;
			height: ${size}px;
			top: ${10 + (getRandomInt(8) * 20)}px;
			animation: skyline ${0.5 + Math.random() * 4}s ease-in-out infinite;
			animation-delay: ${(Math.random() - 0.5) * 5}s
			"></div>`
    }
    sky.innerHTML = skyLine
}
addSkyLine(10)
