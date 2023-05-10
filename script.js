let timer = document.getElementById("timer");


const channel = new BroadcastChannel('timerChannel');

let start;
let elapsed;


channel.onmessage = (event) => {
    start = event.data.start;
    elapsed = event.data.elapsed;
};

if (sessionStorage.getItem("start")) {
    start = Number(sessionStorage.getItem("start"));
    elapsed = Number(sessionStorage.getItem("elapsed"));
} else {
    start = Date.now();
    sessionStorage.setItem("start", start);
}

let interval = setInterval(() => {
    elapsed = Date.now() - start;
    sessionStorage.setItem("elapsed", elapsed);

    
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
