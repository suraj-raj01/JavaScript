/*
let d = (a,b) => { return a*a};
let d = (a) => (a*a);
let d = a => a*a;
*/

let a = prompt("Enter a number: ");
let d = (a) => {return a*a};
console.log(d(a));

let a1 = prompt("Enter the number: ");
let d1 = (a1) => (a1*a1);
console.log(d1(a1))

// let x = prompt("Enter the number: ");
// let y = (x) => x*x;
// console.log(y(x));

// let x = prompt("Enter the number: ");
// let y = a => x*x;
// console.log(y(x));

let x = prompt("Enter the number: ");
let y = () => x*x;
console.log(y(x));

let i = 10;
let j = 20;
let f = (i,j) => {
    return i+j;
}
console.log(f(i,j))