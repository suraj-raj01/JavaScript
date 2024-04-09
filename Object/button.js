/*
function even()
{
    let x = parseInt(prompt("Enter the number: "));
    if(x%2==0)
    {
        document.getElementById('result').innerHTML = "Even Number";
    }
    else{
        document.getElementById('result').innerHTML = "Odd Number";
    }
}

function ptr()
{
    let pt = parseInt(prompt("Enter the number of row: "));
    for(let i=0; i<=pt; i++)
    {
        for(let j=0; j<=i-1; j++)
        {
            document.write("*");
        }
        document.write("<br>");
    }
}

*/

/*
let obj = {
    key1:"value1",
    key2:"value2"
}

let k = Object.values(obj);
for(let val of k)
{
    console.log(val);
}
*/

// we have 4 digit add starting digit and ending digit.

let digit;
digit = parseInt(prompt("Enter the number: "));
let start,end;

if(digit<10000 && digit>999)
{
start = (Math.floor(digit/1000));

end = (Math.floor(digit%1000%100%10));

console.log("Sum is: ",start+end);
}
else{
    console.log("please enter 4 digit number");
}
