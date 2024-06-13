// arr1 and arr2 merge to each other and print the sum of array element using for of loop.

let arr1 = [7,8,9,10];
let arr2 = [1,2,3,4,5,6,...arr1];
console.log(arr2);
let sum = 0;
for(let val of arr2)
{
    sum += val;
}
console.log("sum is : ",sum);
console.log(arr2);


let a1 = [1,2,3,4,5];
let a2 = [5,6,7,8,9,...a1];
let totalSum = 0;
console.log(a2)
// for loop
for(let i=0; i<a2.length; i++)
{
    totalSum+=a2[i];
}
console.log(totalSum);
// for of loop
for(let value of a2)
{
    totalSum+=value;
}
console.log(totalSum);