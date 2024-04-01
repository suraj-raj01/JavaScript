// first type
/*

() => {
  return 
}

// second type

() => ()

// third type
() =>

*/

// first type
let c = () => {
    return 50;
}

console.log(c);
console.log(c())

let d = (a) => {
    return a+a;
}
console.log(d(35));

// second type

let e = (b) => (b)
console.log(e(12));

let f = (b,a) => (a+b)
console.log(f(12,12));

// third type

let g = (h) => h
console.log(g(56));

// fourth type

let y = u => u
console.log(43);