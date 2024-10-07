// fibonacci series
let a=0;
let b=1;
console.log(a);
console.log(b);
fib(10,a,b);
function fib(n,a,b){
    if(n==0)
    {
        return;
    }
    let c = a+b;
    console.log(c);
    fib(n-1,b,c);
}

