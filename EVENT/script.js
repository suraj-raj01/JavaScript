function clk() {
    let p = document.getElementById('para');
    p.style.display = "block";
}

// Increament and Reset Button.
let a = 0;
function inc() {
    a++;
    document.getElementById('res').innerHTML = a;
}
function dec() {
    if (a != 0) {
        a--;
        document.getElementById('res').innerHTML = a;
    }
}
function reset() {
    a = 0;
    document.getElementById('res').innerHTML = a;
}