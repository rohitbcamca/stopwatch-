let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let running = false;

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 1000);
        changeBorderColor();
    }
}

function stopTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('stopwatch').textContent = '00:00:00';
    document.getElementById('laps').innerHTML = ''; // Clear laps
}

function lapTimer() {
    if (running) {
        const lapTime = document.getElementById('stopwatch').textContent;
        const lapDiv = document.createElement('div');
        lapDiv.textContent = lapTime;
        document.getElementById('laps').appendChild(lapDiv);
    }
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById('stopwatch').textContent = 
        (hours < 10 ? '0' + hours : hours) + ':' + 
        (minutes < 10 ? '0' + minutes : minutes) + ':' + 
        (seconds < 10 ? '0' + seconds : seconds);
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeBorderColor() {
    const stopwatch = document.getElementById('stopwatch');
    const buttons = document.querySelectorAll('#buttons button');
    setInterval(() => {
        const randomColor = getRandomColor();
        stopwatch.style.borderColor = randomColor;
        buttons.forEach(button => {
            button.style.borderColor = randomColor;
        });
    }, 1000);
}


