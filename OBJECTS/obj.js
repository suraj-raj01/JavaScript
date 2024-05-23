// Object : Object is a type of data type use for multiple value store
// it is always in the form of key and value pairs.
/*
let obj = {
    namee : "SURAJ KUMAR",
    city : "BIHAR",
    contact : 12365487
};
console.log(obj)
console.log(obj.namee)
console.log(obj.city);
console.log(obj.contact);

// it return value in array format
let a = Object.values(obj)
console.log(a);
// if we need to print one by one value then we should use indexing.
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
*/

let obj1 = {
    namee: "SURAJ KUMAR",
    city: "BPL",
    contact: 346546,
    account: {
        ac_name: "SBI",
        ac_holder: "SURAJ",
        ac_num: 12656,
        ac_bal: 1000.324
    }
}

console.log(obj1.account.ac_name);
console.log(obj1.account.ac_holder);
console.log(obj1.account.ac_num);
console.log(obj1.account.ac_bal);

// print keys using for in loop
for (let val in obj1) {
    console.log(val)
}

for (let val in obj1) {
    console.log(obj1[val])
}
