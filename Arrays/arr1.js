// Array :- Array is a variable that store or hold value more than 1.

/*
let arr1 = [1,2,3,5,4,7,8];
console.log(arr1);

let arr2 = ["a","b","c","d","e"];
console.log(arr2);
console.log(arr2[4]);

console.log("Print Numbers");
// print arr1 using for loop
for(let i=0; i<arr1.length; i++)
{
    console.log(arr1[i]);
}

console.log("Print arr2");
// print arr2 using for loop
for(let i=0; i<arr2.length; i++)
{
    console.log(arr2[i]);
}
*/


/*
let arr = [1,2,3.5,'a',"cybrom"];
console.log(arr[4]);
console.log(arr[0]+arr[2]);
*/

/*
let arr = [];
for(let i=0; i<5; ++i)
{
    arr[i] = parseInt(prompt("Enter 5 integer numbers: "));
}
console.log(arr);
*/

/*
let arr1 = [];
let mul = 1;
for(let i=0; i<10; i++)
{
    arr1[i] = parseInt(prompt("Enter the number: "));
}
for(let i=0; i<10; ++i)
{
    mul=mul*arr1[i];
}
console.log(mul);

*/

let arr1 = [];
for(let i=0; i<10; i++)
{
    arr1[i] = parseInt(prompt("Enter the number: "));
}
for(let i=0; i<10; ++i)
{
    if(arr1[i]%2==0)
    {
        console.log(arr1[i]*arr1[i]);
    }
}




















