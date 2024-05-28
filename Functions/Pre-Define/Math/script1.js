let a = 16;
console.log("square root of ",a," : ",Math.sqrt(a));

let b = Math.max(1,6,8,4,9,15,47);
console.log("maximum number is : ",b);

let c = Math.min(1,6,8,4,9,15,47);
console.log("minimum number is : ",c);

let base = 5;
let power = 3;
let d = Math.pow(base,power);
console.log(base," of power ",power," : ",d);

// trunc function remove decimal numbers
let e = Math.trunc(3.556);
console.log("value of ",3.556," : ",e);

// random number generator
let f = Math.random()*5+1;
console.log("number are : ",f);
console.log("number are : ",Math.trunc(f));
