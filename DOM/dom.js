let r = document.getElementById('heading');
r.innerHTML = "CYBROM";
r.style.backgroundColor = 'green';
r.style.padding = '10px';
r.style.color = 'white'

let para = document.getElementById('para');
para.innerHTML = "HATE💔";

let h2 = document.getElementById('h2');
h2.innerHTML = "LOVE❤️";
h2.style.backgroundColor = 'green';
h2.style.padding = '10px';
h2.style.color = 'white'

//paragraph
para.style.backgroundColor = 'black';
para.style.padding = '15px';
para.style.color = 'white';
para.style.fontSize = '22px';
para.style.fontWeight = 'bold'

//image
let img = document.getElementById('img');
img.src = "logo1.png";
img.style.backgroundColor = 'gold';
img.style.margin = 'auto'
img.style.padding = '10px';


// getElementByClassName : returns node [return value in array formats].
let p = document.getElementsByClassName("p1");
console.log(p[0]);
console.log(p[1]);

//getElementByTagName : returns node [return value in array formats].
let tag = document.getElementsByTagName('span');
console.log(tag[0]);

let body = document.getElementsByTagName('body');
document.body.style.backgroundColor = 'orangered';

let x = document.getElementsByTagName('li');
for (let i = 0; i < 8; i++) {
    if (i % 2 == 0) {
        x[i].style.backgroundColor = 'black';
        x[i].style.fontWeight = 'bold';
        x[i].style.color = 'white';
    }
}

// createElement : it is use for create element(tag).
let el = document.createElement("h1");
console.log(el);

// createTextNode : it use for create text on html page.
let text = document.createTextNode("Hello");
console.log(text);

// appendChild : it is use for add text in element
el.appendChild(text);
console.log(el)
// document.write(el);

let s = document.getElementById('main');
s.appendChild(el);

