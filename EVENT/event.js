function onclk()
{
    alert("This is Working!")
    console.log("Onclick Even")
}

function input()
{
    let a = prompt("Enter the firs number: ");
    let b = prompt("Enter the second number: ");
    console.log(a+" "+b);
    document.getElementById('res').innerHTML=a+" "+b;
}

function ondbl()
{
    let a = prompt("Enter the number: ");
    console.log(a*a);
    document.getElementById('res1').innerHTML=a*a;
}