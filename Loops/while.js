// While loop is an entry loop 

// Wap to print table if even and print cube if odd.

let a = parseInt(prompt("enter the number: "));
let b = 1;
if(a%2==0)
{
    while(b<=10)
    {
        console.log(a*b);
        b++;
    }
}
else if(a%2 != 0){
    console.log(a*a*a);
}