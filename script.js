let startTime, updatedTime, difference;
let tInterval;
let running = false;

const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');

document.getElementById('startBtn').addEventListener('click', startStopwatch);
document.getElementById('stopBtn').addEventListener('click', stopStopwatch);
document.getElementById('resetBtn').addEventListener('click', resetStopwatch);

function startStopwatch() {
    if (!running) {
        running = true;
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 10);
    }
}

function stopStopwatch() {
    if (running) {
        running = false;
        clearInterval(tInterval);
    }
}

function resetStopwatch() {
    clearInterval(tInterval);
    running = false;
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    millisecondsElement.textContent = '00';
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    minutesElement.textContent = pad(minutes);
    secondsElement.textContent = pad(seconds);
    millisecondsElement.textContent = pad(milliseconds);
}

function pad(number) {
    return (number < 10 ? '0' : '') + number;
}
