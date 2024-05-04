let el = document.createElement("h1");
console.log(el);

let text = document.createTextNode("Hello");
console.log(text);

el.appendChild(text);
console.log(el)

let s = document.getElementById('practice');
s.appendChild(el);
s.style.backgroundColor='gold'


let el1 = document.createElement("p");
console.log(el1);

let text1 = document.createTextNode("Good Evening");
console.log(text1);

el1.appendChild(text1);
console.log(el1)

let s1 = document.getElementById('para');
s1.appendChild(el1);
s1.style.backgroundColor='green'
s1.style.backgroundColor='gold';
s1.style.color='red'