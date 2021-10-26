const line = document.querySelector('.line');
const btn = document.querySelector('.btn--upload');
const file = document.querySelector('.uploadfile');

const cloud = document.querySelector('.cloud');
const load = document.querySelector('.load');
const check = document.querySelector('.check');

let exec = false;

function upload() {
    console.log('input file not empty');
    exec = true;
    line.classList.add('done');
    btn.innerHTML = "uploading...";
    btn.style.cursor = "default";
    cloud.style.opacity = "0";
    load.style.opacity = "1";

    setInterval(() => {
        btn.innerHTML = "done";
        load.style.opacity = "0";
        check.style.opacity = "1";
    }, 3000)
}

function loading(e) {
    let filePath = e.srcElement.value.split('\\');
    let fileName = filePath[filePath.length - 1];
    cloud.alt = fileName;
    cloud.src = ""
    console.log(fileName);
}

btn.addEventListener("click", () => file.value !== "" && !exec ? upload() : console.log('input file empty'));
file.addEventListener('change', loading);
