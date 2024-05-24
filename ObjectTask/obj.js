let obj = {
    namee : "SURAJ KUMAR",
    age : 21,
    post : "Junior Developer",
    contact : ["Bhopal","Banglore"],
    salary : {
        anual_Income : 1200000,
        monthly_Income : 100000,
        Leaves : 15
    }
}

console.log(obj);
// console.log(obj.contact);
// console.log(obj.salary);

obj.salary.anual_Income=500000;
// console.log(obj);

obj.salary.Leaves=6;
// console.log(obj);

obj.salary.Conditional_Leave = 10;
// console.log(obj);

obj.post="FullStack Developer";
// console.log(obj);

delete obj.age;
console.log(obj);
