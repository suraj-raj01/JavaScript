let time = document.getElementById('time');
let date = document.getElementById('date');

function start() {
    x = setInterval(() => {
        let a = new Date();
        let b = a.toLocaleTimeString();
        let c = a.toDateString();
        time.innerHTML = b;
        date.innerHTML = c;
        console.log(b);
    }, 1000);
}

function Stop() {
    setTimeout(() => {
        clearInterval(x);
    });
}