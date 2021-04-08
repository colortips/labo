const css_sheet = document.getElementById('css_mode');

const button_togle = document.getElementById('button--togle');

function togleMode() {
    if (css_sheet.getAttribute('href') === "css/light-theme.css") {
        css_sheet.setAttribute('href', 'css/dark-theme.css');
        button_togle.style.justifyContent = "flex-start";
    }
    else {
        css_sheet.setAttribute('href', 'css/light-theme.css');
        button_togle.style.justifyContent = "flex-end";
    }
}