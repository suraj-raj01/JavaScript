let a = document.getElementById('count');
var x;
let c=1;
function start()
{
    // SetInterval:- setInterval is function in which we pass function and time.
    x = setInterval(()=>{a.innerHTML=c, c++},1000)
}

function stop()
{
    clearInterval(x);
}

let t = document.getElementById("time");
var x1;
function start1()
{
    x1 = setInterval(()=>{
        let time = new Date();
        let d = time.toLocaleTimeString();
        t.innerHTML=d;
    },1000)
}
function stop1()
{
    clearInterval(x1);
}