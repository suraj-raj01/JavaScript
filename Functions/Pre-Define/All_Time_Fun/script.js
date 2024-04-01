let a = "suraj";
console.log(a.length);
console.log(a.toUpperCase());
console.log(a.toLowerCase());

let x,y;
x = "suraj";
y = "kumar";
console.log(x.concat(y));

// compare with two string for password match.
let m,n;
// m = prompt("Ener the password: ");
// n = prompt("Re-enter password: ");
if(m === n)
{
    // document.write("success");
    console.log("succes!")
}
else{
    // document.write("invalid");
    console.log("Invalid!")
}

let u = "abcd";
let v = "abcd";
console.log(u.match(v) != 1);

// function in function is called callback function or higher order funtion