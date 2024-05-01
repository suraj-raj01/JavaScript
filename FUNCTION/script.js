// function fun()   // declaration
// {
//     let a = parseInt(prompt("enter first number: "));
//     let b = parseInt(prompt("enter second number: "));
//     console.log(a+b);
//     //definition
// }
// function calling 

// function f1(a,b)
// {
//     // console.log(a+b);
//     return a+b;
// }
// console.log(f1(10,20));
// let c = f1(10,20);
// console.log(f1(c))


// WAP to find Area of circle using function with argument with value take input by user
let a = parseInt(prompt("enter the area: "));
function area(a)
{
    return 3.14*a*a;
}
let x = area(a);
console.log(x);
