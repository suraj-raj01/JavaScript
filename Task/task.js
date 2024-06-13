let b = document.getElementsByTagName('body');
function mode() {
    document.body.classList.toggle('demo')
}

let i = 0
let a = 0;
function fun1()
{
    x = 230;
    a+=x;
    i++;
    alert("Item Added");
    document.getElementById("res").innerHTML=a;
    document.getElementById("itm").innerHTML=i;
}

function fun2()
{
    x = 330;
    a+=x;
    i++;
    alert("Item Added");
    document.getElementById("res").innerHTML=a;
    document.getElementById("itm").innerHTML=i;
}
function fun3()
{
    x = 299;
    a+=x;
    i++;
    alert("Item Added");
    document.getElementById("res").innerHTML=a;
    document.getElementById("itm").innerHTML=i;
}
function fun4()
{
    x = 399;
    a+=x;
    i++;
    alert("Item Added");
    document.getElementById("res").innerHTML=a;
    document.getElementById("itm").innerHTML=i;
}


function display()
{
    document.getElementById("item").style.display = "block";
}

function hide()
{
    document.getElementById("item").style.display = "none";
}