/* 
ForEach-Loop:-
foreach loop is a loop as well as callBack function.
it doesn't return anything.
*/

let student = [
    {
    Sname:"Rajan",
    sroll:101,
    sage:20
    },
    {
    Sname:"Suraj",
    sroll:102,
    sage:21
    },
    {
    Sname:"Devansh",
    sroll:103,
    sage:22
    }
];

student.forEach((i)=> console.log(i));
//Print keys
student.forEach((i)=> console.log(i.Sname));
//Print Values
student.forEach((i)=> console.log(Object.values(i)));


