let r = document.getElementById('heading');
r.innerHTML = "CYBROM";
r.style.backgroundColor='green';
r.style.padding='10px';
r.style.color='white'

let para = document.getElementById('para');
para.innerHTML = "HATE💔";

let h2 = document.getElementById('h2');
h2.innerHTML = "LOVE❤️";
h2.style.backgroundColor='green';
h2.style.padding='10px';
h2.style.color='white'

//paragraph
para.style.backgroundColor='black';
para.style.padding='15px';
para.style.color='white';
para.style.fontSize='22px';
para.style.fontWeight='bold'

//image
let img = document.getElementById('img');
img.src = "logo1.png";
img.style.backgroundColor='gold';
img.style.margin='auto'
img.style.padding='10px';


// getElementByClassName
let p = document.getElementsByClassName("p1");
console.log(p[0]);
console.log(p[1]);

//getElementByTagName
let tag = document.getElementsByTagName('span');
console.log(tag[0]);

let body = document.getElementsByTagName('body');
document.body.style.backgroundColor='lime';

let li = document.getElementsByTagName('li');
for(let i=0; i<8; i++)
    {
        if(li[i]%2!=0)
            {
                li[i].style.backgroundColor='red';
            }
    }