const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const pause = document.getElementById("pauseBtn");
const schwach = document.getElementById("schwachBtn");
const kalender = document.getElementById("kalender");
const dateEl = document.getElementById("date");
let totalSeconds = 0;
let timerInterval;


pause.addEventListener("click", function() {
    if (!timerInterval) {
        timerInterval = setInterval(setTime, 1000);
    }    
})

schwach.addEventListener("click", function(){
    clearInterval(timerInterval);
    timerInterval = null;
    totalSeconds = 0;
    dateEl.textContent = "";
    secondsElement.innerHTML = " SEC 00";
    minutesElement.innerHTML = " MIN 00";
    hoursElement.innerHTML = " H 00";
})

function setTime() {
    ++totalSeconds;
    secondsElement.innerHTML = pad(totalSeconds % 60) + " " + "SEC";
    minutesElement.innerHTML = pad(Math.floor(totalSeconds / 60) % 60) + " " + "MIN";
    hoursElement.innerHTML = pad(Math.floor(totalSeconds / 3600) % 24) + " " + "H";
}

function pad(val) {
    return val < 10 ? "0" + val : val;
}

function dateSubmit() {
    let date = document.getElementById("kalender").value;
    if (date) {
        // input type=date returns YYYY-MM-DD, convert to DD.MM.YYYY
        const parts = date.split("-");
        if (parts.length === 3) {
            const german = `${parts[2]} ${parts[1]} ${parts[0]}`;
            dateEl.textContent = german;
        }
        if (!timerInterval) timerInterval = setInterval(setTime, 1000);
    }
}