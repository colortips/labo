const day_format = document.querySelector('.day');
const time = document.querySelector('.heure');
const date_format = document.querySelector('.date');
function setDate() {
    const now = new Date();

    const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
    const hours = now.getHours();
    time.innerHTML = `${hours} ${minutes}`;

    const nDay = now.getDate();
    const nMonth = now.getMonth();
    const nYear = now.getFullYear();
    date_format.innerHTML = `${nDay}/${nMonth + 1}/${nYear}`;

    const french_days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    const index_day = now.getDay();
    day_format.innerHTML = `${french_days[index_day - 1]}`;
}
setInterval(setDate, 1000);