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
]
console.log("Before using push()");
console.log(student);
student.push(
    {
        sname:"Amit",
        sroll:104,
        sage:23
    }
);
console.log("After using push()");
console.log(student);

console.log("after using pop()");
student.pop({});
console.log(student);

console.log("after using unshift")
student.unshift(
    {
        sname:"Hariom",
        sroll:100,
        sage:20
    }
);
console.log(student);


