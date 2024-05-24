let obj = {
    namee: "SURAJ KUMAR",
    city: "BPL",
    contact: 346546,
    address: ["Indore","canada"]
}

console.log(obj.address[1]);   // canada
console.log(obj.address[0]);   // Indore
let a = Object.keys(obj);
console.log(a);  // [ 'namee', 'city', 'contact', 'address' ]

console.log(a[3]);   // address

// delete
delete obj.namee;
console.log(obj);

// add object
obj.age = 20;
console.log(obj)

// update
obj.city = "Nepal";
console.log(obj);