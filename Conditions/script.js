
// WAP to check number odd or even
/*
let a = parseInt(prompt("Enter the number to check odd or even: "));
if(a % 2 == 0)
{
    document.write(a," even number");
}
else{
    document.write(a," is odd number");
}

*/

//WAP to check eligible or not again check indian or not if it is indian then it can eligible for vote.

let a = parseInt(prompt("Enter the age: "));
if(a>=18)
{
    let ind = 1,nonInd = 2;
    let age = parseInt(prompt("Enter the number: 1. for Indian 2. for Non Indian"));
    if(age == ind)
    {
        document.write("you are eligible");
    }
    else{
        document.write("You are not eligible");
    }
}
else{
    document.write("You are not eligible");
}