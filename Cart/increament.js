let c = document.getElementById('count');
let d = document.getElementById('count1');
let a = 0;
let b = 0;
function inc()
{
  a++;
  b++;
  c.innerHTML = a;
  d.innerHTML = b;
}
function dec()
{
    if(a!=0){
    a--;
    b--
    c.innerHTML = a;
    d.innerHTML = b;
    }
}