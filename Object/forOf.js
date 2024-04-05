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
