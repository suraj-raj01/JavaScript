/*
String :- string is the collection of characters.
*/

// Tempelate Literals :-
// charAt() :- it is use for strong password generator.

let str = "SURAJ KUMAR";
console.log(str);
let str1 = "SURAJ\nKUMAR";
console.log(str1);
let str2 = `hello guys
    this is suraj 
        kumar`
console.log(str2);

let str3 = `hello welcome
to the "cybrom" ${str}`;
console.log(str3);

// charAt()
let name1 = "SURAJ";
console.log(name1[3]);
console.log(name1.charAt(3));

// upercase 
console.log("to upper case");
let na = "suraj";
console.log(na);
console.log(na.toUpperCase());

// Lower Case
console.log("to lower case");
let name2 = "SURAJ_KUMAR";
console.log(name2);
console.log(name2.toLowerCase());

// Replace Function() :-
console.log("Replace Function()");
let name3 = "QASIM sir hame apse padhna hai";
let u = "deepak sir se";
console.log(name3.replace(name3, u));
console.log(name3.replace("apse", u));

// Repeat Function():-
let a = "mujhe apse nhi padhna hai\n";
console.log(a.repeat(20));

