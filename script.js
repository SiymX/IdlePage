let timer = document.getElementById("timer");

const channel = new BroadcastChannel('timerChannel');
const KEEP_ALIVE_INTERVAL = 2000; 
const KEEP_ALIVE_THRESHOLD = 5000; 

let start;
let elapsed;

channel.onmessage = (event) => {
    start = event.data.start;
    elapsed = event.data.elapsed;
};

if (localStorage.getItem("start") &&
    Date.now() - Number(localStorage.getItem("lastSeen")) < KEEP_ALIVE_THRESHOLD) {
    start = Number(localStorage.getItem("start"));
    elapsed = Number(localStorage.getItem("elapsed"));
} else {
    start = Date.now();
    localStorage.setItem("start", start);
}

let interval = setInterval(() => {
    elapsed = Date.now() - start;
    localStorage.setItem("elapsed", elapsed);
    localStorage.setItem("lastSeen", Date.now());

    channel.postMessage({start: start, elapsed: elapsed});

    let totalSeconds = Math.floor(elapsed / 1000);
    let totalMinutes = Math.floor(totalSeconds / 60);
    let totalHours = Math.floor(totalMinutes / 60);

    let milliseconds = elapsed % 1000;
    let seconds = totalSeconds % 60;
    let minutes = totalMinutes % 60;
    let hours = totalHours;

    timer.innerHTML = `<span class="timePart"><span class="time">${hours.toString().padStart(2, '0')}</span><span class="label">h</span></span>
                       <span class="timePart"><span class="time">${minutes.toString().padStart(2, '0')}</span><span class="label">m</span></span>
                       <span class="timePart"><span class="time">${seconds.toString().padStart(2, '0')}</span><span class="label">s</span></span>
                       <span class="timePart"><span class="time ms">${milliseconds.toString().padStart(3, '0')}</span><span class="label ms">ms</span></span>`;
}, 10);

setInterval(() => {
    localStorage.setItem("lastSeen", Date.now());
}, KEEP_ALIVE_INTERVAL);
