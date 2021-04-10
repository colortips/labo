const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const secondes = document.getElementById('secondes');
var last_secondes;

function countdown_calcul() {
    // Calculation of date
    var actual_date = Date.now();
    var actual_year = new Date().getFullYear();
    var birthday = "-05-17T00:00:00";
    if (actual_date > new Date(actual_year + birthday)) actual_year++;
    var countdown_date = new Date(actual_year + birthday).valueOf();
    var date_diff = (countdown_date - actual_date) / 1000;
    var date_day = Math.floor(date_diff / (60 * 60 * 24));
    var date_hour = Math.floor((date_diff - (date_day * 60 * 60 * 24)) / (60 * 60));
    var date_minutes = Math.floor((date_diff - ((date_day * 60 * 60 * 24 + date_hour * 60 * 60))) / 60);
    var date_secondes = Math.floor(date_diff - ((date_day * 60 * 60 * 24 + date_hour * 60 * 60 + date_minutes * 60)));

    // Display of countdown
    if (date_day < 10) {
        date_day = "0" + date_day;
    }
    days.innerHTML = date_day;
    if (date_hour < 10) {
        date_hour = "0" + date_hour;
    }
    hours.innerHTML = date_hour;
    if (date_minutes < 10) {
        date_minutes = "0" + date_minutes;
    }
    minutes.innerHTML = date_minutes;
    if (date_secondes < 10) {
        date_secondes = "0" + date_secondes;
    }
    secondes.innerHTML = date_secondes;

    // Animate
    anim(secondes, last_secondes);
    secondes.style.animation = '';

}
setInterval(countdown_calcul, 500);

function anim(elem, last) {
    if (elem.innerHTML != last) {
        console.log(elem.innerHTML);
        elem.style.animation = 'change .1s';
    }
    last_secondes = secondes.innerHTML;
}