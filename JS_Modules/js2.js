import add from "./js1.js";

let x = parseInt(prompt("Enter the first number: "))
let y = parseInt(prompt("Enter the second number: "))

let sum = add(x,y);
let h = document.getElementById("ans");
h.innerHTML=sum;

import mul from "./js3.js";
let m = mul(x,y);
let ans2 = document.getElementById("ans1")
ans2.innerHTML=m;

import div from "./js4.js";
let d = div(x,y);
let ans3 = document.getElementById("ans2");
ans3.innerHTML=d;
