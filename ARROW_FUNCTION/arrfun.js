let a = 10;
let b = 20;
let c = (a,b) => {
    return a+b;
}
console.log(c(a,b));

let d = () =>{
    return a*b;
}
console.log(d(a,b));

let e = () => a*b;
console.log(e(a,b))

let f = (a,b) => (a*b);
console.log(f(a,b))