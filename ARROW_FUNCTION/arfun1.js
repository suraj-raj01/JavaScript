// Arrow Function is use for code consize.
/*
Syntax:-
1. () => { return value}
2. 
*/

// let a = 10;
// let fun = (a) => {return a+a}
// console.log(fun(a))

// WAP to find area of circle radius take from the user.

let r = prompt("enter the radius: ");
let area = fun =>{ return 3.14*r*r}
console.log(area(r));
document.getElementById('res').innerHTML="Area of circle: "+area(r);

//WAP to check number is odd or even

let val = prompt("enter the number: ");
let evenOdd = (val) =>{ 
    if(val%2==0)
        {
            return "even";
        }
        else 
        {
            return "odd";
        }
 }
 console.log(evenOdd(val))

// WAP to find the Simple Interest

let amount = prompt("Enter the amount: ");
let month = prompt("Enter the month: ");
let Interest = prompt("Enter the enterest: ");
let si = () =>{
    return (amount*month*Interest)/100;
}
console.log(si(amount,month,Interest))

// WAP to swap two number.

let x1 = prompt("Enter the value of x1: ");
let x2 = prompt("Enter the value of x2: ");
let swp = () => {
    console.log("Before Swapping:")
    console.log("x1 : ",x1);
    console.log("x2 : ",x2);
    let temp = x1;
    x1 = x2;
    x2 = temp;
    console.log("After Swapping:")
    console.log("x1 : ",x1);
    console.log("x2 : ",x2);
}
(swp(x1,x2));