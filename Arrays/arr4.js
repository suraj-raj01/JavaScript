let arr = [1,2,3,4,5];
console.log("arr = ", arr);
let arr1 = ['a','b','c','d'];
console.log("arr1 = ", arr1);
arr.push(6);   // last element
console.log("push 6 = ",arr);
arr.pop();     // last element
console.log("pop = ",arr);
arr.unshift("suraj",65,45);  // start element
console.log("unshift = ",arr);
arr.shift();
console.log("shift = ",arr);

let u = arr.concat(arr1);
// console.log(arr);
console.log("concat arr and arr1 = ",u);
console.log("length after concat = ",u.length);

console.log(arr);
let x = arr.toString();
let y = x[0]+x[2];
console.log(y);

let array  = [1,5,4,8,9,6];
console.log(array);
array.sort();
console.log("array after sort: ",array);

let p = [[1,2],[3,4],[5,6]];
let newArr = p.flat();
console.log(newArr);
document.write("using flat() function")
document.getElementById('print').innerHTML = newArr;

let num = [1,2,3,4,5];
console.log("original array: ",num);
console.log("reverse array: ",num.reverse());

let str = ['a','b','c','d'];
console.log("Original string: ",str);
console.log("reverse string: ",str.reverse());