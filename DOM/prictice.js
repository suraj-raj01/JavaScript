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


let s1 = document.createElement('span')
let s2 = document.createTextNode("This is The Span Tag!!")
s1.appendChild(s2);
console.log(s1);
let s3 = document.getElementById('hero')
s3.appendChild(s1);