// While loop is an entry loop 

// Wap to print table if number is even and print cube if number is odd.

let a = parseInt(prompt("enter the number: "));
// let a = 9;
let b = 1;
if(a%2==0)
{
    while(b<=10)
    {
        console.log(a*b);
        b++;
    }
}
else{
    console.log(a*a*a);
}