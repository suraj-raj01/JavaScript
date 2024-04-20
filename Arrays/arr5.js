/*
let ar = ["c++","python","php","react"];
ar.push(1,4,5,7);  
// push() -> it is use for add data at the last in an arry.
console.log(ar); 

ar.pop();   
// pop() -> it is use for delete last data of an array.
console.log(ar);

ar.unshift(2,3,6);  
// unshift() -> it is use for add data starting indexes in an array.
console.log(ar);

ar.shift();
// shift() -> it is use for delete data of first index of an array.
console.log(ar);

console.log("length : ",ar.length);

ar1 = [1,4,6,8,5];
let concat = ar.concat(ar1);
console.log(concat);

// slice -> it is use to remove data using indexing.

let arr = [1,2,3,4,5];
let b = arr.slice(1,4);
console.log(b);
console.log(arr);

// splice -> splice(1(index),5(no. of element))
// it is use for remove elements


let ar2 = [1,2,3,4,5,6];
ar2.splice(1,3);
console.log(ar2);

let ar3 = [1,2,3,4,5,6];
ar3.splice(1,3,"abc","def");
console.log(ar3);


// di-structuring in array.

let [r,s,t,u] =  [1,2,3,4];
console.log(s+r);
console.log(u);
console.log(r+s+t+u);


// join -> The join() method also joins all array elements into a string.
let join = document.getElementById('join');
let str = ["apple","mango","banana","guava"];
join.innerHTML = str.join("*");
console.log(str);

*/

// spread Operator -> it is used to merge data.
let array1 = ["c++","java","html","css","javascript"];
let array2 = [1,2,3,...array1];
console.log(array2);
