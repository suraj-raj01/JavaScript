/*
Map():-
it is used to fetching data
*/

let employee = [
{
    namee:"Suraj",
    age:24,
    status:"single"
},
{
    namee:"Rajan",
    age:24,
    status:"mingle"
},
{
    namee:"Amit",
    age:24,
    status:"married"
},
];

let p = employee.map((i)=> { return i});  
let q = employee.map((i)=> { return i.namee});  // print name
let r = employee.map((i)=> { return Object.values(i)});  // print values
console.log(p);
console.log(q);
console.log(r);


