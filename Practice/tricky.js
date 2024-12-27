// fibonacci series
/*
let a=0;
let b=1;
console.log(a);
console.log(b);
fib(10,a,b);
function fib(n,a,b){
    if(n==0)
    {
        return;
    }
    let c = a+b;
    console.log(c);
    fib(n-1,b,c);
}
*/

// Binary Search
/*
function binarySearch(arr,target){
    let start=0;
    let end = arr.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]==target){
            return mid;
        }
        else if(arr[mid]>target){
            end = mid-1;
        }
        else{
            start = mid+1;
        }
    }
    return -1;
}
let arr = [1,5,8,9,45,78];
const target = 45;
const result = binarySearch(arr,target);
console.log(result);
*/

