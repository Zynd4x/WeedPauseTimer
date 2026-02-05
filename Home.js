const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const pause = document.getElementById("pauseBtn");
const schwach = document.getElementById("schwachBtn");
const kalender = document.getElementById("kalender");
const timer = document.getElementById("timer");
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
    secondsElement.innerHTML = "00";
    minutesElement.innerHTML = "00";
    hoursElement.innerHTML = "00";
})

function setTime() {
    ++totalSeconds;
    secondsElement.innerHTML = pad(totalSeconds % 60)
    minutesElement.innerHTML = pad(Math.floor(totalSeconds / 60) % 60)
    hoursElement.innerHTML = pad(Math.floor(totalSeconds / 3600) % 24)
}

function pad(val) {
    return val < 10 ? "0" + val : val;
}

kalender.addEventListener("change", function(){
    let selectedDate = kalender.value;
    setFullYear(selectedDate);
    timer.innerHTML = selectedDate
})