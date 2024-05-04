let h1 = document.createElement("h1");
let h1text = document.createTextNode("hello");
h1.appendChild(h1text);
console.log(h1text);

let heading = document.getElementById('main');
heading.appendChild(h1);
heading.style.backgroundColor='red';

let P = document.createElement("p");
let ptext = document.createTextNode("good Evening");
P.appendChild(ptext);
console.log(ptext);
let para = document.getElementById('para');
para.appendChild(P);
para.style.backgroundColor='aqua'
para.style.fontWeight='bold';
para.style.textTransform = 'capitalize'