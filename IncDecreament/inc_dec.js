
let c = document.getElementById('count');
let a = 0;
function inc()
{
  a++;
  c.innerHTML = a;
}
function dec()
{
    if(a!=0){
    a--;
    c.innerHTML = a;
    }
}