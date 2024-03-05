// WAP to generate factorial of any number.

function fact(a) {
    let fact = 1;
    for (let i = 1; i <= a; ++i) {
        fact *= i;  // fact = fact*i;
    }
    document.write(fact);
}

let a = parseInt(prompt("Enter the number: "));
fact(a);