// WAP to generate factorial of any number.

let a = parseInt(prompt("Enter the number: "));
fact(a);
function fact(a) {
    let fact = 1;
    for (let i = 1; i <= a; ++i) {
        fact *= i;  // fact = fact*i;
    }
    document.write(fact);
    console.log(fact);
}

