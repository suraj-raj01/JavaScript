// WAP to swap two number.

/*
let a,b;
a=10;
b=20;
let temp = a;
       a = b;
       b = temp;
console.log("a = ",a,"b = ",b);
document.write("a = ",a,"b = ",b);
*/

// WAP to swap two number using two variable.

let a,b;
a = 10;
b = 20;

a = a+b;
b = a-b;
a = a-b;

console.log("a = ",a,"b = ",b);
document.write("a = ",a,"b = ",b);
