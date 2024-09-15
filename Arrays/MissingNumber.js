// WAP to return the missing number

let arr = [0,1,2,3,4,6,7,8];
let size = arr.length;
let sum = size*(size+1)/2;
let s = 0;
for(let i=0; i<arr.length; i++){
    s+=arr[i];
}
console.log("missing number : ",sum-s);