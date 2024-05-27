let emp = [
    {
        namee : "SURAJ KUMAR",
        AGE : 21,
        CITY : "Bhopal",
        CONTACT : 9879516465,
        designation : "Junior Developer"
    },
    {
        namee : "RAJAN KUMAR",
        AGE : 22,
        CITY : "BIHAR",
        CONTACT : 5544465654,
        designation : "Senior Developer"
    },
    {
        namee : "DEVANSH KUMAR",
        AGE : 23,
        CITY : "Mandideep",
        CONTACT : 8846546546,
        designation : "frontend Dev"
    },
    {
        namee : "SANJU KUMAR",
        AGE : 25,
        CITY : "REVA",
        CONTACT : 5544465654,
        designation : "MAZDOOR"
    },
    {
        namee : "SHIVAM KUMAR",
        AGE : 24,
        CITY : "Indore",
        CONTACT : 7789454654,
        designation : "Cyber Security"
    }
];

// console.log(emp)

let p = {
    namee : "LALAN KUMAR",
    AGE : 24,
    CITY : "Indore",
    CONTACT : 7789454654,
    designation : "Data Engineer"
}
// console.log(emp)
console.table(emp);
emp.push(p)
// console.log(emp);
console.table(emp)
emp.pop(p);
// console.log(emp);
console.table(emp)
emp.shift(p);
console.table(emp)

let s = {
    namee : "PRAVIN KUMAR",
    AGE : 26,
    CITY : "Mumbai",
    CONTACT : 7789454654,
    designation : "Java Developer"
}

emp.unshift(s);
console.table(emp);

emp.push(a={
    namee : "SURAJ KUMAR",
    AGE : 22,
    CITY : "BHOPAL",
    CONTACT : 6546554325,
    designation : "Data Scientist"
})

console.table(emp)

// map function : - it is used to fetch data and return array.

let x = emp.map((e)=>{return e;})
console.log(x);
let y = emp.map((e)=>{return e.namee;})
console.log(y);
let z = emp.map((e)=>{return e.AGE*e.AGE})
console.log(z);

// filter function: 

let u = emp.filter((e)=>{return e.AGE>22});
console.log(u);
console.table(u);