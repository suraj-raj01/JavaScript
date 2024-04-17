/*
filter functions
*/

let employee = [
    {
        namee:"Suraj",
        age:23,
        status:"single"
    },
    {
        namee:"Rajan",
        age:24,
        status:"mingle"
    },
    {
        namee:"Amit",
        age:25,
        status:"married"
    },
    ];

    let fltr = employee.filter((t)=>{ return (t.age>23 && t.age<25)});
    console.log(fltr);