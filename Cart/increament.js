let c = document.getElementById('count');
let d = document.getElementById('count1');
let e = document.getElementById('count2');
let f = document.getElementById('qnty');
let a = 0;

function inc()
{
  a++;
  c.innerHTML = a;
  d.innerHTML = a;
  e.innerHTML = a*300;
  f.innerHTML = a;
}
function dec()
{
    if(a!=0){
    a--;
    c.innerHTML = a;
    d.innerHTML = a;
    e.innerHTML = a*300;
    f.innerHTML = a;
    }
}